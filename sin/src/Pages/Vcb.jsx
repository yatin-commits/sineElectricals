import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import './single.css';
import Footer from '../components/Footer';

const Vcb = () => {
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
      <h1 className='text-4xl text-left px-4 my-4 underline'>Vcb: A Comprehensive Guide!</h1>

      {/* Flex container adjusted for responsiveness */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4">
        {/* Carousel */}
        <div className="w-full md:w-[40%]">
          <img src="./VCB.jpg" alt="" />
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
                <td className="border border-gray-300 p-2">This advanced panel offers high durability and seamless performance for various industrial and residential applications.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Approx. Price</td>
                <td className="border border-gray-300 p-2">₹ 3,40,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Voltage</td>
                <td className="border border-gray-300 p-2">33KV</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Country of Origin</td>
                <td className="border border-gray-300 p-2">Germany</td>
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
      <h1 className='font-[poppins] p-4 text-3xl'>Vacuum Circuit Breaker (VCB): A Reliable and Efficient Switching Device</h1>
      <p className='px-4'>
        A Vacuum Circuit Breaker (VCB) is a type of electrical switchgear used to interrupt electric currents under normal or fault conditions. Unlike oil circuit breakers or air circuit breakers, VCBs utilize a vacuum to create a dielectric medium between the contacts, which significantly improves their performance and reliability.
      </p>

      {/* Key Components */}
      <div className='border-1 rounded-md border-black py-2 my-2 mx-2'>
      <h2 className='font-[poppins] px-4 py-2 text-2xl'>Key Components of a VCB</h2>
      <ul className="list-disc list-inside px-8">
        <li><strong>Vacuum Interrupter:</strong> This is the heart of the VCB, containing a pair of contacts enclosed in a vacuum chamber. When the contacts are separated, the vacuum creates a high-voltage gradient, causing the current to deionize and arc to extinguish.</li>
        <li><strong>Operating Mechanism:</strong> This mechanism is responsible for opening and closing the contacts. It can be either manual or motorized, depending on the application.</li>
        <li><strong>Spring Energy Storage:</strong> This component stores the energy required to open the contacts quickly and forcefully during a fault.</li>
        <li><strong>Control Circuit:</strong> This circuit monitors the VCB's status and provides control signals to the operating mechanism.</li>
      </ul>
      </div>

      {/* Advantages */}
      <div className='border-1 rounded-md border-black p-2 m-2'>
      <h2 className='font-[poppins] px-4 py-2 text-2xl'>Advantages of VCBs</h2>
      <ul className="list-disc list-inside px-8">
        <li><strong>High Reliability:</strong> VCBs are highly reliable due to the absence of oil or gas, which can degrade over time.</li>
        <li><strong>Fast Operation:</strong> They can interrupt faults very quickly, minimizing damage to equipment and reducing downtime.</li>
        <li><strong>Low Maintenance:</strong> VCBs require minimal maintenance compared to other types of circuit breakers.</li>
        <li><strong>Compact Size:</strong> They are relatively small and lightweight, making them suitable for various applications.</li>
        <li><strong>Environmentally Friendly:</strong> VCBs do not use harmful substances like SF6 gas, making them more environmentally friendly.</li>
      </ul>
      </div>

      {/* Applications */}
      <div className='border-1 rounded-md border-black p-2 m-2'>
      <h2 className='font-[poppins] px-4 py-2 text-2xl'>Applications of VCBs</h2>
      <ul className="list-disc list-inside px-8">
        <li><strong>Power Distribution:</strong> VCBs are commonly used in power distribution systems, including substations and feeders.</li>
        <li><strong>Industrial Plants:</strong> They are essential for protecting industrial machinery and equipment from electrical faults.</li>
        <li><strong>Renewable Energy Systems:</strong> VCBs are used in solar and wind power plants to switch and protect the generated electricity.</li>
        <li><strong>High-Voltage Applications:</strong> VCBs can be designed for high-voltage applications, such as transmission lines.</li>
      </ul>
      </div>

      {/* Conclusion */}
      <h2 className='font-[poppins] px-4 py-2 text-2xl'>Conclusion</h2>
      <p className='px-4'>
        In conclusion, Vacuum Circuit Breakers offer a reliable and efficient solution for interrupting electric currents. Their compact size, fast operation, and low maintenance requirements make them a popular choice in various industrial and power distribution applications.
      </p>

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

export default Vcb;
