import { useEffect } from 'react';
import { fetchData } from './utils/utils';

export default function Data() {
  useEffect(() => {
    async function fetchDataGet() {
      const response = (
        await fetchData('https://fakestoreapi.com/products')
      )[0];
      console.log(response);
    }
    fetchDataGet();
  }, []);

  return <h1>hi</h1>;
}
