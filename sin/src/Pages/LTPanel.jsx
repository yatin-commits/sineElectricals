import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import './single.css';
import Footer from '../components/Footer';

const LTPanel = () => {
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
      <h1 className='text-4xl text-left px-4 my-4 underline'>Low-Tension (LT) Panels: A Comprehensive Guide!</h1>

      {/* Flex container adjusted for responsiveness */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4">
        {/* Image */}
        <div className="w-full md:w-[40%]">
          <img src="./it.jpg" alt="Low-Tension Panel" />
        </div>
      </div>

      {/* Detailed Description Section */}
      <h1 className='font-[poppins] p-4 text-3xl'>Low-Tension Panels: Detailed Description</h1>
      <p className='px-4'>
        Low-tension (LT) panels are essential components in electrical distribution systems, providing a safe and efficient way to control and distribute power. These panels are designed to handle low-voltage power, making them ideal for a variety of industrial and commercial applications.
      </p>

      {/* Key Features */}
      <div className='border-1 rounded-md border-black m-2'>
        <h2 className='font-[poppins] px-4 py-2 text-2xl'>Key Features</h2>
        <ul className="list-disc list-inside px-8">
          <li><strong>Short-circuit protection:</strong> Robust protection against sudden, excessive currents that can cause damage to equipment and pose a safety hazard.</li>
          <li><strong>Overload protection:</strong> Prevents excessive current flow that can lead to overheating and equipment failure.</li>
          <li><strong>Ground fault protection:</strong> Detects and isolates faults to ground, reducing the risk of electrical shock.</li>
          <li><strong>Arc fault protection:</strong> Protects against electrical arcs that can cause fires and injuries.</li>
        </ul>
        <br></br>
      </div>

      {/* Performance Features */}
      <div className='border-1 rounded-md border-black m-2'>
        <h2 className='font-[poppins] px-4 py-2 text-2xl'>Performance Features</h2>
        <ul className="list-disc list-inside px-8">
          <li>Efficiency: Minimizes energy loss during power distribution, resulting in cost savings.</li>
          <li>Reliability: Designed for long-term operation without frequent failures or maintenance.</li>
          <li>Flexibility: Can be customized to meet specific application requirements, including size, capacity, and functionality.</li>
          <li>Modularity: Allows for easy expansion or modification as needs change.</li>
        </ul>
        <br></br>
      </div>

      {/* Additional Features */}
      <div className='border-1 rounded-md border-black m-2'>
        <h2 className='font-[poppins] px-4 py-2 text-2xl'>Additional Features</h2>
        <ul className="list-disc list-inside px-8">
          <li>Clear labeling for easy maintenance and troubleshooting.</li>
          <li>Designed for easy access to internal components for inspection, cleaning, and repair.</li>
          <li>Compliance with industry standards like IEC, ANSI, and UL.</li>
          <li>Incorporates environmentally friendly features, including energy efficiency and recyclable materials.</li>
        </ul>
        <br></br>
      </div>

      {/* Call-to-Action Button */}
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
      <Footer />
    </>
  );
}

export default LTPanel;