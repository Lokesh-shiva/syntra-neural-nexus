import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [isInitialMount, setIsInitialMount] = React.useState(true);

  React.useEffect(() => {
    // After the first mount, we can show transitions
    const timer = setTimeout(() => {
      setIsInitialMount(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // For initial mount, render without animation but with proper positioning
  if (isInitialMount) {
    return (
      <div 
        className="page-transition" 
        style={{ 
          opacity: 1,
          transform: 'translateY(0)',
          position: 'relative',
          zIndex: 1
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 3 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.15,
            ease: [0.4, 0, 0.2, 1]
          }
        }}
        exit={{ 
          opacity: 0, 
          y: -3,
          transition: {
            duration: 0.15,
            ease: [0.4, 0, 0.2, 1]
          }
        }}
        className="page-transition"
        style={{
          position: 'relative',
          zIndex: 1
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition; 