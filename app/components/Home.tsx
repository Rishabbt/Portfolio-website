'use client'
import React, { useEffect } from 'react'
import Hero from './Home/Hero/Hero'
import Services from './Home/Services/Services'
import Work from './Home/Work/Work'
import Skills from './Home/Skillls/Skill'
import  Contact  from './Home/Contact/Contact'
import Footer from './Home/Footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Home = () => {

  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration:1000,
        easing:"ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    }
    initAOS();
  },[])
  return (
    <div className='overflow-hidden '>
      < Hero />
      < Services />
      < Work />
      < Skills />
      < Contact />
      < Footer />
    </div>
  )
}

export default Home