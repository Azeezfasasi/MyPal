import React from 'react'
import FooterSection from '../assets/components/home-components/FooterSection'
import BuffetFilter from '../assets/components/restaurant-components/BuffetFilter'
import BuffetLists from '../assets/components/restaurant-components/BuffetList'
import InCityHero from '../assets/components/mobility-components/InCityHero'

function InCityRides() {
  return (
    <>
      <InCityHero />
      <BuffetFilter />
      <BuffetLists />
      <FooterSection />
    </>
  )
}

export default InCityRides