import React from 'react';
import Products from './Products';

const FeaturedProducts = () => {
  return (
    <div className='font-[poppins] flex flex-col items-center justify-center p-4'>
      <h1 className='text-4xl text-center mb-8'>Featured Products</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 m-2'>
        <Products
          title="VFD Panels"
          imgSrc="./temp.jpg" // Replace with actual image path
          className="w-full aspect-square max-w-[150px] object-cover"
          description="High-quality Variable Frequency Drive Panels for efficient motor control."
        />
        <Products
          title="Servo Voltage Stabilizers"
          imgSrc="./temp.jpg" // Replace with actual image path
          className="w-full aspect-square max-w-[150px] object-cover"
          description="Reliable Servo Voltage Stabilizers to ensure stable voltage supply."
        />
        <Products
          title="Diesel Generator Set"
          imgSrc="./temp.jpg" // Replace with actual image path
          className="w-full aspect-square max-w-[150px] object-cover"
          description="Durable Diesel Generator Sets for uninterrupted power supply."
        />
        {/* Add more products if needed */}
      </div>
    </div>
  );
}

export default FeaturedProducts;
