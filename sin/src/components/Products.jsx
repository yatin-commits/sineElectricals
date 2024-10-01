import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Products = ({ title, imgSrc, description, link }) => {
  return (
    <div className='p-2'>
      <Card style={{ width: '18rem' }}>
        {/* Adjust the image size and make it responsive */}
        <Card.Img 
          variant="top" 
          src={imgSrc} 
          style={{ objectFit: 'cover', height: '250px', width: '100%' }} // Set fixed height
          className="img-fluid" // Bootstrap class to make image responsive
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className='p-2 my-2'>{description}</Card.Text>
          {/* Add dynamic link to the button */}
          <Button variant="primary" href={link} target="_blank" rel="noopener noreferrer">
            Know More
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Products;
