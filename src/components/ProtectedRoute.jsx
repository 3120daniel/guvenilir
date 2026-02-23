import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

// Protected Route Component - redirects to login if not authenticated
export const ProtectedRoute = ({ children, requiredRole = null }) => {
  const { isAuthenticated, isLoading, user } = useAuth()

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-flex animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  // Role-based access control
  if (requiredRole && user) {
    const userRole = user.role || user.userRole || 'user';
    if (userRole !== requiredRole) {
      // Redirect based on role
      if (userRole === 'admin') {
        return <Navigate to="/w-admin" replace />
      } else {
        return <Navigate to="/account" replace />
      }
    }
  }

  return children
}

export default ProtectedRoute
