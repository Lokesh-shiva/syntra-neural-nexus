import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading, signIn } = useAuth();
  const location = useLocation();

  useEffect(() => {
    // Auto-login for demo purposes when accessing the dashboard directly
    if (!loading && !user && location.pathname === '/dashboard') {
      // Automatically sign in as demo user
      signIn('demo@syntra.ai', 'demopassword');
    }
  }, [loading, user, location.pathname, signIn]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse text-syntra-purple text-lg">Loading...</div>
      </div>
    );
  }

  if (!user) {
    // Auto-login is in progress, show loading
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-syntra-purple text-lg">
          <div className="animate-bounce">Logging in as Demo User...</div>
          <p className="text-sm text-gray-400 mt-2">This is just for demonstration purposes.</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
