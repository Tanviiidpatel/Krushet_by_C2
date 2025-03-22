import React from 'react'
import { Navbar, Footer, Hero,HowItWorks,WhyChoose,CTA,Testimonials} from '../../components/home-1/component'

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChoose/>
      <HowItWorks/>
      <Testimonials/>
      <CTA/>
      <Footer />
    </>
  )
}

export default Homepage
