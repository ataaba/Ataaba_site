import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link'
  }

  return (
    <nav className={`main-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img 
            src="/logo_ATAABA.png" 
            alt="ATAABA Logo" 
            className="logo-image"
          />
          {/* Optionnel : garder le texte à côté du logo */}
          {/* <span className="logo-text">Nexus Digital</span> */}
        </Link>
        
        <button className="nav-toggle" onClick={toggleMenu}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" className={isActive('/')} onClick={closeMenu}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/about" className={isActive('/about')} onClick={closeMenu}>
              À propos
            </Link>
          </li>
          <li>
            <Link to="/services" className={isActive('/services')} onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className={isActive('/contact')} onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar