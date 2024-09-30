import React from 'react';
import Products from './Products';

const FeaturedProducts = () => {
  return (
    <div className='font-[poppins] flex flex-col items-center justify-center p-4'>
      <h1 className='text-3xl'>Featured Products</h1>
      <div className='flex flex-row space-x-5 justify-center items-center flex-wrap'>
        <Products 
          title="VFD Panels"
          imgSrc="path/to/vfd-panel-image.jpg" // replace with actual image path
          description="High-quality Variable Frequency Drive Panels for efficient motor control."
        />
        <Products 
          title="Servo Voltage Stabilizers"
          imgSrc="path/to/servo-voltage-stabilizer-image.jpg" // replace with actual image path
          description="Reliable Servo Voltage Stabilizers to ensure stable voltage supply."
        />
        <Products 
          title="Diesel Generator Set"
          imgSrc="path/to/diesel-generator-image.jpg" // replace with actual image path
          description="Durable Diesel Generator Sets for uninterrupted power supply uninterrupted power supply."
        />
        {/* You can add more Products components as needed */}
      </div>
    </div>
  );
}

export default FeaturedProducts;
