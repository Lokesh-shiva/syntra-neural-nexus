import React, { useEffect } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

/**
 * Component that applies various performance optimizations across the app
 */
const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Preconnect to important domains
    const preconnectLinks = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
    ];

    preconnectLinks.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = href;
      document.head.appendChild(link);
    });

    // Set up intersection observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            if (target.dataset.src) {
              target.setAttribute('src', target.dataset.src);
              target.classList.add('lazy-loaded');
              target.removeAttribute('data-src');
              observer.unobserve(target);
            }
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    // Observe elements with data-src attribute
    document.querySelectorAll('[data-src]').forEach(element => {
      observer.observe(element);
    });

    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';

    // Optimize paint performance
    document.body.style.willChange = 'transform';
    document.body.style.transform = 'translateZ(0)';

    return () => {
      observer.disconnect();
      document.documentElement.style.scrollBehavior = '';
      document.body.style.willChange = '';
      document.body.style.transform = '';
    };
  }, []);

  return <div className="performance-optimized">{children}</div>;
};

export default PerformanceOptimizer; 