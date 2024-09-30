// import React from 'react';
// import productsData from '../Ser'; // Adjust the path as needed
import { ServiceData } from '../../ServicesData';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <>
      <NavBar />
      <div className="p-4">
        <h1 className="text-4xl font-semibold mb-4 items-center text-center">Our Services</h1>

        {/* Products List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center text-center m-auto">
          {ServiceData.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg  flex flex-col justify-center items-center">
              <img
                src={product.image}
                alt={product.name}
                className="h-32 w-fit object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
