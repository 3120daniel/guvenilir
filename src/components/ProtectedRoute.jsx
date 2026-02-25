import React from 'react'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({ children, requiredRole = null }) => {
  const note = localStorage.getItem("note")

  // Not logged in — redirect to login
  if (!note) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute