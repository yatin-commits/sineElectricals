import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white p-6 font-[poppins]'>
      <div className='container mx-auto flex flex-col md:flex-row justify-evenly'>
        {/* About Us Section */}
        <div className='mb-4 md:mb-0'>
          <h4 className='font-bold mb-2'>About Us</h4>
          <p className='text-sm'>
            Sre Electricals is a leading provider of heavy machinery and electrical <br></br>solutions for various industries.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className='mb-4 md:mb-0'>
          <h4 className='font-bold mb-2'>Quick Links</h4>
          <ul className='space-y-3'>
            <li><a href="#products" className='text-sm hover:underline'>Products</a></li>
            <li><a href="#services" className='text-sm hover:underline'>Services</a></li>
            <li><a href="#about" className='text-sm hover:underline'>About</a></li>
            <li><a href="#contact" className='text-sm hover:underline'>Contact</a></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h4 className='font-bold mb-2'>Contact Us</h4>
          <p className='text-sm space-y-3'>
            <span className='block'>📞 +1 (123) 456-7890</span>
            <span className='block'>✉️ <a href="mailto:info@sreelectricals.com" className='hover:underline'>info@sreelectricals.com</a></span>
            <span className='block'>📍 123 Industrial Ave, City, Country</span>
          </p>
        </div>
      </div>
      
      <div className='text-center mt-4'>
        <p className='text-sm'>© {new Date().getFullYear()} Sre Electricals. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
