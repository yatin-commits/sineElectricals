import React from 'react'
// import './Services.css'
import './Services.css'
const Services = () => {
  return (
    <>
    <div className='font-[poppins] items-center flex flex-col justify-center'>
       <h1 className='text-3xl' > What we Provide ?</h1>  </div>
       <div className='flex justify-evenly p-4 font-[poppins] temp'>
        <div className=' items-center p-4 flex flex-col'><img className='h-20' src="./hand-tools.png" alt="" /><span className='text-2xl m-2'>Installation</span> 
        <p className='text-lg text-justify'>
        Professional installation services for all your industrial equipment needs.
        </p>
        </div>
        <div className=' items-center p-4 flex flex-col justify-center'><img src="./shipping-truck.png" className='h-20' alt="" /> <span className='text-2xl m-2'>Maintainance</span>  <p className='text-lg text-justify'>
        Professional maintenance services for all your industrial equipment needs.
        </p></div>
        <div className=' items-center p-4 flex flex-col'><img src="./consultant-services.png" className='h-20' alt="" /><span className='text-2xl m-2'>Consulting</span>  <p className='text-lg text-justify'>
        Professional consulting services for all your industrial equipment needs.
        </p></div>
       </div>
       
        </>
  )
}

export default Services