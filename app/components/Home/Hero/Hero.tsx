'use client'
import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import { BsArrowRight } from 'react-icons/bs'
import ParticlesHero from './ParticleBackground'

const Hero = () => {
  return ( <>
    <div className='relative h-screen flex items-center justify-center text-white overflow-hidden flex-col' id="Home">
  <ParticlesHero />

        <div className='relative z-10 flex-col item-center'>
             <Image src="/images/s1.jpg" alt="Profile pic"  width={150} height={150} data-aos="fade-up"
             className = " bg-black rounded-full border-8 border-{#00c0c48aa}" /> 
        </div>
        <h1 data-aos="fade-up" data-aos-delay="200" className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-centre font-bold tracking-wide'>Creating web products,<br></br>brands,<span className='text-red-600'>  and experiences.</span>
           </h1>

           <h2 data-aos="fade-up" data-aos-delay="400" className='mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex-medium flex items-center'>
            Hi, I am Rishabh - A Passionate 
            <span className='text-cyan-200 font-bold'>
                <Typewriter options={{
                    strings:[
                        "Frontend Developer",
                        "UI/UX ",
                    ],
                    autoStart:true,
                    loop:true,
                    delay:75,
                    deleteSpeed:50,
                    wrapperClassName:'pl-2',
                }} />
            </span>
           </h2>
           <button data-aos="fade-up" data-aos-delay="600" className='mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded text-lg font-medium'>
            <span>See my Work</span>
            <BsArrowRight className='w-5 h-5 ml-2 inline-block'/>
           </button>
    </div>

    
    </>
  )
}

export default Hero