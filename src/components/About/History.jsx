import React from 'react'

const History = () => {
  const timeline = [
    {
      /* year: "2013", */
      title: "Expertise Multidisciplinaire",
      description: "Avec des années d’expérience dans la gestion de projets, nous maîtrisons une large gamme de compétences, allant de la planification à la digitalisation en passant par le suivi, l’évaluation et la communication. Nous offrons une approche holistique, adaptée à tous types de projets, qu'ils soient publics, privés ou issus de la société civile."
    },
    {
      /* year: "2015", */
      title: "Solutions Sur Mesure",
      description: "Nous comprenons que chaque projet est unique. C’est pourquoi nous concevons des solutions personnalisées, parfaitement alignées avec vos besoins spécifiques et vos objectifs. Nos services sont modulables et peuvent évoluer avec votre projet pour garantir des résultats optimaux à chaque étape."
    },
    {
      /* year: "2018", */
      title: "Innovation et Technologie",
      description: "Nous mettons l'innovation au cœur de notre démarche. Grâce à notre expertise en digitalisation et systèmes d'information, nous vous aidons à intégrer des technologies modernes qui optimisent la gestion de vos projets et vous permettent d’être plus agile dans un monde en constante évolution."
    },
    {
      /* year: "2020", */
      title: "Engagement envers l'Excellence",
      description: "La qualité est notre priorité. Nous nous engageons à fournir un service impeccable, respectant les standards les plus élevés. Notre rigueur et notre souci du détail garantissent la réussite de chaque projet, avec un suivi constant et des ajustements en temps réel pour atteindre vos objectifs."
    },
    {
      /* year: "2023", */
      title: "Approche Collaborative et Transparente",
      description: "La réussite d’un projet repose sur une collaboration étroite et une communication fluide. Nous plaçons la transparence au cœur de nos relations, en maintenant une communication claire et continue avec nos clients. Vous serez toujours informé de l’avancement de votre projet, avec des rapports détaillés et un accès constant à l’information."
    },
    {
      /* year: "2023", */
      title: "Valeurs Solides",
      description: "Nous sommes guidés par des valeurs qui définissent notre approche et notre manière de travailler : l’excellence, l’innovation, la rigueur et la patience. Ces valeurs nous permettent de fournir des solutions durables, de qualité et de construire des partenariats de confiance à long terme."
    },
    {
      /* year: "2023", */
      title: "Résultats Concrets",
      description: "Notre objectif est de vous fournir des résultats tangibles et mesurables. Chaque projet que nous menons est un engagement à transformer vos idées en réalité, avec une attention constante à la performance et à la durabilité des résultats."
    }
  ]

  return (
    <section className="section history" id="history">
      <div className="container">
        <h2 className="section-title wow animate__animated animate__fadeIn">Pourquoi nous choisir ?</h2>
        <p className="section-subtitle wow animate__animated animate__fadeIn">
        Chez ATAABA, nous sommes convaincus que chaque projet mérite une gestion de qualité, 
        alliant expertise, innovation et rigueur. Voici pourquoi vous pouvez nous faire confiance pour vos projets :
        </p>
        
        <div className="timeline">
          {timeline.map((item, index) => (
            <div 
              key={index}
              className={`timeline-item wow animate__animated ${
                index % 2 === 0 ? 'animate__fadeInLeft' : 'animate__fadeInRight'
              }`}
            >
              <div className="timeline-content">
                <div className="timeline-year">{item.year}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default History