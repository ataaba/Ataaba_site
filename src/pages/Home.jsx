import React from 'react'
import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
import Services from '../components/Home/Services'

const Home = () => {
  return (
    <div className="home-page pt-3">
      <Hero />
      <About />
      <Services />
    </div>
  )
}

export default Home