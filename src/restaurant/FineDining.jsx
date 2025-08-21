import React from 'react'
import FineDiningHero from '../assets/components/restaurant-components/FineDiningHero'
import FineDiningFilter from '../assets/components/restaurant-components/FineDiningFilter'
import FooterSection from '../assets/components/home-components/FooterSection'
import FineDiningLists from '../assets/components/restaurant-components/FineDiningLists'

function FineDining() {
  return (
    <>
      <FineDiningHero />
      <FineDiningFilter />
      <FineDiningLists />
      <FooterSection />
    </>
  )
}

export default FineDining