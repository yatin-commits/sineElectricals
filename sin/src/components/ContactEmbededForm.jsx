import React, { useState } from 'react';

const RequirementsForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [requirements, setRequirements] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !phone || !requirements) {
      setError('Please fill in all fields');
      return;
    }

    // Handle form submission logic here (e.g., send data to the server)

    // Clear the form
    setName('');
    setPhone('');
    setRequirements('');
    setError('');
    alert('Form submitted successfully!');
  };

  return (
    <div className='p-4 flex flex-col justify-center items-center font-[poppins]'>
      <h2 className='text-2xl font-semibold mb-4'>Submit Your Requirements</h2>
      {error && <p className='text-red-500'>{error}</p>}
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <div className='flex space-x-3 '>
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
          Phone Number:
          <input
            type='number'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className='border border-black rounded-md p-2 w-full mb-4'
            required
          />
        </label>
        </div>
        <label className='mb-2'>
          Requirements:
          <textarea
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            className='border border-black p-2 w-full mb-4'
            rows='4'
            required
          />
        </label>
        <button type='submit' className='bg-blue-500 text-white p-2 rounded'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default RequirementsForm;
