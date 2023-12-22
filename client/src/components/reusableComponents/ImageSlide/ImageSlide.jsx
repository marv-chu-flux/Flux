import React from "react";
import "./ImageSlide.css";
import { Outlet, Link } from "react-router-dom";

import Carousel from "react-bootstrap/Carousel";

import shopImage1 from "../images/shopImage1.jpg";
import shopImage2 from "../images/shopImage2.jpg";
import shopImage3 from "../images/shopImage3.jpg";

const ImageSlide = () => {
  return (
    <>
      <Carousel fade controls={false}>
        <Carousel.Item>
          <img src={shopImage1} alt="First slide"></img>
          <Carousel.Caption>
            <h1>Get a new perspective</h1>
            <Link to="/shop">
              <button>See more</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={shopImage2} alt="Second slide"></img>
          <Carousel.Caption>
            <h1>Affordable prices</h1>
            <Link to="/shop">
              <button>View more</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={shopImage3} alt="Third slide"></img>
          <Carousel.Caption>
            <h1>Discover timeless pieces</h1>
            <Link to="/shop">
              <button>Shop</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default ImageSlide;
