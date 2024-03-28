import React from 'react';
import CarouselComponent from './CarouselComponent';
import TestimonialGroup from './TestimonialGroup';
import './Home.css';

const Home = () => {
  return (
    <div>     
      <CarouselComponent />
      <div className='testimonial-heading'>
      <h2>Customer Testimonials</h2>
      </div>      
      <TestimonialGroup/>
    </div>
  );
};

export default Home;
