import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

/**
 * Hook to show a warning dialog before auto-logout due to inactivity
 * Default: 25 minutes warning before logout (30 min total inactivity timeout)
 */
export const useInactivityWarning = (warningTimeMs = 25 * 60 * 1000) => {
  const { isAuthenticated } = useAuth();
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      setShowWarning(false);
      return;
    }

    let warningTimer;

    const resetTimer = () => {
      clearTimeout(warningTimer);
      setShowWarning(false);

      warningTimer = setTimeout(() => {
        setShowWarning(true);
      }, warningTimeMs);
    };

    const activityEvents = ['mousedown', 'keydown', 'scroll', 'touchstart', 'click'];

    activityEvents.forEach(event => {
      document.addEventListener(event, resetTimer);
    });

    // Initialize timer
    resetTimer();

    return () => {
      clearTimeout(warningTimer);
      activityEvents.forEach(event => {
        document.removeEventListener(event, resetTimer);
      });
    };
  }, [isAuthenticated, warningTimeMs]);

  return showWarning;
};

export default useInactivityWarning;
