import React from 'react'
import Hero from './HeroSection/Hero'
import AboutSection from './About/AboutSection'
import WahtWeDo from './Services/WahtWeDo'
import Pricing from './Pricing/Pricing'
import HappyClients from './Testimonials/HappyClients'


const LandingPage = () => {
    return (
        <>
            <Hero />
            <AboutSection />
            <WahtWeDo />
            <HappyClients />
            <Pricing />
        </>
    )
}

export default LandingPage