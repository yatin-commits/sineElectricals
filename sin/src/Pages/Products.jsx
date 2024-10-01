import React, { useState } from 'react';
// import productsData from '../ProductsData'; // Adjust the path as needed
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
// import ParitcularProduct from './ParticularProduct';

const Products = () => {
  // const [searchTerm, setSearchTerm] = useState('');

  // // Filter products based on the search term
  // const filteredProducts = productsData.filter(product => {
  //   const lowerCaseSearchTerm = searchTerm.toLowerCase();
  //   return (
  //     product.name.toLowerCase().includes(lowerCaseSearchTerm) ||
  //     product.description.toLowerCase().includes(lowerCaseSearchTerm)
  //   );
  // });

  return (
    <>
      <NavBar />

      {/* <ParitcularProduct/> */}
      
      <Footer />
    </>
  );
};

export default Products;
