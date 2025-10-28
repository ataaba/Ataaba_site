import ServicesHero from '../components/Services/ServicesHero'
import ServicesGrid from '../components/Services/ServicesGrid'
import Process from '../components/Services/Process'

const Services = () => {
  return (
    <div className="services-page pt-3">
      <ServicesHero />
      <ServicesGrid />
      <Process />
    </div>
  )
}

export default Services