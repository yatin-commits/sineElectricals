import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const AllProducts = () => {
  // Sample product data
  const products = [
    {
      title: 'VFD Panels',
      imgSrc: './automated.png',
      description: 'High-quality Variable Frequency Drive Panels for efficient motor control.',
      link: '/vcb',
    },
    {
      title: 'Servo Voltage Stabilizers',
      imgSrc: './automated.png',
      description: 'Reliable Servo Voltage Stabilizers to ensure stable voltage supply.',
      link: '/Stabilizers',    
    },
    {
      title: 'Scada System',
      imgSrc: './automated.png',
      description: 'Durable Diesel Generator Sets for uninterrupted power supply.',
      link: '/scanda',
    },
    {
      title: 'Panels',
      imgSrc: './automated.png',
      description: 'This is the description for product 4.',
      link: '/panel',
    },
  ];

  return (
    <>
    <NavBar/>
    <h1 className='font-[poppins] p-4 text-center text-4xl'>Products.</h1>
    <Container className='my-4'>
      <Row>
        {products.map((product, index) => (
          <Col key={index} md={6} className='mb-4'>
            <Card style={{ width: '100%' }}>
              <Card.Img 
                variant="top" 
                src={product.imgSrc} 
                style={{ objectFit: 'cover', height: '250px' }}
              />
              <Card.Body>
                <Card.Title className='p-2'>{product.title}</Card.Title>
                <Card.Text className='m-2'>{product.description}</Card.Text>
                <Link to={product.link}>
                  <Button className='m-2' variant="primary">
                    Know More
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    <Footer/>
    </>
  );

};

export default AllProducts;
