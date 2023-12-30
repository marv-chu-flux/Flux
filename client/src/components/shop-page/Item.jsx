import { useParams } from 'react-router-dom';
import Footer from '../reusableComponents/Footer/Footer';
import Header from '../reusableComponents/Header/Header';
import { fetchData, getOptsWithBody } from '../../utils/utils';
import { useState, useEffect } from 'react';
import './item.css';
import CartButton from './cartButton';

export default function Item() {
  const { itemId } = useParams();

  if (itemId > 20) {
    throw new Error('This item does not exist');
  }

  const [item, setItem] = useState([]);
  const [buttonText, setButtonText] = useState('Add to Cart');

  useEffect(() => {
    async function fetchDataGet() {
      const response = (
        await fetchData(`https://fakestoreapi.com/products/${itemId}`)
      )[0];

      async function cartHandler() {
        try {
          setButtonText('Item Added');

          const postBody = getOptsWithBody({
            name: response.title,
            image_url: response.image,
            price: response.price.toFixed(2),
            quantity: 1,
          });

          console.log(await fetchData('/cart', postBody));
        } catch (error) {
          console.error("Error adding to cart:", error);
        } finally {
          
          setTimeout(() => {
            setButtonText('Add to Cart');
          }, 2000);
        }
      }

      const curItem = (
        <section key={response.id} className="product">
          <img alt="item" src={response.image} />

          <section className="desc">
            <h3>{response.title}</h3>
            <p className="price">${response.price.toFixed(2)} USD</p>
            <CartButton cartHandler={cartHandler} text={buttonText} />
            <p className="description">{response.description}</p>
          </section>
        </section>
      );

      setItem(curItem);
    }
    fetchDataGet();
  }, [itemId, buttonText]);

  return (
    <>
      <Header />
      {item}
      <Footer />
    </>
  );
}
