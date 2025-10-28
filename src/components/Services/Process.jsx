import React from 'react'

const Process = () => {
  const steps = [
    {
      title: "Consultation & Analyse",
      description: "Étude approfondie de vos besoins, analyse de votre marché et définition des objectifs stratégiques."
    },
    {
      title: "Conception & Stratégie",
      description: "Élaboration de la stratégie digitale, création des maquettes et planification détaillée du projet."
    },
    {
      title: "Développement & Réalisation",
      description: "Réalisation technique avec les meilleures pratiques, tests rigoureux et assurance qualité."
    },
    {
      title: "Livraison & Support",
      description: "Déploiement, formation et support continu pour assurer le succès à long terme de votre projet."
    }
  ]

  return (
    <section className="section process">
      <div className="container">
        <h2 className="section-title wow animate__animated animate__fadeIn">Notre Processus</h2>
        <p className="section-subtitle wow animate__animated animate__fadeIn">
          Une méthodologie éprouvée pour garantir le succès de votre projet
        </p>
        
        <div className="process-steps">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="process-step wow animate__animated animate__fadeIn"
              data-wow-delay={`${index * 0.1}s`}
            >
              <div className="process-content">
                <div className="step-number">{index + 1}</div>
                <h3 className="process-title">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process