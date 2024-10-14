import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './allProd.css';  // Import a custom CSS file for styling

const AllProducts = () => {
  // Updated product data with descriptions matching their titles
  const products = [
    {
      title: 'VFD Panels',
      imgSrc: './VFD panel.jpg',
      description: 'VFD (Variable Frequency Drive) panels are used for controlling the speed of electric motors and improving their efficiency in various industrial applications.',
      link: '/vcb',
    },
    {
      title: 'MCC Panels',
      imgSrc: './MCC.jpg',
      description: 'MCC (Motor Control Center) panels are designed for centralized control of motors and machinery, ensuring smooth operations in industrial plants.',
      link: '/mcc',
    },
    {
      title: 'L-T Panels',
      imgSrc: './it.jpg',
      description: 'L-T (Low Tension) Panels are used to control and distribute electrical power for lower voltage equipment in industrial and commercial settings.',
      link: '/lt',
    },
    {
      title: 'VCB',
      imgSrc: './VCB.jpg',
      description: 'VCB (Vacuum Circuit Breaker) panels provide reliable protection and switching operations for medium voltage electrical systems in industrial and utility environments.',
      link: '/vcb',    
    },
    {
      title: 'Servo Voltage Stabilizers',
      imgSrc: './stab.jpg',
      description: 'Servo Voltage Stabilizers maintain a stable voltage supply to sensitive equipment, protecting them from voltage fluctuations and ensuring longer life.',
      link: '/stab',    
    },
    {
      title: 'Scada System',
      imgSrc: './SCADA.jpg',
      description: 'SCADA (Supervisory Control and Data Acquisition) systems are designed to monitor and control industrial processes in real time from a central location.',
      link: '/scada',
    },
  ];

  return (
    <>
      <NavBar/>
      <h1 className="font-[poppins] p-4 text-center text-4xl">Products.</h1>
      <Container fluid className="products-container my-4">
        <div className="products-grid justify-center items-center">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <Card className="shadow-sm product-card-content">
                {product.imgSrc && (
                  <Card.Img 
                    variant="top" 
                    src={product.imgSrc} 
                    className="product-img"
                  />
                )}
                <Card.Body>
                  <Card.Title className="product-title">{product.title}</Card.Title>
                  <Card.Text className="product-description">{product.description}</Card.Text>
                  <Link to={product.link}>
                    <Button className="btn-primary-custom">Know More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
      <Footer/>
    </>
  );
};

export default AllProducts;
