import { useParams } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { fetchData } from '../utils/utils';
import { useState, useEffect } from 'react';

export default function Item() {
  const { itemId } = useParams();

  const [item, setItem] = useState([]);

  useEffect(() => {
    async function fetchDataGet() {
      const response = (
        await fetchData(`https://fakestoreapi.com/products/${itemId}`)
      )[0];
      console.log(response);

      const curItem = (
        <section key={response.id}>
          <h4>{response.title}</h4>
          <h5>{response.description}</h5>
          <img alt="item" src={response.image} />
          <p>${response.price}</p>
        </section>
      );

      setItem(curItem);
    }
    fetchDataGet();
  }, [itemId]);

  return (
    <>
      <Header />
      <h1>{item}</h1>
      <Footer />
    </>
  );
}
