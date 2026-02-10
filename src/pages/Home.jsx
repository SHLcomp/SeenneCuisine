import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import Foods from '../components/foodSections/Foods'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Foods />
        <About />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home