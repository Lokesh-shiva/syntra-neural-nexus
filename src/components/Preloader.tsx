import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PreloaderProps {
  onPreloadComplete?: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onPreloadComplete }) => {
  const [isPreloaded, setIsPreloaded] = useState(false);
  const [preloadedRoutes, setPreloadedRoutes] = useState<Set<string>>(new Set());
  const location = useLocation();

  useEffect(() => {
    // List of all routes to preload
    const routes = [
      { path: '/', loader: () => import('../pages/Index') },
      { path: '/login', loader: () => import('../pages/Login') },
      { path: '/signup', loader: () => import('../pages/Signup') },
      { path: '/dashboard', loader: () => import('../pages/Dashboard') },
      { path: '/agents', loader: () => import('../pages/agents') },
      { path: '/workflow', loader: () => import('../pages/workflow') },
      { path: '/showcase', loader: () => import('../pages/showcase') },
      { path: '/contact', loader: () => import('../pages/contact') },
      { path: '/about', loader: () => import('../pages/about') },
      { path: '/simulate', loader: () => import('../pages/simulate') },
      { path: '/error', loader: () => import('../pages/error') },
    ];

    // Function to preload a route
    const preloadRoute = async (route: { path: string; loader: () => Promise<any> }) => {
      try {
        await route.loader();
        setPreloadedRoutes(prev => new Set([...prev, route.path]));
      } catch (error) {
        console.error('Error preloading route:', error);
      }
    };

    // Function to preload all routes
    const preloadAllRoutes = async () => {
      try {
        // Start preloading in parallel
        await Promise.all(routes.map(route => preloadRoute(route)));
        setIsPreloaded(true);
        onPreloadComplete?.();
      } catch (error) {
        console.error('Error during preloading:', error);
      }
    };

    // Start preloading immediately
    preloadAllRoutes();

    // Cleanup function
    return () => {
      setIsPreloaded(false);
      setPreloadedRoutes(new Set());
    };
  }, [onPreloadComplete]);

  // Preload next route based on current location
  useEffect(() => {
    if (!isPreloaded) return;

    const preloadNextRoute = async () => {
      const currentPath = location.pathname;
      const routes = {
        '/': () => import('../pages/Index'),
        '/login': () => import('../pages/Login'),
        '/signup': () => import('../pages/Signup'),
        '/dashboard': () => import('../pages/Dashboard'),
        '/agents': () => import('../pages/agents'),
        '/workflow': () => import('../pages/workflow'),
        '/showcase': () => import('../pages/showcase'),
        '/contact': () => import('../pages/contact'),
        '/about': () => import('../pages/about'),
        '/simulate': () => import('../pages/simulate'),
      };

      // Preload all routes except the current one
      Object.entries(routes).forEach(([path, loader]) => {
        if (path !== currentPath && !preloadedRoutes.has(path)) {
          loader().catch(console.error);
        }
      });
    };

    preloadNextRoute();
  }, [location.pathname, isPreloaded, preloadedRoutes]);

  return null; // This component doesn't render anything
};

export default Preloader; 