import React from 'react';
import Products from './Products';

const FeaturedProducts = () => {
  return (
    <div className='font-[poppins] flex flex-col items-center justify-center p-4'>
      <h1 className='text-4xl text-center mb-8'>Featured Products</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 m-2'>
        <Products
          title="VD Panels"
          imgSrc="./VFD panel.jpg" // Replace with actual image path
          className="w-full aspect-square max-w-[150px] object-cover"
          description="VFD panels (Variable Frequency Drive panels) are essential components in modern industrial applications. "
          link="/vfd"
        />
        <Products
          title="Motor Control Centers(MCC)"
          imgSrc="./MCC.jpg" // Replace with actual image path
          className="w-full aspect-square max-w-[150px] object-cover"
          description="A Motor Control Center (MCC) is a centralized location for controlling and protecting electric motors."
          link="/mcc"
        />
        <Products
          title="Low-tention (LT) Panels"
          imgSrc="./it.jpg" // Replace with actual image path
          className="w-full aspect-square max-w-[150px] object-cover"
          description="Low-tension (LT) panels are essential components in electrical distribution systems, providing a safe and efficient way to control and distribute power."
          link="/lt"
        />
        {/* Add more products if needed */}
      </div>
    </div>
  );
}

export default FeaturedProducts;
