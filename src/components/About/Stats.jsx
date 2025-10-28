import React from 'react'

const Stats = () => {
  const stats = [
    {
      number: "10+",
      label: "Années d'expérience"
    },
    {
      number: "500+",
      label: "Projets réalisés"
    },
    {
      number: "50+",
      label: "Experts passionnés"
    },
    {
      number: "15",
      label: "Pays desservis"
    }
  ]

  return (
    <section className="section stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="stat-item wow animate__animated animate__fadeIn"
              data-wow-delay={`${index * 0.1}s`}
            >
              <span className="stat-number">{stat.number}</span>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats