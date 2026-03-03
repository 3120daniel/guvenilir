import React from 'react'
import { Route, Routes, useLocation } from "react-router-dom"
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
import ProtectedRoute from '../components/ProtectedRoute'
import YourDeposit from './user/YourDeposit'
import Withdraw from './user/Withdraw'
import AdminLayout from './admin/AdminLayout'
import Certificate from '../pages/Certificate'
// import TestAdmin from './admin/TestAdmin'
import AdminDashboard from './admin/AdminDashboard'
import Referals from './user/Referals'
import GoogleTranslateSwitcher from '../components/GoogleTranslateSwitcher'

export default function AppRouter() {
  const currentPath = useLocation().pathname

  const hideNavBarPaths = [
    "/login",
    "/register",
    "/forgot-password",
    "/w-admin",
    "/user",
    "/user/dashboard",
    "/user/deposit",
    "/user/withdraw",
    "/user/active-deposit",
    "/user/profile",
    "/admin",
    "/account",
    "/account/confirm-deposit",
    "/account/deposit",
    "/account/your-deposit",
    "/account/withdraw",
    "/account/referrals",
    "/certificate",
    "/t-admin",
  ];

  return (
    <>
      <GoogleTranslateSwitcher />
      {!hideNavBarPaths.includes(currentPath) && <NavBar />}
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
        <Route path='/certificate' element={<Certificate />} />
        
        {/* Protected Admin Route */}
        <Route 
          path='/w-admin' 
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
        {/* <Route path='/t-admin' element={<TestAdmin />} /> */}
        
        {/* Protected User Routes */}
        <Route 
          path='/account' 
          element={
            <ProtectedRoute requiredRole="user">
              <UserLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="confirm-deposit" element={<ConfirmDeposit />} />
          <Route path="deposit" element={<Deposit />} />
          <Route path="your-deposit" element={<YourDeposit />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route path="referrals" element={<Referals />} />
        </Route>
      </Routes>
      {!hideNavBarPaths.includes(currentPath) && <Footer />}
    </>
  )
}
