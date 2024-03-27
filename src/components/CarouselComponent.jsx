import React from 'react';
import { Carousel } from 'react-bootstrap';
//import './CarouselComponent.css'

const CarouselComponent = () => {
  return (

    <Carousel className='carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/Designer_1.png"
          alt="First slide"
          
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/Picture1.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/Designer_3.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    
  );
};

export default CarouselComponent;
