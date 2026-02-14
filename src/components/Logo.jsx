import React from 'react'
import logo from "../assets/logo.jpg"
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/">
      <img src={logo} alt="Company logo" className='w-20 rounded-full' />
    </Link>
  )
}
