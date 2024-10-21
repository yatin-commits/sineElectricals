import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import InterestedForm from '../components/IntrestedForm'; // Import the InterestedForm component

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
      <h1 className='text-4xl text-left px-4 my-4 underline'>
        PLC Automation and SCADA: A Powerful Duo for Industrial Applications
      </h1>

      {/* Flex container adjusted for responsiveness */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4">
        {/* Carousel */}
        <div className="w-full md:w-[40%]">
          <img src="./SCADA.jpg" alt="SCADA System" />
        </div>

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
                  SCADA (Supervisory Control and Data Acquisition) systems monitor and control industrial processes from a central location, working together with PLCs for automation and data management.
                </td>
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
        </div>
      </div>

      {/* Detailed Description Section */}
      <h1 className='font-[poppins] p-4 text-3xl'>PLC Automation and SCADA: Detailed Description</h1>
      <p className='px-4'>
        PLC Automation and SCADA have become indispensable tools in modern industrial processes, offering efficient control, monitoring, and data management. PLCs act as the backbone for industrial control, while SCADA systems provide real-time monitoring, data acquisition, and centralized control.
      </p>

      {/* Key Features */}
      <div className='border-1 rounded-md border-black m-2'>
        <h2 className='font-[poppins] px-4 py-2 text-2xl'>Key Features</h2>
        <p className='px-4'>
          PLC Automation and SCADA offer several essential features:
        </p>
        <ul className="list-disc list-inside px-8">
          <li>PLC Sequence control for coordinating process operations</li>
          <li>Process control for parameters like temperature and pressure</li>
          <li>SCADA data acquisition and visualization in real-time</li>
          <li>Remote control of industrial equipment from a central location</li>
          <li>Historical data logging for future analysis</li>
        </ul>
      </div>

      {/* Applications */}
      <div className='border-1 rounded-md border-black m-2'>
        <h2 className='font-[poppins] px-4 py-2 text-2xl'>Applications</h2>
        <p className='px-4'>
          PLC automation and SCADA are used in a wide range of industries and applications:
        </p>
        <ul className="list-disc list-inside px-8">
          <li>Manufacturing: Controlling assembly lines, production processes</li>
          <li>Power generation: Monitoring turbines, boilers, and generators</li>
          <li>Water treatment: Managing water purification and distribution</li>
          <li>Oil and gas: Controlling pipelines, refineries, and drilling</li>
          <li>Building automation: Managing HVAC systems and security</li>
        </ul>
      </div>

      {/* Benefits */}
      <div className='border-1 rounded-md border-black m-2'>
        <h2 className='font-[poppins] px-4 py-2 text-2xl'>Benefits of PLC Automation and SCADA</h2>
        <p className='px-4'>
          Implementing PLC automation and SCADA offers multiple benefits:
        </p>
        <ul className="list-disc list-inside px-8">
          <li>Increased efficiency and reduced downtime</li>
          <li>Improved safety and accident prevention</li>
          <li>Real-time data insights for enhanced decision-making</li>
          <li>Cost savings through energy efficiency and waste reduction</li>
          <li>Consistent product quality and compliance with industry standards</li>
        </ul>
      </div>

      <div className="text-center my-4">
        <button onClick={handleOpenModal} className="bg-blue-500 text-white px-4 py-2 rounded">
          Yes! I am Interested
        </button>
      </div>

      {/* Modal for the Interested Form */}
      {isModalOpen && <InterestedForm handleClose={handleCloseModal} />} {/* Use the InterestedForm component */}

      <Footer />
    </>
  );
}

export default Scada;
