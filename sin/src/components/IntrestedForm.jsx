import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS

const InterestedForm = ({ handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Basic validation
    if (!name || !email || !message) {
      setError('Please fill in all fields');
      return;
    }

    const templateParams = {
      from_name: name,
      email: email,
      message: message
    };

    // Send the email using EmailJS
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID, // Access the env variable directly
        import.meta.env.VITE_TEMPLATE_ID, // Access the env variable directly
        templateParams,
        import.meta.env.VITE_USER_ID // Access the env variable directly
      )
      .then(
        (result) => {
          console.log('Email successfully sent!', result);
          setSuccess('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
          setError('');
        },
        (error) => {
          console.error('Failed to send the email:', error);
          setError('Failed to send the message, please try again later.');
        }
      );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-md w-[90%] md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl mb-4">Contact Us</h2>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Name:</label>
            <input
              type="text"
              className="border border-gray-300 rounded p-2 w-full"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Email:</label>
            <input
              type="email"
              className="border border-gray-300 rounded p-2 w-full"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Message:</label>
            <textarea
              className="border border-gray-300 rounded p-2 w-full"
              rows="4"
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="flex justify-between">
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
              Send
            </button>
            <button type="button" onClick={handleClose} className="bg-red-500 text-white px-4 py-2 rounded">
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InterestedForm;
