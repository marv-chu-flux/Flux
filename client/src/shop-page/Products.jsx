import { useEffect, useState } from 'react';
import { fetchData } from '../utils/utils';
import './products.css';

export default function Products() {
  const [items, setItems] = useState([]);

  function itemClick(id) {
    console.log(`https://fakestoreapi.com/products/${id}`);
  }

  useEffect(() => {
    async function fetchDataGet() {
      const response = (
        await fetchData('https://fakestoreapi.com/products')
      )[0];
      console.log(response);

      const arrItems = response.map((item) => {
        return (
          <li onClick={() => itemClick(item.id)} key={item.id}>
            <h4>{item.title}</h4>
            <img alt="item" src={item.image} />
            <p>${item.price}</p>
          </li>
        );
      });

      setItems(arrItems);
    }
    fetchDataGet();
  }, []);

  return <ul className="product-container">{items}</ul>;
}
