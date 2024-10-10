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
      imgSrc: './VCB.jpg',
      description: 'This advanced panel offers high durability and seamless performance for various industrial and residential applications.',
      link: '/vcb',
    },
    {
      title: 'Servo Voltage Stabilizers',
      imgSrc: './stab.jpg',
      description: 'Servo Voltage Stabilizers maintain a constant output voltage, protecting sensitive equipment from fluctuations.',
      link: '/Stabilizers',    
    },
    {
      title: 'Scada System',
      imgSrc: './SCADA.jpg  ',
      description: 'SCADA (Supervisory Control and Data Acquisition) systems monitor and control industrial processes from a central location.',
      link: '/scanda',
    },
    {
      title: 'Panels',
      imgSrc: './MCC.jpg',
      description: 'This LT panel ensures efficient and safe electrical power distribution for industrial and residential applications',
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
                style={{ objectFit: 'cover', height: 'auto' }}
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
