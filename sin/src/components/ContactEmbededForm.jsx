import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import dotenv from 'dotenv'
dotenv.config();
const ContactEmbededForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');  // New state for email
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !message) {
      setError('Please fill in all fields');
      return;
    }

    // Prepare the form data for EmailJS
    const templateParams = {
      from_name: name,  // This will match the {{from_name}} in your EmailJS template
      message: message,  // This will match the {{message}} in your EmailJS template
      email: email  // This will match the {{email}} in your EmailJS template
    };

    // Send the email using EmailJS
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID, // Access the env variable directly
        import.meta.env.VITE_TEMPLATE_ID, // Access the env variable directly
        templateParams,
        import.meta.env.VITE_USER_ID  // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          setName('');  // Clear the form
          setEmail(''); // Clear the email field
          setMessage('');
          setError('');
        },
        (error) => {
          setError('Failed to send the message, please try again later.');
          console.log(error);
        }
      );
  };

  return (
    <div className='p-4 flex flex-col justify-center items-center font-[poppins]'>
      <h2 className='text-2xl font-semibold mb-4'>Contact Us</h2>
      {error && <p className='text-red-500'>{error}</p>}
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <label className='mb-2'>
          Name:
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='border border-black p-2 w-full rounded-md mb-4'
            required
          />
        </label>
        <label className='mb-2'>
          Email:
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border border-black p-2 w-full rounded-md mb-4'
            required
          />
        </label>
        <label className='mb-2'>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='border border-black p-2 w-full mb-4'
            rows='4'
            required
          />
        </label>
        <button type='submit' className='bg-blue-500 text-white p-2 rounded'>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactEmbededForm;
