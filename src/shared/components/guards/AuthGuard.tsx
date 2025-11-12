import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

// In a real app, you might have a more sophisticated auth hook
const useAuth = () => {
  const token = localStorage.getItem('auth_token');
  // This is a mock check. A real app would validate the token.
  return { isAuthenticated: !!token };
};

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
