import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import InterestedForm from '../components/IntrestedForm'; // Import InterestedForm

const MCC = () => {
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
      <h1 className='text-4xl text-left px-4 my-4 underline'>MCC: A Comprehensive Guide!</h1>

      {/* Flex container adjusted for responsiveness */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4">
        {/* Carousel */}
        <div className="w-full md:w-[40%]">
          <img src="./MCC.jpg" alt="MCC System" />
        </div>
      </div>

      {/* Detailed Description Section */}
      <h1 className='font-[poppins] p-4 text-3xl'>MCC: Detailed Description</h1>
      <p className='px-4'>
        A Motor Control Center (MCC) is a centralized location for controlling and protecting electric motors. It is a 
        critical component in industrial and commercial settings. Here are some of its essential features: 
      </p>

      {/* Key Features */}
      <div className='border-1 rounded-md border-black m-2'>
        <h2 className='font-[poppins] px-4 py-2 text-2xl'>Key Features</h2>
        <ul className="list-disc list-inside px-8">
          <li>MCCs house various devices to control motors, such as starters, contactors, relays, 
          and overload relays.</li>
          <li>They distribute power to individual motors or groups of motors. </li>
          <li>MCCs protect motors from faults like short circuits, overloads, and phase imbalances. </li>
          <li> They are designed to be modular, allowing for easy expansion or modification.</li>
        </ul>
      </div>

      {/* Call-to-Action Button */}
      <div className="text-center my-4">
        <button onClick={handleOpenModal} className="bg-blue-500 text-white px-4 py-2 rounded">
          Yes! I am Interested
        </button>
      </div>

      {/* Modal for the Form */}
      {isModalOpen && <InterestedForm handleClose={handleCloseModal} />} {/* Use the InterestedForm component */}

      <Footer />
    </>
  );
}

export default MCC;
