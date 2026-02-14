import React from 'react'
import Buttons from './components/Buttons'
import { NavBar } from './components/nav/NavBar'
import Pricing from './components/Pricing'
import ThreeSteps from './components/ThreeSteps'
import btc from "./assets/crypto/btc.png"
import eth from "./assets/crypto/eth.png"
import ltc from "./assets/crypto/ltc.png"
import usdt from "./assets/crypto/usdt.png"
import xrp from "./assets/crypto/xrp.png"
import AppRouter from './routes/AppRouter'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}
