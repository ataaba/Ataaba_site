import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>ATAABA ENTREPRISE</h3>
            <p>Votre partenaire de confiance pour des solutions digitales innovantes et performantes.</p>
            <div className="social-links">
              <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h3>Liens Rapides</h3>
            <ul className="footer-links">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/about">À propos</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><a href="#">Immobilière</a></li>
              <li><a href="#">Expertise</a></li>
              <li><a href="#">Technologie</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Contact</h3>
            <ul className="footer-links">
              <li><i className="fas fa-map-marker-alt"></i> Almadies 2,Rufisque,Dakar,SENEGAL</li>
              <li><i className="fas fa-phone"></i> +221 78 751 72 72/+221 76 806 88 87</li>
              <li><i className="fas fa-envelope"></i> contact@ataabaentreprise.com</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 ATAABA ENTREPRISE. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer