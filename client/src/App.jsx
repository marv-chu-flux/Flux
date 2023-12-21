// import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/HomePage/Header/Header';
import Footer from './components/HomePage/Footer/Footer';
import ItemCard from './components/HomePage/ItemCard/Card';
import ImageSlide from './components/HomePage/ImageSlide/ImageSlide';


function App() {
  return (
    <>
      <Header/>
      <ImageSlide/>
      <ItemCard/>
      <Footer/>
    </>
  );
}

export default App;
