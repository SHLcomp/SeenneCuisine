import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import Foods from '../components/foodSections/Foods'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Foods />
        <About />
        <Contact />
    </div>
  )
}

export default Home