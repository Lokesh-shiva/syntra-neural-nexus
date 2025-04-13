import React, { useEffect, memo } from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 5
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: -5
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4
};

// Use memo to prevent unnecessary re-renders
const Layout = memo(({ children }: LayoutProps) => {
  const location = useLocation();
  
  useEffect(() => {
    // Reset scroll position when component mounts or route changes
    window.scrollTo(0, 0);

    // Add preload hints for common resources to improve perceived performance
    const preloadLinks = [
      { href: '/fonts/your-font.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      // Add other common resources here
    ];

    preloadLinks.forEach(({ href, as, type, crossOrigin }) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      if (as) link.setAttribute('as', as);
      if (type) link.setAttribute('type', type);
      if (crossOrigin) link.setAttribute('crossorigin', 'anonymous');
      document.head.appendChild(link);
    });

    return () => {
      // Clean up preload links when component unmounts
      document.querySelectorAll('link[rel="preload"]').forEach(link => {
        document.head.removeChild(link);
      });
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-syntra-dark">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          className="flex-grow"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
});

Layout.displayName = 'Layout';

export default Layout; 