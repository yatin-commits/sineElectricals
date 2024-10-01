import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

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
          {/* Wrap Button inside Link */}
          <Link to={link} target="_blank" rel="noopener noreferrer">
            <Button variant="primary">
              Know More
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Products;
