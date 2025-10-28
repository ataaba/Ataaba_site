import React from 'react'
import AboutHero from '../components/About/AboutHero'
import History from '../components/About/History'
import Team from '../components/About/Team'
import Stats from '../components/About/Stats'

const About = () => {
  return (
    <div className="about-page pt-3">
      <AboutHero />
      <History />
      <Team />
      <Stats />
    </div>
  )
}

export default About