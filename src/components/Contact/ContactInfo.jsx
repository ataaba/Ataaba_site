import React from 'react'

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Notre Adresse',
      content: 'Almadies 2,Rufisque,Dakar,SENEGAL',
      link: '#map',
      buttonText: 'Voir sur la carte'
    },
    {
      icon: 'fas fa-phone',
      title: 'Téléphone',
      content: 'Du lundi au vendredi\n9h00 - 18h00',
      link: 'tel:++221 78 751 72 72',
      buttonText: '+221 78 751 72 72'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      content: 'Réponse sous 24h\nSupport 7j/7',
      link: 'mailto:contact@ataabaentreprise.com',
      buttonText: 'contact@ataabaentreprise.com'
    }
  ]

  return (
    <section className="section contact-info">
      <div className="container">
        <h2 className="section-title wow animate__animated animate__fadeIn">Comment Nous Joindre</h2>
        <p className="section-subtitle wow animate__animated animate__fadeIn">
          Plusieurs moyens de nous contacter selon vos préférences et besoins
        </p>
        
        <div className="contact-grid">
          {contactMethods.map((method, index) => (
            <div 
              key={index}
              className="contact-card wow animate__animated animate__fadeInUp"
              data-wow-delay={`${index * 0.1}s`}
            >
              <div className="contact-icon">
                <i className={method.icon}></i>
              </div>
              <h3 className="contact-title">{method.title}</h3>
              <p className="mb-3" style={{whiteSpace: 'pre-line'}}>{method.content}</p>
              <a href={method.link} className="btn btn-primary">
                {method.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactInfo