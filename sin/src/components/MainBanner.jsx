import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import FeaturedProducts from './FeaturedProducts';
import ContactEmbededForm from './contactEmbededForm';
import Services from './Services';
import Footer from './Footer';
import './banner.css'
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const MainBanner = () => {
  return (
    <>
      <div className='p-4 m-1 font-[poppins] flex justify-center items-center flex-col '>
        <h1 className='text-7xl font-semibold tracking-widest temp'>Powering Your World</h1>
        <p className='p-4 text-3xl font-medium temp1'>50+ Projects And Still Counting...</p>
        <Link to="/products"> 
          <button className='text-white font-semibold px-3 py-3 tracking-wider rounded-md bg-blue-700'>
            Explore Our Products <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </Link>

      </div>
      <FeaturedProducts />
      <ContactEmbededForm />
      <Services />
      <Footer />
    </>
  );
}

export default MainBanner;
