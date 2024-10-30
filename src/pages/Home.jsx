import React from 'react'

// Sections
import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import Gallery from '../components/sections/Gallery'
import Benefits from '../components/sections/Benefits'
import Bookcall from '../components/sections/Bookcall'

export default function Home() {
  return (
    <>
        <Hero />
        <Services />
        <Gallery />
        <Benefits />
        <Bookcall />
    </>
  )
}
