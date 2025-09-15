import React from 'react'

const Footer = () => {
  return (
    <div>
    <div className=' bg-blue-900/20 p-5 grid grid-cols-1 md:grid-cols-2'>
        <h1 className='text-1xl sm:text-4xl lg:text-2xl font-bold text-bold text-gray-200  mb-15'> About me
          <div>
         <p className='text-gray-400 mt-6 text-base sm:text-lg'>We build responsive websites and applications <br/> with passion and precision.</p>
         </div></h1>
         

          <h1 className='text-1xl sm:text-4xl lg:text-2xl font-bold text-bold text-gray-200 block   '> Goal
          <div>
         <p className='text-gray-400 mt-6 text-base sm:text-lg'>I aim to create meaningful and efficient solutions through clean code, creativity, <br/> and problem-solving, while contributing to projects that make a difference </p>
         </div></h1>
         
    </div>
    <p className='text-gray-400 mt-6 text-base sm:text-lg flex justify-center'>2025 YourWebsite. All rights reserved.</p>
    </div>
  )
}

export default Footer