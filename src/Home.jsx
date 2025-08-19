import React from 'react'
import MainHeader from './assets/components/home-components/MainHeader'
import HeroSection from './assets/components/home-components/HeroSection'
import ExploreCategory from './assets/components/home-components/ExploreCategory'
import FeaturedExperiences from './assets/components/home-components/FeaturedExperiences'
import Faq from './assets/components/home-components/Faq'
import FooterSection from './assets/components/home-components/FooterSection'

function Home() {
  return (
    <>
      <HeroSection />
      <ExploreCategory />
      <FeaturedExperiences />
      <Faq />
      <FooterSection />
    </>
  )
}

export default Home

