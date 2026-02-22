import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
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
import UserLayout from './user/UserLayout'
import Deposit from './user/Deposit'
import ConfirmDeposit from './user/ConfirmDeposit'
import Dashboard from './user/Dashboard'
import Services from '../pages/Services'
import BuyAndSell from '../pages/BuyAndSell'

export default function AppRouter() {
  let currentPath = useLocation().pathname;
  // console.log(currentPath)

  const hideNavBarPaths = [
    "/login",
    "/register",
    "/forgot-password",
    "/user",
    "/user/dashboard",
    "/user/deposit",
    "/user/withdraw",
    "/user/active-deposit",
    "/user/profile",
    "/admin",
    // "/contact",
    "/account"
  ];

  return (
    <>
      {!hideNavBarPaths.includes(currentPath) && <NavBar />}
      {/* <NavBar /> */}
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
        <Route path='/services' element={<Services />} />
        <Route path='/buy-and-sell' element={<BuyAndSell />} />
        <Route path='/account' element={<UserLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="confirm-deposit" element={<ConfirmDeposit />} />
          <Route path="deposit" element={<Deposit />} />
        </Route>
        {/* <Route path='/deposit' element={<Deposit />} /> */}
        {/* <Route path='/confirm-deposit' element={<ConfirmDeposit />} /> */}
      </Routes>
      {!hideNavBarPaths.includes(currentPath) && <Footer />}

    </>
  )
}
