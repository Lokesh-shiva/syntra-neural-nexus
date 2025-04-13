
import React from 'react';

interface SyntraLogoProps {
  size?: number;
  className?: string;
}

const SyntraLogo: React.FC<SyntraLogoProps> = ({ size = 120, className = '' }) => {
  return (
    <div 
      className={`relative ${className}`} 
      style={{ width: size, height: size }}
    >
      {/* Outer circle with glow */}
      <div 
        className="absolute inset-0 rounded-full bg-gradient-to-br from-syntra-purple/50 to-syntra-blue/50 animate-pulse-glow"
        style={{ filter: 'blur(10px)' }}
      ></div>
      
      {/* Main circle */}
      <div className="absolute inset-2 rounded-full bg-gradient-to-br from-syntra-purple to-syntra-blue opacity-80"></div>
      
      {/* Inner circle */}
      <div className="absolute inset-[25%] rounded-full bg-syntra-dark/50 backdrop-blur-sm flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-syntra-purple/10 to-syntra-blue/10"></div>
      </div>
      
      {/* Neural network lines - simplified version */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[45, 135, 225, 315].map((angle, i) => (
          <div 
            key={i}
            className="absolute w-[40%] h-[2px] bg-white/70 origin-left"
            style={{ 
              transform: `rotate(${angle}deg)`,
              left: '50%',
              top: '50%' 
            }}
          ></div>
        ))}
        
        {/* Nodes */}
        {[45, 135, 225, 315].map((angle, i) => (
          <div 
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white shadow-glow"
            style={{ 
              transform: `rotate(${angle}deg) translateX(${size * 0.4}px)`,
              left: '50%',
              top: '50%',
              boxShadow: '0 0 5px rgba(255, 255, 255, 0.7)' 
            }}
          ></div>
        ))}
      </div>
      
      {/* Center dot */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[15%] h-[15%] rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.7)]"></div>
    </div>
  );
};

export default SyntraLogo;
