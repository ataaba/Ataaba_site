import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  const services = [
    {
      icon: 'fas fa-code',
      title: 'Digitalisation des processus',
      description: 'Nous digitalisons vos processus pour une meilleure transparence et efficacité organisationnelle.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Planification de projets',
      description: 'Nous assurons une planification efficace pour garantir le succès de vos projets.'
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'Suivi et évaluation',
      description: 'Nous réalisons un suivi rigoureux pour évaluer l\impact de vos projets.'
    }
  ]

  return (
    <section className="section services" id="services">
      <div className="container">
        <h2 className="section-title wow animate__animated animate__fadeIn">Nos Services</h2>
        <p className="section-subtitle wow animate__animated animate__fadeIn">
        Nous offrons des solutions innovantes pour améliorer la performance des projets institutionnels.
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card wow animate__animated animate__fadeInUp"
              data-wow-delay={`${index * 0.1}s`}
            >
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
