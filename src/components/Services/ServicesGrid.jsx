import React from 'react'

const ServicesGrid = () => {
  const services = [
    {
      icon: 'fas fa-code',
      title: 'Ataaba Technologies',
      description: 'Digitalisation pour une meilleure gestion de l\information.',
      features: [
        'Sites vitrines et corporate',
        'Plateformes e-commerce',
        'Applications web sur mesure',
        'Optimisation des performances',
        'Vente des ordinateurs, téléphones et appareils électroménagers'
      ]
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Ataaba Expertise',
      description: 'Une approche structurée pour assurer votre succès.',
      features: [
        'Rédaction de rapports, business plans, appels d’offres',
        'Opérationnel au Sénégal et à l’international',
        'Planification, Suivi-Évaluation et études d’impact',
        'Formations professionnelles (présentiel & e-learning)'
      ]
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'Ataaba Immobilier',
      description: 'Conception d\'interfaces utilisateur intuitives et d\'expériences utilisateur mémorables et engageantes.',
      features: [
        'Conception des plans et devis',
        'Financement jusqu’à 50 % de chaque étape',
        'Paiement échelonné sur 12 mois, après acompte de 30 %',
        'Zones d’intervention : Dakar, Thiès (extension nationale prévue)'
      ]
    },
  ]

  return (
    <section className="section" id="services">
      <div className="container">
        <h2 className="section-title wow animate__animated animate__fadeIn">Nos Services Principaux</h2>
        <p className="section-subtitle wow animate__animated animate__fadeIn">
          Découvrez notre gamme complète de services professionnels adaptés à vos besoins
        </p>
        
        <div className="services-grid-detailed">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card-detailed wow animate__animated animate__fadeInUp"
              data-wow-delay={`${index * 0.1}s`}
            >
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <i className="fas fa-check"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid