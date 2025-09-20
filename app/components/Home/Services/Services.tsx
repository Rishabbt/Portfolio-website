import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div className='pt-16 pb-16'>
        <h1 className='text-center text-white text-2xl md:text-4xl xl:text-5xl font-bold'>Collaborating with brands 
            <br/> and creative minds to deliver  <br/> impactful results
           
              
        </h1>
        <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center'>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center">
                <ServiceCard icon="/images/s1.png" name="UI and UX" description = "Clean, responsive, and intuitive design focused on seamless user experience. Built with modern UI principles, smooth animations, and mobile-first layouts, ensuring both aesthetic appeal and functionality."/>
            </div>
       

            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aso="200">
                <ServiceCard icon="/images/s2.png" name="Web and Mobile App" description = "Building scalable, high-performance, and responsive websites and mobile apps with modern frameworks. Focused on speed, clean architecture, and engaging user experiences across all devices."/>
            </div>

            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aso="200">
                <ServiceCard icon="/images/s3.png" name="Design & Creative" description = "Crafting visually compelling designs and graphics that align with brand identity and creativity. Emphasizing storytelling, consistency, and modern design trends. Dedicated to delivering unique and impactful visuals that leave a lasting impression."/>
            </div>

            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aso="300">
                <ServiceCard icon="/images/s4.png" name="Development" description = "Delivering robust, efficient, and scalable digital solutions powered by modern tech stacks. Prioritizing clean code, performance, and future-ready applications. Striving to build innovative solutions that solve real-world problems effectively."/>
            </div>
        </div>
    </div>
  )
}

export default Services