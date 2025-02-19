import React, { useEffect, useRef, useCallback, ReactNode, useContext } from 'react';
// import { useAuth } from './AuthContext';
import AuthContext from "../resources/contexts/AuthContext";
import { useNavigate } from 'react-router-dom';

const INACTIVITY_TIME_LIMIT = 15 * 60 * 1000; // 15 minutes

const ActivityTracker: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const { logout } = useAuth();
const navigate = useNavigate()
  const timerRef = useRef<number | undefined>(undefined);
  const authContext = useContext(AuthContext);

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = window.setTimeout(logoutUser, INACTIVITY_TIME_LIMIT);
  }, []);

  const logoutUser = async () => {
    console.log("About to logout the user")
    await authContext?.logOut();
    navigate("/1/sign-in");
  };

  useEffect(() => {
    const events = ['mousemove', 'keydown', 'click'];
    const resetTimerHandler = () => resetTimer();

    events.forEach(event => {
      window.addEventListener(event, resetTimerHandler);
    });

    resetTimer();

    return () => {
      console.log("About to clear timer on unmount")
      events.forEach(event => {
        window.removeEventListener(event, resetTimerHandler);
      });
      if (timerRef.current) {
        console.log("Clearing activity timer")
        // logoutUser();
        clearTimeout(timerRef.current);
      }
    };
  }, [resetTimer]);

  return <>{children}</>;
};

export default ActivityTracker;
