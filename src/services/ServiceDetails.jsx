import React from 'react'
import MainHeader from '../assets/components/home-components/MainHeader'
import FooterSection from '../assets/components/home-components/FooterSection'
import ServiceDetailTitle from '../assets/components/home-components/ServiceDetailTitle'
import ServicesDetailHero from './ServicesDetailHero'
import ServiceDetailDescription from './ServiceDetailDescription'

function ServiceDetails() {
  return (
      <>
          <MainHeader />
          <ServiceDetailTitle />
          <ServicesDetailHero />
          <ServiceDetailDescription />
          <FooterSection />
      </>
  )
}

export default ServiceDetails