'use client';
import React from 'react'
import {SiGithub, SiHtml5, SiJavascript,SiNextdotjs, SiReact, SiTailwindcss, SiTypescript} from 'react-icons/si'
import Tilt from 'react-parallax-tilt'
const skills = [
    {
        name:'JavaScript',
        icon: <SiJavascript />,
    },
    {
        name:'React.js',
        icon: <SiReact />,
    },

    {
        name:'Next.js',
        icon: <SiNextdotjs />,
    },

    {
        name:'Tailwind CSS',
        icon: <SiTailwindcss />
    },
    
    {
        name:'TypeScript',
        icon: <SiTypescript />,
    },

    {
        name:'Github',
        icon: <SiGithub />,
    },

    {
        name:'HTML',
        icon: <SiHtml5 />,
    },




]

const Skill = () => {
  return (
    <div className='text-white pt-16 pb-16 '>
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
            MY <span className='text-cyan-300'>Skills</span>
        </h1>
        <div className='flex flex-wrap justify-center gap-6 mt-16'>
            {skills.map((skil,i) => {
                return(
                    <Tilt key={skil.name} scale={1.5} transitionSpeed={400}>
                        <div data-aos="flip-right" 
                             data-aos-anchor-placement="top-center" 
                             data-aso-delay={i*100}
                            className='bg-[#014134145]  w-60 h-40 rounded-3xl  flex flex-col item-center justify-center shadow-lg transition hover:scale-105'>
                            {/* text-center */}
                            <div className='text-5xl  mb-4 text-green-300'>
                                {skil.icon}
                            </div>
                            <p className='text-purple-400 text-2xl font-semibold'>{skil.name}</p>
                        </div>
                    </Tilt>
                )
            })}
            </div>
    </div>
  )
}

export default Skill