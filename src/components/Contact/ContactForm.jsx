import React, { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    privacy: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulaire envoyé:', formData)
    alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.')
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      privacy: false
    })
  }

  const contactDetails = [
    {
      icon: 'fas fa-clock',
      title: 'Horaires d\'Ouverture',
      content: 'Lun - Ven: 9h-18h\nSam: 10h-16h\nDim: Fermé'
    },
    {
      icon: 'fas fa-globe',
      title: 'Zone d\'Intervention',
      content: 'Sénégal \nIntervention à distance\nSur site possible'
    },
    {
      icon: 'fas fa-headset',
      title: 'Support Technique',
      content: 'Assistance 24/7\nUrgences techniques\nMaintenance préventive'
    },
    {
      icon: 'fas fa-comments',
      title: 'Consultation Gratuite',
      content: 'Premier rendez-vous offert\nAnalyse de projet détaillée\nDevis personnalisé sous 48h'
    }
  ]

  return (
    <section id="contact-form" className="section contact-form-section">
      <div className="container">
        <div className="contact-form-container">
          <div className="form-side wow animate__animated animate__fadeInLeft">
            <h2 className="section-title" style={{textAlign: 'left', marginBottom: '2rem'}}>
              Envoyez-nous un Message
            </h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="firstName" className="form-label">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="lastName" className="form-label">
                      Nom *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Sujet *
                </label>
                <select
                  className="form-control"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="devis">Demande de devis</option>
                  <option value="support">Support technique</option>
                  <option value="partnership">Partenariat</option>
                  <option value="recruitment">Recrutement</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre projet ou votre demande..."
                  required
                ></textarea>
              </div>

              <div className="form-check mb-4">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="privacy"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor="privacy">
                  J'accepte la politique de confidentialité et que mes données soient traitées dans le cadre de ma demande *
                </label>
              </div>

              <button type="submit" className="btn btn-primary btn-lg w-100">
                <i className="fas fa-paper-plane me-2"></i>
                Envoyer le message
              </button>
            </form>
          </div>
          
          <div className="info-side wow animate__animated animate__fadeInRight">
            <h2 className="section-title" style={{textAlign: 'left', marginBottom: '2rem'}}>
              Informations Complémentaires
            </h2>
            
            {contactDetails.map((detail, index) => (
              <div 
                key={index}
                className="info-item"
              >
                <div className="info-icon">
                  <i className={detail.icon}></i>
                </div>
                <div className="info-content">
                  <h4>{detail.title}</h4>
                  <p style={{whiteSpace: 'pre-line'}}>{detail.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm