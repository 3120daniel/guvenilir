import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from '../pages/Home'
import Register from '../pages/Register'
import Plans from '../pages/Plans'
import Markets from '../pages/Markets'
import Legal from '../pages/Legal'
import { NavBar } from '../components/nav/NavBar'
import Login from '../pages/Login'
import About from '../pages/About'
import ContactUs from '../pages/ContactUs'
import FAQs from '../pages/FAQs'
import NotFound from '../pages/NotFound'
import Footer from '../components/Footer'

export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/faqs' element={<FAQs />} />
          <Route path='/legal' element={<Legal />} />
          <Route path='/market' element={<Markets />} />
          <Route path='/plans' element={<Plans />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
