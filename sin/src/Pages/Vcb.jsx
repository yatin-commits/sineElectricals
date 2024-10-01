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
          <img src="./phone-call.png" alt="" />
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
              {/* <tr>
                <td className="border border-gray-300 p-2">Features</td>
                <td className="border border-gray-300 p-2">
                  <ul className="list-disc list-inside">
                    <li>Durable</li>
                    <li>Easy to use</li>
                    <li>High performance</li>
                    <li>Energy efficient</li>
                    <li>Compact design</li>
                  </ul>
                </td>
              </tr> */}
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
      <h1 className='font-[poppins] p-4 text-3xl'>Vcb : Detailed Description</h1>
      <p className='px-4'>
        The panel is designed to meet the rigorous demands of modern infrastructure and industrial setups. Known for its robust build and outstanding performance, this panel is ideal for both commercial and residential applications. It offers exceptional versatility, durability, and ease of use. 
      </p>

      {/* Key Features */}
      <div className='border-1 rounded-md border-black m-2'>
      <h2 className='font-[poppins] px-4 py-2 text-2xl'>Key Features</h2>
      <p className='px-4'>
        This panel is packed with features that make it stand out in the market:
      </p>
      <ul className="list-disc list-inside px-8">
        <li> Durability: Built to last with high-quality materials that withstand wear and tear.</li>
        <li> User-Friendly : Easy to install and operate with minimal maintenance required.</li>
        <li> Energy Efficiency : Designed to minimize energy consumption without compromising performance.</li>
        <li> Compact Size : Fits seamlessly into various environments due to its compact and lightweight design.</li>
        <li> High Voltage Capacity : Capable of handling up to 220V, making it suitable for diverse applications.</li>
        <li> Cost-Effective : Offers exceptional value for money with a long lifespan and low operational costs.</li>
      </ul>
      </div>

      {/* Applications */}
      <div className='border-1 rounded-md border-black m-2'>
      <h2 className='font-[poppins] px-4 py-2 text-2xl'>Applications</h2>
      <p className='px-4'>
        This versatile panel can be used in a wide range of applications, including:
      </p>
      <ul className="list-disc list-inside px-8">
        <li>Residential buildings</li>
        <li>Commercial complexes</li>
        <li>Industrial facilities</li>
        <li>Manufacturing plants</li>
        <li>Power distribution systems</li>
      </ul>
      </div>

      {/* Types */}
      <div className='border-1 rounded-md border-black m-2'>
      <h2 className='font-[poppins] px-4 py-2 text-2xl'>Available Types</h2>
      <p className='px-4'>
        The panel is available in various types, each designed to meet specific needs:
      </p>
      <ul className="list-disc list-inside px-8">
        <li>Standard Panel: Ideal for general use in residential and commercial buildings.</li>
        <li>High-Voltage Panel: Specifically designed for industrial and manufacturing environments that require higher voltage capacity.</li>
        <li>Smart Panel: Equipped with advanced features like remote monitoring and automation capabilities for smart homes and buildings.</li>
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

export default Vcb;
