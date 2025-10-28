import React from 'react'
import { Link } from 'react-router-dom'

const ServicesHero = () => {
  return (
    <section className="services-hero">
      <div className="container">
        <div className="services-hero-content wow animate__animated animate__fadeIn">
          <h1 className="services-hero-title">Nos Services d'Excellence</h1>
          <p className="services-hero-subtitle">
            Des solutions digitales complètes et sur mesure pour propulser votre entreprise 
            vers de nouveaux sommets. De la conception à la réalisation, nous vous accompagnons 
            à chaque étape.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ServicesHero