import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import './contact.css'
import Footer from '../components/Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log(formData); // Log the form data (this is where you would send the data to the backend)
    
    // You can now send the formData to your backend using fetch/axios etc.
    alert('Message sent successfully!');
  };

  // Update form state when input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <>
      <NavBar />
      <div className='flex flex-col justify-center items-center font-[poppins] m-4'>
        <h1 className='text-4xl'>
          Contact Us
        </h1>
        <div className='flex flex-row w-full justify-evenly temp '>
          <div className='w-full p-4 items-center text-center border-r-2 border-black demo'>
            <span className='item-center text-2xl'>Contact Details</span>
            <p className='flex items-center justify-start m-2'>
              <img src='./phone-call.png' className='h-10' alt="Phone" />
              <span className='m-3 text-xl'>+91 9134353998</span>
            </p>
            <p className='flex items-center justify-start m-2'>
              <img src='./home-address.png' className='h-10' alt="Address" />
              <span className='m-3 text-xl text-justify'>A/24 Adityapur Industrial Area Jamshedpur, Jharkhand</span>
            </p>
            <p className='flex items-center justify-start m-2'>
              <img src='./image.png' className='h-10' alt="Email" />
              <span className='m-3 text-xl'>sineelect@gmail.com</span>
            </p>
          </div>
          <div className='w-full p-4 items-center text-center  border-black'>
            <span className='item-center text-2xl'>Get In Touch</span>
            
            {/* Form for Contact */}
            <form onSubmit={handleSubmit} className='flex flex-col space-y-3'>
              <input 
                type="text" 
                className='border-black border-1 rounded-sm p-2' 
                placeholder='Your Name' 
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <input 
                type="email" 
                className='border-black border-1 rounded-sm p-2' 
                placeholder='Your Email' 
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <textarea 
                className='border-black border-1 rounded-sm p-2 w-full' 
                rows={6} 
                placeholder='Your Message' 
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              
              {/* Submit Button */}
              <button 
                type="submit" 
                className='bg-blue-500 text-white p-2 rounded-sm hover:bg-gray-700'>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default ContactUs;
