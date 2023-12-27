import { useParams } from 'react-router-dom';
import Footer from '../reusableComponents/Footer/Footer';
import Header from '../reusableComponents/Header/Header';
import { fetchData } from '../../utils/utils';
import { useState, useEffect } from 'react';
import './item.css';

export default function Item() {
  const { itemId } = useParams();

  if (itemId > 20) {
    throw new Error('This item does not exist');
  }

  const [item, setItem] = useState([]);

  useEffect(() => {
    async function fetchDataGet() {
      const response = (
        await fetchData(`https://fakestoreapi.com/products/${itemId}`)
      )[0];
      console.log(response);

      const curItem = (
        <section key={response.id} className="product">
          <img alt="item" src={response.image} />

          <section className="desc">
            <h3>{response.title}</h3>
            <p className="price">${response.price.toFixed(2)} USD</p>
            <button>Add to cart</button>
            <p className="description">{response.description}</p>
          </section>
        </section>
      );

      setItem(curItem);
    }
    fetchDataGet();
  }, [itemId]);

  return (
    <>
      <Header />
      {item}
      <Footer />
    </>
  );
}
