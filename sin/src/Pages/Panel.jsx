import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import './single.css';
import Footer from '../components/Footer';

const Panel = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <NavBar />
      <h1 className='text-4xl text-center my-4'>Panel</h1>

      {/* Flex container adjusted for responsiveness */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4">
        {/* Carousel */}
        <div className="w-full md:w-[40%]">
          <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="./hand-tools.png" className="d-block mx-auto" style={{ width: '60%', height: 'auto' }} alt="Hand Tools" />
              </div>
              <div className="carousel-item">
                <img src="./home-address.png" className="d-block mx-auto" style={{ width: '60%', height: 'auto' }} alt="Home Address" />
              </div>
              <div className="carousel-item">
                <img src="./image.png" className="d-block mx-auto" style={{ width: '60%', height: 'auto' }} alt="Other Image" />
              </div>
            </div>
            <button className="carousel-control-prev custom-carousel-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next custom-carousel-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* Product Description */}
        <div className="w-full md:w-[60%] flex justify-center items-center">
          <table className="table-auto border border-gray-300 w-full text-center">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Attribute</th>
                <th className="border border-gray-300 p-2">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Description</td>
                <td className="border border-gray-300 p-2">Product description goes here...</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Approx. Price</td>
                <td className="border border-gray-300 p-2">$100</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Voltage</td>
                <td className="border border-gray-300 p-2">220V</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Country of Origin</td>
                <td className="border border-gray-300 p-2">USA</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Features</td>
                <td className="border border-gray-300 p-2">
                  <ul className="list-disc list-inside flex flex-col items-center list-none">
                    <li>Durable</li>
                    <li>Easy to use</li>
                    <li>High performance</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Get in Touch Button */}
      <div className="text-center my-4">
        <button onClick={handleOpenModal} className="bg-blue-500 text-white px-4 py-2 rounded">
          Yes! I am Interested
        </button>
      </div>

      {/* Modal for the Form */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-md w-[90%] md:w-1/2 lg:w-1/3">
            <h2 className="text-2xl mb-4">Contact Us</h2>
            <form>
              <div className="mb-4">
                <label className="block mb-1">Name:</label>
                <input type="text" className="border border-gray-300 rounded p-2 w-full" placeholder="Your Name" required />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Email:</label>
                <input type="email" className="border border-gray-300 rounded p-2 w-full" placeholder="Your Email" required />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Message:</label>
                <textarea className="border border-gray-300 rounded p-2 w-full" rows="4" placeholder="Your Message" required></textarea>
              </div>
              <div className="flex justify-between">
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Send</button>
                <button type="button" onClick={handleCloseModal} className="bg-red-500 text-white px-4 py-2 rounded">Close</button>
              </div>
            </form>
          </div>
        </div>
      )}
      <Footer/>
    </>
  );
}

export default Panel;
