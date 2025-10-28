import React from 'react'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content animate-on-scroll">
          <h1 className="hero-title">ATAABA ENTREPRISE</h1>
          <p className="hero-subtitle">
          Chez ATAABA, nous nous engageons à être votre partenaire de confiance dans la gestion de vos projets, 
          en apportant expertise, innovation et une approche rigoureuse à chaque mission.
          </p>
          {/* 
          <div className="hero-buttons">
            <Link to="/services" className="btn btn-primary">Découvrir nos services</Link>
            <Link to="/contact" className="btn btn-outline">Nous contacter</Link>
          </div>
           */}
        </div>
      </div>
    </section>
  )
}

export default Hero