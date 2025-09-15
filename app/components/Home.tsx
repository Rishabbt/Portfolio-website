import React from 'react'
import Hero from './Home/Hero/Hero'
import Services from './Home/Services/Services'
import Work from './Home/Work/Work'
import Skills from './Home/Skillls/Skill'
import  Contact  from './Home/Contact/Contact'
import Footer from './Home/Footer/Footer'
const Home = () => {
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