// import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../reusableComponents/Header/Header';
import Footer from '../reusableComponents/Footer/Footer';
import ItemCard from '../reusableComponents/ItemCard/Card';
import ImageSlide from '../reusableComponents/ImageSlide/ImageSlide';
// import News from '../reusableComponents/News/News';

function App() {
  return (
    <>
      <Header />
      <ImageSlide />
      {/* <News/> */}
      <ItemCard />
      <Footer />
    </>
  );
}

export default App;
