import React from 'react'
import Buttons from './components/Buttons'
import { NavBar } from './components/nav/NavBar'
import Pricing from './components/Pricing'
import ThreeSteps from './components/ThreeSteps'
import CTA from './components/CTA'

export default function App() {
  return (
    <div>
      <NavBar />
      <Buttons />
      <Pricing />
      <ThreeSteps />
      <CTA />
    </div>
  )
}
