import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import Foods from '../components/foodSections/Foods'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Foods />
    </div>
  )
}

export default Home