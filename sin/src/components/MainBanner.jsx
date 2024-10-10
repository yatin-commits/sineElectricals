import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import FeaturedProducts from './FeaturedProducts';
import ContactEmbededForm from './ContactEmbededForm';
import Services from './Services';
import Footer from './Footer';
import './banner.css';
import { Link } from 'react-router-dom';

const MainBanner = () => {
  return (
    <>
      <div className='p-0 m-1 font-[poppins] flex justify-center items-center flex-col rounded-md '>
        <div id="carouselExample" className="carousel rounded-md slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active rounded-md">
              <img src="./b1.jpg" className="d-block imgg w-40 rounded-lg" alt="Banner 1" />
            </div>
            <div className="carousel-item">
              <img src="./b2.jpg" className="d-block rounded-lg h-100 imgg w-100" alt="Banner 2" />
            </div>
            <div className="carousel-item">
              <img src="./b3.jpg" className="d-block rounded-lg imgg w-100" alt="Banner 3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <Link to="/all">
          <button className='text-white font-semibold px-3 mt-4 py-3 tracking-wider rounded-md bg-blue-700'>
            Explore Products! <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </Link>
      </div>

      <FeaturedProducts />
      <ContactEmbededForm />
      <Services />
      <Footer />
    </>
  );
};

export default MainBanner;
