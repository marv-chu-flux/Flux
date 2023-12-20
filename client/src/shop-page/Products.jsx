import { useEffect, useState } from 'react';
import { fetchData } from '../utils/utils';

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
            <h3>{item.title}</h3>
            <img alt="item" src={item.image} />
            <p>{item.price}</p>
          </li>
        );
      });

      setItems(arrItems);
    }
    fetchDataGet();
  }, []);

  return <ul>{items}</ul>;
}
