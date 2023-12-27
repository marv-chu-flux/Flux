import { useEffect, useState } from 'react';
import { fetchData } from '../../utils/utils';
import './products.css';
import { Link } from 'react-router-dom';

export default function Products() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchDataGet() {
      const response = (
        await fetchData('https://fakestoreapi.com/products')
      )[0];
      console.log(response);

      const arrItems = response.map((item) => {
        return (
          <li key={item.id}>
            <Link
              to={`/shop/${item.id}`}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <h4>{item.title}</h4>
              <img alt="item" src={item.image} />
              <p>${item.price.toFixed(2)}</p>
            </Link>
          </li>
        );
      });

      setItems(arrItems);
    }
    fetchDataGet();
  }, []);

  return <ul className="product-container">{items}</ul>;
}
