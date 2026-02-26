import { LogOut } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const TIMEOUT_MS = 10 * 60 * 1000 // 10 minutes

export default function LogoutButton({ className = "", hasIcon }) {
  const navigate = useNavigate()
  const timerRef = useRef(null)

  const logout = () => {
    localStorage.removeItem("note")
    localStorage.removeItem("keepMeLoggedIn")
    navigate("/login")
  }

  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(logout, TIMEOUT_MS)
  }

  useEffect(() => {
    // Skip auto-logout if user chose "keep me logged in"
    if (localStorage.getItem("keepMeLoggedIn")) return

    const events = ["mousemove", "mousedown", "keydown", "touchstart", "scroll", "click"]

    events.forEach(e => window.addEventListener(e, resetTimer))
    resetTimer() // start the timer on mount

    return () => {
      events.forEach(e => window.removeEventListener(e, resetTimer))
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  return (
    <button onClick={logout} className={className}>
      Logout {hasIcon && <LogOut size={16} /> }
    </button>
  )
}