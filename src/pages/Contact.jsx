import React from 'react'
import ContactHero from '../components/Contact/ContactHero'
import ContactInfo from '../components/Contact/ContactInfo'
import ContactForm from '../components/Contact/ContactForm'
import Map from '../components/Contact/Map'

const Contact = () => {
  return (
    <div className="contact-page pt-3">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <Map />
    </div>
  )
}

export default Contact