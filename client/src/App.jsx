// import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ItemCard from './components/ItemCard/Card';


function App() {
  return (
    <>
      <Header/>
      {/* <ItemCard/> */}
      <Footer/>
    </>
  );
}

export default App;
