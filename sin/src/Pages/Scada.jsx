import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import './single.css';
import Footer from '../components/Footer';

const Scada = () => {
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
      <h1 className='text-4xl text-left px-4 my-4 underline'>SCADA: A Comprehensive Guide!</h1>

      {/* Flex container adjusted for responsiveness */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4">
        {/* Carousel */}
        <div className="w-full md:w-[40%]">
          <img src="./hand-tools.png" alt="SCADA System" />
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
                <td className="border border-gray-300 p-2">
                  SCADA (Supervisory Control and Data Acquisition) systems monitor and control industrial processes from a central location.
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
        </div>
      </div>

      {/* Detailed Description Section */}
      <h1 className='font-[poppins] p-4 text-3xl'>SCADA: Detailed Description</h1>
      <p className='px-4'>
        SCADA systems are essential for industries such as manufacturing, power generation, water treatment, and transportation. They allow operators to monitor and control processes from a central location, enhancing efficiency, safety, and decision-making.
      </p>

      {/* Key Features */}
      <div className='border-1 rounded-md border-black m-2'>
        <h2 className='font-[poppins] px-4 py-2 text-2xl'>Key Features</h2>
        <p className='px-4'>
          SCADA systems provide various features that optimize industrial processes:
        </p>
        <ul className="list-disc list-inside px-8">
          <li>Data acquisition and processing from field devices</li>
          <li>Real-time monitoring and control of processes</li>
          <li>Alarm management for critical events</li>
          <li>Historical data storage for analysis</li>
          <li>Remote access through IoT integration</li>
        </ul>
      </div>

      {/* Applications */}
      <div className='border-1 rounded-md border-black m-2'>
        <h2 className='font-[poppins] px-4 py-2 text-2xl'>Applications</h2>
        <p className='px-4'>
          SCADA systems are used across various industries to improve operations and efficiency:
        </p>
        <ul className="list-disc list-inside px-8">
          <li>Power generation plants</li>
          <li>Water treatment facilities</li>
          <li>Manufacturing processes</li>
          <li>Transportation networks</li>
          <li>Oil and gas facilities</li>
        </ul>
      </div>

      {/* Trends */}
      <div className='border-1 rounded-md border-black m-2'>
        <h2 className='font-[poppins] px-4 py-2 text-2xl'>Trends in SCADA Systems</h2>
        <p className='px-4'>
          Recent trends are shaping the future of SCADA systems:
        </p>
        <ul className="list-disc list-inside px-8">
          <li>Integration of IoT devices for enhanced connectivity</li>
          <li>Cloud computing for scalable and flexible systems</li>
          <li>AI for predictive maintenance and anomaly detection</li>
          <li>Enhanced cybersecurity to protect against cyber threats</li>
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
      <Footer />
    </>
  );
}

export default Scada;
