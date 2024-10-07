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
      <h1 className='text-4xl text-left px-4 my-4 underline'>LT Panels: Essential Features!</h1>

      {/* Flex container adjusted for responsiveness */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4">
        {/* Carousel */}
        <div className="w-full md:w-[40%]">
          <img src="./hand-tools.png" alt="LT Panel" />
        </div>

        {/* Product Description */}
        <div className="w-full md:w-[60%] flex justify-center items-center flex-col">
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
                <td className="border border-gray-300 p-2">This LT panel ensures efficient and safe electrical power distribution for industrial and residential applications.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Approx. Price</td>
                <td className="border border-gray-300 p-2">$150</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Voltage</td>
                <td className="border border-gray-300 p-2">220V</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Country of Origin</td>
                <td className="border border-gray-300 p-2">India</td>
              </tr>
            </tbody>
          </table>
          <div className="text-center my-4">
            <button onClick={handleOpenModal} className="bg-blue-500 text-white px-4 py-2 rounded">
              Yes! I am Interested
            </button>
          </div>
        </div>
      </div>

      {/* Detailed Description Section */}
      <h1 className='font-[poppins] p-4 text-3xl'>LT Panel : Detailed Description</h1>
      <p className='px-4'>
        This LT panel is designed for modern electrical systems, offering safety, performance, and efficiency. It’s built to handle the demands of both residential and industrial applications while ensuring reliable power distribution.
      </p>

      {/* Key Features */}
      <div className='border-1 rounded-md border-black m-2'>
        <h2 className='font-[poppins] px-4 py-2 text-2xl'>Key Features</h2>
        <p className='px-4'>
          Some of the notable features of this LT panel include:
        </p>
        <ul className="list-disc list-inside px-8">
          <li> Short-circuit protection: Ensures safety by preventing damage caused by sudden current spikes.</li>
          <li> Overload protection: Prevents overheating by controlling excessive current flow.</li>
          <li> Ground fault protection: Reduces the risk of electrical shock.</li>
          <li> Energy efficiency: Optimized to reduce energy loss.</li>
          <li> Durability: Designed with long-lasting materials to handle harsh environments.</li>
        </ul>
      </div>

      {/* Applications */}
      <div className='border-1 rounded-md border-black m-2'>
        <h2 className='font-[poppins] px-4 py-2 text-2xl'>Applications</h2>
        <p className='px-4'>
          The LT panel can be used in various settings, such as:
        </p>
        <ul className="list-disc list-inside px-8">
          <li>Residential buildings</li>
          <li>Commercial complexes</li>
          <li>Industrial factories</li>
          <li>Power distribution systems</li>
        </ul>
      </div>

      {/* Types */}
      <div className='border-1 rounded-md border-black m-2'>
        <h2 className='font-[poppins] px-4 py-2 text-2xl'>Available Types</h2>
        <p className='px-4'>
          Choose from the different LT panel types available:
        </p>
        <ul className="list-disc list-inside px-8">
          <li>Standard LT Panel: Best for regular applications in homes and offices.</li>
          <li>High-Voltage LT Panel: Built for industries needing higher voltage capacities.</li>
          <li>Smart LT Panel: Featuring remote monitoring for advanced applications.</li>
        </ul>
      </div>
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
