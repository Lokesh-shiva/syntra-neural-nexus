import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import anime from 'animejs';
import { Button } from '@/components/ui/button';

// CSS for glitch effect - will be injected
const glitchStyles = `
.glitch {
  position: relative;
  font-weight: bold;
  line-height: 1.2;
  color: #fff;
  letter-spacing: 5px;
  animation: shift 4s ease-in-out infinite alternate;
  z-index: 1;
}

.glitch:before,
.glitch:after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  opacity: 0.8;
}

.glitch:before {
  left: -2px;
  text-shadow: 2px 0 #00ffff;
  animation: glitch-1 4s ease-in-out infinite alternate;
}

.glitch:after {
  left: 2px;
  text-shadow: -2px 0 #ff00ff;
  animation: glitch-2 3s ease-in-out infinite alternate;
}

@keyframes glitch-1 {
  0%, 100% { clip-path: inset(50% 0 30% 0); }
  20% { clip-path: inset(15% 0 59% 0); }
  40% { clip-path: inset(44% 0 29% 0); }
  60% { clip-path: inset(54% 0 10% 0); }
  80% { clip-path: inset(30% 0 56% 0); }
}

@keyframes glitch-2 {
  0%, 100% { clip-path: inset(25% 0 58% 0); }
  20% { clip-path: inset(53% 0 30% 0); }
  40% { clip-path: inset(18% 0 65% 0); }
  60% { clip-path: inset(37% 0 20% 0); }
  80% { clip-path: inset(65% 0 40% 0); }
}

@keyframes shift {
  0%, 40%, 44%, 58%, 61%, 65%, 69%, 73%, 100% {
    transform: skewX(0deg);
  }
  41% {
    transform: skewX(10deg);
  }
  42% {
    transform: skewX(-10deg);
  }
  59% {
    transform: skewX(40deg) skewY(10deg);
  }
  60% {
    transform: skewX(-40deg) skewY(-10deg);
  }
  63% {
    transform: skewX(10deg) skewY(-5deg);
  }
  70% {
    transform: skewX(-50deg) skewY(-20deg);
  }
  71% {
    transform: skewX(10deg) skewY(10deg);
  }
}
`;

const ErrorPage = () => {
  useEffect(() => {
    // Inject the glitch style
    const styleElement = document.createElement('style');
    styleElement.textContent = glitchStyles;
    document.head.appendChild(styleElement);
    
    // Cleanup on unmount
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  useEffect(() => {
    // Animate elements
    anime({
      targets: '.error-message',
      opacity: [0, 1],
      translateY: [20, 0],
      delay: 300,
      easing: 'easeOutExpo'
    });
    
    anime({
      targets: '.error-action',
      opacity: [0, 1],
      translateY: [20, 0],
      delay: 600,
      easing: 'easeOutExpo'
    });
    
    // Random glitch particles
    anime({
      targets: '.glitch-particle',
      translateX: function() { return anime.random(-70, 70); },
      translateY: function() { return anime.random(-70, 70); },
      scale: function() { return anime.random(0.5, 1.5); },
      opacity: [0.5, 0],
      easing: 'easeOutExpo',
      duration: function() { return anime.random(1000, 5000); },
      delay: function() { return anime.random(0, 1000); },
      loop: true
    });
  }, []);

  return (
    <Layout>
      <div className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Background glitch particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="glitch-particle absolute bg-gradient-to-r from-syntra-purple to-syntra-blue rounded-full opacity-50"
            style={{
              width: Math.random() * 50 + 10 + 'px',
              height: Math.random() * 50 + 10 + 'px',
              top: '50%',
              left: '50%',
              filter: 'blur(8px)'
            }}
          />
        ))}
        
        {/* Main content */}
        <h1 
          className="glitch text-8xl md:text-9xl mb-6" 
          data-text="404"
        >
          404
        </h1>
        
        <div className="error-message text-center mb-8 opacity-0">
          <h2 className="text-2xl font-bold mb-4">Dimension Not Found</h2>
          <p className="text-gray-400 max-w-lg">
            The neural pathway you were looking for doesn't exist or has been disconnected from the main network.
          </p>
        </div>
        
        <div className="error-action opacity-0">
          <Link to="/">
            <Button className="bg-gradient-to-r from-syntra-purple to-syntra-blue hover:from-syntra-blue hover:to-syntra-purple transition-all">
              Return to Main Network
            </Button>
          </Link>
        </div>
        
        {/* Binary code effect in background */}
        <div className="absolute inset-0 -z-10 overflow-hidden opacity-10 pointer-events-none text-xs">
          {Array.from({ length: 30 }).map((_, i) => (
            <div 
              key={i}
              className="absolute whitespace-nowrap"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 90 - 45}deg)`,
                opacity: 0.3 + Math.random() * 0.7
              }}
            >
              {Array.from({ length: 30 }).map((_, j) => (
                Math.random() > 0.5 ? '1' : '0'
              )).join(' ')}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ErrorPage; 