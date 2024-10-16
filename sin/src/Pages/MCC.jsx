import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import './single.css';
import Footer from '../components/Footer';

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

        
        {/* <div className="w-full md:w-[60%] flex justify-center items-center flex-col">
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
                <td className="border border-gray-300 p-2">MCC (Supervisory Control and Data Acquisition) systems monitor and control industrial processes from a central location.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Approx. Price</td>
                <td className="border border-gray-300 p-2">Depends On Order</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Voltage</td>
                <td className="border border-gray-300 p-2">As per requirement</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Country of Origin</td>
                <td className="border border-gray-300 p-2">Depends On Order</td>
              </tr>
            </tbody>
          </table>
          <div className="text-center my-4">
            <button onClick={handleOpenModal} className="bg-blue-500 text-white px-4 py-2 rounded">
              Yes! I am Interested
            </button>
          </div>
        </div> */}
      </div>


        {/* Product Description */}
        {/* <div className="w-full md:w-[60%] flex justify-center items-center flex-col">
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
                <td className="border border-gray-300 p-2">
                  MCC (Supervisory Control and Data Acquisition) systems monitor and control industrial processes from a central location.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Key Components</td>
                <td className="border border-gray-300 p-2">
                  RTUs, HMI, Communication Network, Database, Application Software
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Functions</td>
                <td className="border border-gray-300 p-2">
                  Data acquisition, processing, control, visualization, alarm management
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Applications</td>
                <td className="border border-gray-300 p-2">
                  Power generation, water treatment, manufacturing, transportation, oil and gas
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Trends</td>
                <td className="border border-gray-300 p-2">
                  IoT, cloud computing, AI, cybersecurity
                </td>
              </tr>
            </tbody>
          </table>
          <div className="text-center my-4">
            <button onClick={handleOpenModal} className="bg-blue-500 text-white px-4 py-2 rounded">
              Yes! I am Interested
            </button>
          </div>
        </div> */}
      {/* </div> */}

      {/* Detailed Description Section */}
      <h1 className='font-[poppins] p-4 text-3xl'>MCC: Detailed Description</h1>
      <p className='px-4'>
      A Motor Control Center (MCC) is a centralized location for controlling and protecting electric motors. It is a 
      critical component in industrial and commercial settings. Here are some of its essential features: 
      </p>

      {/* Key Features */}
      <div className='border-1 rounded-md border-black m-2'>
        <h2 className='font-[poppins] px-4 py-2 text-2xl'>Key Features</h2>
        <p className='px-4'>
          MCC systems provide various features that optimize industrial processes:
        </p>
        <ul className="list-disc list-inside px-8">
          <li>MCCs house various devices to control motors, such as starters, contactors, relays, 
          and overload relays.</li>
          <li>They distribute power to individual motors or groups of motors. </li>
          <li>MCCs protect motors from faults like short circuits, overloads, and phase imbalances. </li>
          <li> They are designed to be modular, allowing for easy expansion or modification.</li>
          {/* <li>Remote access through IoT integration</li> */}
        </ul>
      </div>

      {/* Applications */}
      <div className='border-1 rounded-md border-black m-2'>
        <h2 className='font-[poppins] px-4 py-2 text-2xl'>Advanced Features</h2>
        <p className='px-4'>
          MCC systems are used across various industries to improve operations and efficiency:
        </p>
        <ul className="list-disc list-inside px-8">
          <li> <b>Remote Monitoring</b>: Some MCCs can be integrated with SCADA (Supervisory Control and Data Acquisition) 
          systems for remote monitoring and control.</li>
          <li> <b>Energy Efficiency</b>: Features like power factor correction and energy-saving controls can improve overall 
          energy efficiency. </li>
          <li><b>Safety Features</b>: Safety interlocks, emergency stop buttons, and ground fault protection are essential for 
          safety. </li>
          <li><b>Customizability</b>: MCCs can be tailored to specific applications and requirements. </li>
          <li><b>Environmental Protection</b>: Features like IP ratings and cooling systems protect components from 
          environmental factors. </li>
        </ul>
      </div>

      {/* Trends */}
      <div className='border-1 rounded-md border-black m-2'>
        <h2 className='font-[poppins] px-4 py-2 text-2xl'>Benefits of MCCs</h2>
        <p className='px-4'>
          Recent trends are shaping the future of MCC systems:
        </p>
        <ul className="list-disc list-inside px-8">
          <li>Centralized control and protection optimize motor performance. </li>
          <li>Reduces the risk of electrical hazards and accidents.</li>
          <li>Centralized maintenance and troubleshooting simplify tasks.</li>
          <li>Easily accommodate changes in motor loads or requirements. </li>
        </ul>
        <br></br>
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
      <Footer />
    </>
  );
}

export default MCC;
