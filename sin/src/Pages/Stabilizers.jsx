import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import InterestedForm from '../components/IntrestedForm'; // Import the InterestedForm component

const Stabilizers = () => {
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
      <h1 className='text-4xl text-left px-4 my-4 underline'>Servo Voltage Stabilizer: A Comprehensive Guide</h1>

      {/* Flex container adjusted for responsiveness */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4">
        {/* Carousel */}
        <div className="w-[50%] md:w-[40%]">
          <img src="./stab.jpg" alt="Servo Voltage Stabilizer" />
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
                <td className="border border-gray-300 p-2">Servo Voltage Stabilizers maintain a constant output voltage, protecting sensitive equipment from fluctuations.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Approx. Price</td>
                <td className="border border-gray-300 p-2">₹ 6,30,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Voltage</td>
                <td className="border border-gray-300 p-2">329V / 440V</td>
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
      <h1 className='font-[poppins] p-4 text-3xl'>Servo Voltage Stabilizers: Detailed Description</h1>
      <p className='px-4'>
        Servo Voltage Stabilizers (SVS) are electronic devices used to maintain a constant output voltage, regardless of fluctuations in the input voltage. They are essential for protecting sensitive electronic equipment from voltage surges and dips.
      </p>

      {/* Key Features */}
      <div className='border-1 rounded-md border-black m-2'>
        <h2 className='font-[poppins] px-4 py-2 text-2xl'>Key Features</h2>
        <p className='px-4'>
          Servo Voltage Stabilizers offer several critical features:
        </p>
        <ul className="list-disc list-inside px-8">
          <li>High Accuracy: Precisely maintain the output voltage.</li>
          <li>Fast Response Time: Quickly adjusts to voltage fluctuations.</li>
          <li>Wide Input Voltage Range: Suitable for various input ranges.</li>
          <li>High Efficiency: Minimizes energy loss during operation.</li>
          <li>Protection: Equipped with overload and short-circuit protection.</li>
        </ul>
      </div>

      {/* Applications */}
      <div className='border-1 rounded-md border-black m-2'>
        <h2 className='font-[poppins] px-4 py-2 text-2xl'>Applications</h2>
        <p className='px-4'>
          These stabilizers are used in a variety of settings:
        </p>
        <ul className="list-disc list-inside px-8">
          <li>Industrial Equipment: For machinery and control systems.</li>
          <li>Medical Equipment: Ensures stable power for medical devices.</li>
          <li>Laboratory Equipment: Protects precision instruments.</li>
          <li>Data Centers: Provides stable power for servers and IT equipment.</li>
          <li>Residential Use: Protects home appliances and electronics.</li>
        </ul>
      </div>

      {/* Types */}
      <div className='border-1 rounded-md border-black m-2'>
        <h2 className='font-[poppins] px-4 py-2 text-2xl'>Types of Servo Voltage Stabilizers</h2>
        <p className='px-4'>
          There are several types of Servo Voltage Stabilizers:
        </p>
        <ul className="list-disc list-inside px-8">
          <li>Single-Phase: For applications with single-phase power supply.</li>
          <li>Three-Phase: For applications with three-phase power supply.</li>
          <li>Online: Provides uninterrupted power supply.</li>
          <li>Offline: Switches to a battery backup in case of power outages.</li>
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

export default Stabilizers;
