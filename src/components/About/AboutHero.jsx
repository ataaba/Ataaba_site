import React from 'react'
import { Link } from 'react-router-dom'

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="container">
        <div className="about-hero-content wow animate__animated animate__fadeIn">
          <h1 className="about-hero-title">À propos de Ataaba Entreprise</h1>
          <p className="about-hero-subtitle">
          ATAABA est une entreprise innovante spécialisée dans la gestion de projets, 
          offrant des solutions complètes pour accompagner les organisations dans l'optimisation de leurs processus.  </p>
          {/*
          <Link to="#team" className="btn btn-primary">
            Rencontrer l'équipe
          </Link>
          */}
        </div>
      </div>
    </section>
  )
}

export default AboutHero