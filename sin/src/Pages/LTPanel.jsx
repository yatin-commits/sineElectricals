import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
// import InterestedForm from '../components/InterestedForm'; // Import the InterestedForm component
import InterestedForm from '../components/IntrestedForm'

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

      {/* Call-to-Action Button */}
      <div className="text-center my-4">
        <button onClick={handleOpenModal} className="bg-blue-500 text-white px-4 py-2 rounded">
          Yes! I am Interested
        </button>
      </div>

      {/* Modal for the Form */}
      {isModalOpen && <InterestedForm handleClose={handleCloseModal} />} {/* Use the reusable form component */}

      <Footer />
    </>
  );
};

export default LTPanel;
