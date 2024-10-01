import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import Home from './Pages/Home'; // Ensure the path is correct
import Products from './Pages/Products'; // Ensure the path is correct
import Services from './Pages/Services';
import ContactUs from './Pages/ContactUs';
import SingleProduct from './Pages/Stabilizers';
import Vcb from './Pages/Vcb';
import Panel from './Pages/Panel';
import Scada from './Pages/Scada';
import Stablizers from './Pages/Stabilizers';
import AllProducts from './Pages/AllProducts';
import AboutUs from './Pages/AboutUs';

const App = () => {
  return (
    <Router> {/* Wrap your Routes inside BrowserRouter */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/single" element={<SingleProduct />} />
        <Route path="/stabilizers" element={<Stablizers />} />
        <Route path="/vcb" element={<Vcb />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/scada" element={<Scada />} />
        <Route path="/all" element={<AllProducts />} />
        <Route path="/about" element={<AboutUs />} />

      </Routes>
    </Router>
  );
};

export default App;
