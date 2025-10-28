import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text wow animate__animated animate__fadeInLeft">
            <h2>À propos de Ataaba Entreprise</h2>
            <p>
            ATAABA est une entreprise innovante spécialisée dans la gestion de projets, 
            offrant des solutions complètes pour accompagner les organisations dans l'optimisation de leurs processus. 
            Nous mettons notre expertise au service de la planification, du suivi, de l’évaluation, de l’apprentissage, 
            ainsi que de la digitalisation et des systèmes d'information.
            </p>
            <p>
            Nous croyons en l’importance de la transparence et de la performance, 
            et c’est pourquoi nous proposons des solutions sur mesure pour les institutions publiques, 
            privées et de la société civile. Notre approche intégrée garantit une gestion de projet fluide et efficace, 
            adaptée aux besoins uniques de chaque client.
            </p>
            
            <ul className="about-features">
              <li><i className="fas fa-check"></i> Équipe d'experts certifiés</li>
              <li><i className="fas fa-check"></i> Méthodologie agile et transparente</li>
              <li><i className="fas fa-check"></i> Solutions sur mesure et évolutives</li>
              <li><i className="fas fa-check"></i> Support réactif et personnalisé</li>
            </ul>
            
            <Link to="/about" className="btn btn-primary">En savoir plus</Link>
          </div>
          
          <div className="about-image wow animate__animated animate__fadeInRight">
            <img 
              src="img (4).jpeg" 
              alt="Notre équipe" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About