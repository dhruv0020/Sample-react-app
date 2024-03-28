import React from 'react';
import { CardGroup, Card } from 'react-bootstrap';

const TestimonialGroup = () => {
  const testimonials = [
    {
      name: 'John Doe',
      place: 'Atlanta,US',
      quote: 'Awesome service.',
    },
    {
      name: 'Marry Doe',
      place: 'London,UK',
      quote: 'Extemely deighted to become dog owner by Sample.',
    },
    {
      name: 'Ramesh Singh',
      place: 'Punjab,India',
      quote: 'Prefernces of owner is aligned very well.',
    },
    {
      name: 'Atif Aslam',
      place: 'Dubai,UAE',
      quote: 'Pocket friendly supreme service. Must try for everyone',
    },
    {
      name: 'Kylian Mbappe',
      place: 'Paris,France',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    
  ];

  return (
    <CardGroup>
      {testimonials.map((testimonial, index) => (
        <Card key={index} className="mb-3"> 
          <Card.Body>
            <Card.Title>{testimonial.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {testimonial.place}
            </Card.Subtitle>
            <Card.Text>{testimonial.quote}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </CardGroup>
  );
};

export default TestimonialGroup;
