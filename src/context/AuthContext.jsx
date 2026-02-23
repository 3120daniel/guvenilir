import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import authService from '../services/authService';

// Create auth context
const AuthContext = createContext();

// Inactivity timeout (30 minutes in milliseconds)
const INACTIVITY_TIMEOUT = 30 * 60 * 1000;

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);
  const inactivityTimerRef = useRef(null);

  // Setup inactivity timeout
  const setupInactivityTimer = () => {
    // Clear existing timer
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }

    // Set new timer
    inactivityTimerRef.current = setTimeout(() => {
      handleAutoLogout();
    }, INACTIVITY_TIMEOUT);
  };

  // Handle auto logout
  const handleAutoLogout = async () => {
    try {
      await authService.logout();
    } catch (err) {
      console.error('Auto logout error:', err);
    } finally {
      setUser(null);
      setIsAuthenticated(false);
      window.location.href = '/login?session=expired';
    }
  };

  // Reset inactivity timer on user activity
  const resetInactivityTimer = () => {
    if (isAuthenticated) {
      setupInactivityTimer();
    }
  };

  // Initialize auth state from localStorage
  useEffect(() => {
    const initializeAuth = () => {
      try {
        const storedUser = authService.getStoredUser();
        const token = authService.getAccessToken();
        
        if (storedUser && token) {
          setUser(storedUser);
          setIsAuthenticated(true);
        } else {
          setUser(null);
          setIsAuthenticated(false);
        }
      } catch (err) {
        console.error('Error initializing auth:', err);
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  // Setup activity listeners for inactivity timer
  useEffect(() => {
    if (!isAuthenticated) return;

    // Setup inactivity timer on first auth
    setupInactivityTimer();

    // Add activity listeners
    const activityEvents = ['mousedown', 'keydown', 'scroll', 'touchstart', 'click'];
    
    const handleActivity = () => {
      resetInactivityTimer();
    };

    activityEvents.forEach(event => {
      document.addEventListener(event, handleActivity);
    });

    // Cleanup
    return () => {
      activityEvents.forEach(event => {
        document.removeEventListener(event, handleActivity);
      });
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
    };
  }, [isAuthenticated]);

  // Login
  const login = async (username, password, keepMeLoggedIn = false) => {
    try {
      setError(null);
      setIsLoading(true);
      const response = await authService.login({
        username,
        password,
        keepMeLoggedIn,
      });
      const userData = response.data;
      setUser(userData);
      setIsAuthenticated(true);
      return response;
    } catch (err) {
      const errorMessage = err.message || 'Login failed';
      setError(errorMessage);
      setUser(null);
      setIsAuthenticated(false);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Register
  const register = async (fullName, username, email, password, repeatPassword, referralCode = null) => {
    try {
      setError(null);
      setIsLoading(true);
      const response = await authService.register({
        fullName,
        username,
        email,
        password,
        repeatPassword,
        referralCode,
      });
      // After registration, auto login user
      const loginResponse = await login(username, password);
      return loginResponse;
    } catch (err) {
      const errorMessage = err.message || 'Registration failed';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Logout
  const logout = async () => {
    try {
      setError(null);
      setIsLoading(true);
      // Clear inactivity timer
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
      await authService.logout();
      setUser(null);
      setIsAuthenticated(false);
      window.location.href = '/login';
    } catch (err) {
      console.error('Logout error:', err);
      // Still clear local state even if logout fails
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
      setUser(null);
      setIsAuthenticated(false);
      window.location.href = '/login';
    } finally {
      setIsLoading(false);
    }
  };

  // Get current user
  const getCurrentUser = async () => {
    try {
      setError(null);
      const userData = await authService.getCurrentUser();
      setUser(userData);
      setIsAuthenticated(true);
      return userData;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Forgot password
  const forgotPassword = async (email) => {
    try {
      setError(null);
      const response = await authService.forgotPassword(email);
      return response;
    } catch (err) {
      const errorMessage = err.message || 'Password reset request failed';
      setError(errorMessage);
      throw err;
    }
  };

  // Reset password
  const resetPassword = async (token, email, password, repeatPassword) => {
    try {
      setError(null);
      const response = await authService.resetPassword(token, email, password, repeatPassword);
      return response;
    } catch (err) {
      const errorMessage = err.message || 'Password reset failed';
      setError(errorMessage);
      throw err;
    }
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    error,
    login,
    register,
    logout,
    getCurrentUser,
    forgotPassword,
    resetPassword,
    setError,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
