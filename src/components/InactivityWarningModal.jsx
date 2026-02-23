import React from 'react';
import { AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import useInactivityWarning from '../hooks/useInactivityWarning';

/**
 * Inactivity Warning Modal Component
 * Shows a warning dialog before the user gets auto-logged out
 * User can dismiss to continue or logout manually
 */
export const InactivityWarningModal = () => {
  const { logout } = useAuth();
  const showWarning = useInactivityWarning(25 * 60 * 1000); // Shows warning at 25 minutes

  if (!showWarning) {
    return null;
  }

  const handleLogout = async () => {
    await logout();
  };

  const handleDismiss = () => {
    // The timer will be reset on any interaction, so this just closes the modal
    window.location.reload();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-lg shadow-lg max-w-sm w-full mx-4 p-6">
        <div className="flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h2 className="text-lg font-bold text-gray-900 mb-2">
              Session Inactivity Warning
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Your session will expire in 5 minutes due to inactivity. Please choose to continue your session or logout.
            </p>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={handleDismiss}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-medium"
          >
            Continue Session
          </button>
          <button
            onClick={handleLogout}
            className="flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition font-medium"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default InactivityWarningModal;
