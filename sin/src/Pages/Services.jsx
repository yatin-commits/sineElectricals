// import React from 'react';
// import productsData from '../Ser'; // Adjust the path as needed
import { ServiceData } from '../../ServicesData';

// import './services.css'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import IndustriedWeServe from '../components/IndustriedWeServe';

const Services = () => {
  return (
    <>
      <NavBar />
      <div className="p-4">
        <h1 className="text-4xl font-semibold mb-4 items-center text-center">Our Services</h1>

        {/* Products List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center text-center m-auto">
          {ServiceData.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded-lg flex flex-col justify-center items-center shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300"
            >
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

      {/* Industries We Serve */}
      <h1 className="text-4xl font-semibold m-4 items-center text-center">Industries We Serve</h1>
      <div className='flex justify-evenly flex-wrap flex-row w-full '>
            <IndustriedWeServe title="AeroSpace"/>
            <IndustriedWeServe title="AirPorts" />
            <IndustriedWeServe title="Auto. Manufacturing"/>
            <IndustriedWeServe title="Battery "/>
            <IndustriedWeServe title="Chemical Inductry"/>
            <IndustriedWeServe title="Cement"/>
            <IndustriedWeServe title="Cranes"/>
            <IndustriedWeServe title="Water Industry"/>
            <IndustriedWeServe title="Wind"/>
            <IndustriedWeServe title="Higher Education"/>
            <IndustriedWeServe title="Semi  conductors"/>
            <IndustriedWeServe title="Smart Urban Communities"/>
            <IndustriedWeServe title="Tire Industry"/>
            <IndustriedWeServe title="Transport & Logistics"/>
            <IndustriedWeServe title="Data Centers"/>
            <IndustriedWeServe title="Pulp & Paper"/>
            <IndustriedWeServe title="Power Utilities "/>
            <IndustriedWeServe title="Cranes"/>
            <IndustriedWeServe title="Distributors"/>
            <IndustriedWeServe title="Electronic Industry"/>
            <IndustriedWeServe title="Food & Beverages Industry"/>
            <IndustriedWeServe title="Glass & Solar"/>
            {/* <IndustriedWeServe title="Healthcare"/> */}
            <IndustriedWeServe title="Heavy Equipments"/>
            <IndustriedWeServe title="Healthcare Industry"/>
            <IndustriedWeServe title="Power Utilities"/>
            {/* <IndustriedWeServe title="Health"/> */}
            <IndustriedWeServe title="Intra logistics"/>
            <IndustriedWeServe title="Mining Industry"/>
            <IndustriedWeServe title="Oil & Gas Industry"/>
            
            

        
        
      </div>

      <Footer />
    </>
  );
};

export default Services;
