import Footer from '../reusableComponents/Footer/Footer';
import Header from '../reusableComponents/Header/Header';
import './cart.css';
import { fetchData } from '../../utils/utils';
import { useEffect, useState } from 'react';
import CartButton from '../shop-page/cartButton';

export default function Cart() {
  const [list, setList] = useState('loading...');

  useEffect(() => {
    async function loadCart() {
      const data = (await fetchData('/cart'))[0];

      console.log(data);

      if (data.length === 0) {
        setList('No Items in your cart!');
        return;
      }

      let cartItems = data.map((item) => {
        const listItem = (
          <li key={item.id}>
            <img alt="item" src={item.image_url} />
            <p>{item.name}</p>
            <p>${item.price} USD</p>
            <p>{item.quantity}</p>
            <CartButton
              text={'Remove Item'}
              cartHandler={() => handleRemove(item.id)}
            />
          </li>
        );
        return listItem;
      });

      setList(cartItems);
    }

    loadCart();

    async function handleRemove(id) {
      await fetchData(`/cart${id}`, { method: 'DELETE' });

      loadCart();
    }
  }, []);

  return (
    <>
      <Header />
      <section className="cart-section">
        <h3>Cart</h3>
        <div className="sep"></div>
        <ul>{list}</ul>
        <div className="sep"></div>
      </section>
      <Footer />
    </>
  );
}
