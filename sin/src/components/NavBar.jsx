import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './nav.css'; // Custom CSS file for styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <Navbar expand="lg" className="custom-navbar"> {/* Custom background class */}
      <Container>
        <Navbar.Brand as={Link} to="/" className="font-[poppins] text-white font-bold">Sin Electricals</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className='text-white font-[poppins]'>Home</Nav.Link>
            <Nav.Link as={Link} to="/services" className='text-white font-[poppins]'>Services</Nav.Link>
            
            <NavDropdown 
              title={
                <span className='text-white'> {/* Set title color to white */}
                  Deals In <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
                </span>
              } 
              className='font-[poppins]' 
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="/vcb">VCB (Vacuum Circuit Breaker)</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Panel">Panel </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/stabilizers"> Stabilizers</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Scada">Scada</NavDropdown.Item>
              
            </NavDropdown>
            
            <Nav.Link as={Link} to="/contact" className='text-white font-[poppins]'>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
