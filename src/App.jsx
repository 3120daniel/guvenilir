import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes/AppRouter'
import { AuthProvider } from './context/AuthContext'
import InactivityWarningModal from './components/InactivityWarningModal'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <InactivityWarningModal />
        <AppRouter />
      </AuthProvider>
    </BrowserRouter>
  )
}
