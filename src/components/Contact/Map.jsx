import React from 'react'

const Map = () => {
  return (
    <section id="map" className="map-section">
      <div className="map-container">
        <iframe 
          src="https://www.google.com/maps/search/Fayenne+Dangou,+Rufisque+Nord,+Dakar/@14.7232674,-17.2734512,12.98z?hl=fr-SN&entry=ttu&g_ep=EgoyMDI1MTAyMC4wIKXMDSoASAFQAw%3D%3D" 
          allowFullScreen="" 
          loading="lazy"
          title="Carte de localisation de ATAABA Entreprise"
        >
        </iframe>
      </div>
    </section>
  )
}

export default Map