import React from 'react'
import { BiEnvelope, BiMap, BiLogoLinkedin,  } from 'react-icons/bi'

const Contact = () => {
  return (
    <div className='pt-16 pb-16'>
         <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-bold text-gray-200 flex justify-center mb-15'>Contact Info</h1>
        <div className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 items-center'>
            {/* text contect */}
            <div>
                
                <p className='text-gray-400 mt-6 text-base sm:text-lg'>"Let’s work together! Feel free to reach out for collaborations, opportunities, or just to say hello</p>
                <div className='mt-7'>
                    <div className='flex items-center space-x-3 mb-4'>
                        <BiEnvelope className='w-9 h-9 text-cyan-300' />
                        <p className='text-xl font-bold text-gray-400'>
                            rishabhtripathi@gmail.com
                        </p>
                    </div>

                    <div className='flex items-center space-x-3 mb-4'>
                        <BiLogoLinkedin className='w-9 h-9 text-cyan-300' />
                        <p className='text-xl font-bold text-gray-400'>
                            Rishabh Tripathi
                        </p>
                    </div>

                    <div className='flex items-center space-x-3 mb-4'>
                        <BiMap className='w-9 h-9 text-cyan-300' />
                        <p className='text-xl font-bold text-gray-400'>
                            Delhi,India
                        </p>
                    </div>

                    
                    
                </div>
            </div>

            {/* form */}
            <div className='md:p-10 p-5 bg-[#131332] rounded-lg'>
                <input type="text" placeholder='Name' className='px-4 py-3.5 mt-6 bg-[#363659] text-white/outline-none rounded-md w-full placeholder:text-white/70' />

                <input type="email" placeholder='E-mail' className='px-4 py-3.5 mt-6 bg-[#363659] text-white/outline-none rounded-md w-full placeholder:text-white/70' />

                <input type="text" placeholder='Number' className='px-4 py-3.5 mt-6 bg-[#363659] text-white/outline-none rounded-md w-full placeholder:text-white/70' />

                <textarea placeholder='your message  ' className='px-4 py-3.5 mt-6 bg-[#363659] text-white/outline-none rounded-md w-full placeholder:text-white/70 h-[10rem]'></textarea>
                <button className='mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full'>Send Message</button>
            </div>
        </div>
    </div>
  )
}

export default Contact