import React from 'react'

const Team = () => {
  {/* 
  const teamMembers = [
    {
      name: "Jean Dupont",
      role: "PDG & Fondateur",
      description: "Visionnaire et entrepreneur dans l'âme, Jean guide notre entreprise vers de nouveaux horizons avec plus de 15 ans d'expérience dans le digital.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Marie Lambert",
      role: "Directrice Technique",
      description: "Expert en innovation technologique, Marie assure l'excellence de nos solutions avec une expertise pointue en architecture cloud et développement.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Thomas Martin",
      role: "Directeur Marketing",
      description: "Stratège créatif, Thomas développe notre marque et connecte avec notre audience grâce à son expertise en stratégie digitale et growth hacking.",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ]
*/}
  return (
    <section className="section team" id="team">
      <div className="container">
        {/* <h2 className="section-title wow animate__animated animate__fadeIn">Notre Équipe</h2> */}
        <p className="section-subtitle wow animate__animated animate__fadeIn">
        Chez ATAABA, nous nous engageons à être votre partenaire de confiance dans la gestion de vos projets, 
        en apportant expertise, innovation et une approche rigoureuse à chaque mission.
        </p>
        {/* 
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="team-card wow animate__animated animate__fadeInUp"
              data-wow-delay={`${index * 0.1}s`}
            >
              <img src={member.image} alt={member.name} className="team-image" />
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p>{member.description}</p>
                <div className="team-social">
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fas fa-envelope"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
        */}
      </div>
    </section>
  )
}

export default Team