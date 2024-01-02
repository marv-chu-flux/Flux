import Footer from '../reusableComponents/Footer/Footer';
import Header from '../reusableComponents/Header/Header';
import './cart.css';
import { fetchData, getOptsWithBody } from '../../utils/utils';
import { useEffect, useState, useRef } from 'react';
import CartButton from '../shop-page/CartButton';

export default function Cart() {
  const [list, setList] = useState('loading...');

  const ref = useRef(null);
  const total = useRef(0);

  useEffect(() => {
    async function loadCart() {
      let data = (await fetchData('/cart'))[0];

      total.current = 0;

      data = data.sort((a, b) => b.id - a.id);

      data.forEach((item) => {
        total.current += +(item.price * item.quantity).toFixed(2);
      });

      console.log(data);

      if (data.length === 0) {
        setList('No Items in your cart!');
        ref.current = null;
        return;
      }

      ref.current = (
        <>
          <p>total: ${total.current}</p>
          <CartButton text={'Empty Cart'} cartHandler={emptyCart} />
        </>
      );

      let cartItems = data.map((item) => {
        const listItem = (
          <li key={item.id}>
            <img alt="item" src={item.image_url} />
            <p>{item.name}</p>
            <p>${item.price} USD</p>
            <CartButton
              text={'-'}
              cartHandler={() => {
                updateQuantity('-', item.id, item.quantity);
              }}
            />
            <p>{item.quantity}</p>
            <CartButton
              text={'+'}
              cartHandler={() => {
                updateQuantity('+', item.id);
              }}
            />
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

    async function updateQuantity(op, id, quantity) {
      const patchBody = getOptsWithBody({ op }, 'PATCH');
      await fetchData(`/cart${id}`, patchBody);

      if (quantity === 1) {
        handleRemove(id);
        return;
      }

      loadCart();
    }

    async function handleRemove(id) {
      await fetchData(`/cart${id}`, { method: 'DELETE' });

      loadCart();
    }

    async function emptyCart() {
      await fetchData(`/cart`, { method: 'DELETE' });
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
        {ref.current}
        <div className="sep"></div>
      </section>
      <Footer />
    </>
  );
}
