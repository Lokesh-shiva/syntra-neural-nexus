import React from 'react';
import { motion } from 'framer-motion';

interface RobotCharacterProps {
  state: 'idle' | 'thinking' | 'working' | 'complete';
}

const RobotCharacter: React.FC<RobotCharacterProps> = ({ state }) => {
  // Define different animations based on state
  const eyeVariants = {
    idle: { opacity: 1 },
    thinking: { 
      opacity: [1, 0.5, 1], 
      transition: { repeat: Infinity, duration: 2 } 
    },
    working: { 
      opacity: [1, 0.2, 1], 
      scale: [1, 1.2, 1],
      transition: { repeat: Infinity, duration: 0.5 } 
    },
    complete: { 
      scale: 1.2,
      fill: "#4ade80" 
    }
  };

  const antennaVariants = {
    idle: { y: 0 },
    thinking: { 
      y: [0, -5, 0], 
      transition: { repeat: Infinity, duration: 1.5 } 
    },
    working: { 
      rotate: [0, 5, -5, 0], 
      transition: { repeat: Infinity, duration: 0.3 } 
    },
    complete: { y: -5 }
  };

  const bodyVariants = {
    idle: { y: 0 },
    thinking: { y: 0 },
    working: { 
      y: [0, -2, 0], 
      transition: { repeat: Infinity, duration: 0.3 } 
    },
    complete: { 
      y: [0, -10, 0], 
      transition: { duration: 0.8, times: [0, 0.6, 1] } 
    }
  };

  const sparkleVariants = {
    idle: { opacity: 0 },
    thinking: { opacity: 0 },
    working: { 
      opacity: [0, 1, 0], 
      scale: [0.8, 1.2, 0.8],
      transition: { repeat: Infinity, duration: 0.5 } 
    },
    complete: { 
      opacity: [0, 1, 0], 
      scale: [1, 1.5, 1],
      transition: { duration: 1.2, repeat: 2 } 
    }
  };

  return (
    <div className="robot-container">
      <motion.svg 
        width="120" 
        height="160" 
        viewBox="0 0 120 160" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        animate={state}
        initial="idle"
      >
        {/* Sparkles */}
        <motion.g variants={sparkleVariants}>
          <path d="M20 40L25 35M100 40L95 35M40 20L38 15M80 20L82 15M60 10L60 5" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 100L15 105M100 100L105 105M60 130L60 135" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
        </motion.g>

        {/* Antenna */}
        <motion.g variants={antennaVariants}>
          <rect x="58" y="10" width="4" height="15" fill="#6366F1" />
          <circle cx="60" cy="8" r="5" fill="#8B5CF6" />
        </motion.g>

        {/* Robot Body */}
        <motion.g variants={bodyVariants}>
          {/* Head */}
          <rect x="35" y="25" width="50" height="40" rx="10" fill="#1F2937" stroke="#6366F1" strokeWidth="2" />
          
          {/* Eyes */}
          <motion.circle variants={eyeVariants} cx="45" cy="45" r="5" fill="#6366F1" />
          <motion.circle variants={eyeVariants} cx="75" cy="45" r="5" fill="#6366F1" />
          
          {/* Mouth */}
          <motion.path 
            d="M50 55H70" 
            stroke="#6366F1" 
            strokeWidth="2" 
            strokeLinecap="round"
            animate={state === 'complete' ? { d: "M50 53C55 58 65 58 70 53" } : {}} 
          />
          
          {/* Body */}
          <rect x="30" y="70" width="60" height="50" rx="5" fill="#1F2937" stroke="#6366F1" strokeWidth="2" />
          
          {/* Control Panel */}
          <rect x="45" y="80" width="30" height="15" rx="2" fill="#374151" />
          <circle cx="50" cy="87" r="3" fill={state === 'thinking' ? "#8B5CF6" : state === 'working' ? "#EC4899" : state === 'complete' ? "#4ADE80" : "#6B7280"} />
          <circle cx="60" cy="87" r="3" fill={state === 'working' ? "#8B5CF6" : state === 'complete' ? "#4ADE80" : "#6B7280"} />
          <circle cx="70" cy="87" r="3" fill={state === 'complete' ? "#4ADE80" : "#6B7280"} />
          
          {/* Legs */}
          <rect x="40" y="120" width="10" height="25" rx="3" fill="#1F2937" stroke="#6366F1" strokeWidth="2" />
          <rect x="70" y="120" width="10" height="25" rx="3" fill="#1F2937" stroke="#6366F1" strokeWidth="2" />
          
          {/* Feet */}
          <rect x="35" y="145" width="20" height="5" rx="2" fill="#1F2937" stroke="#6366F1" strokeWidth="2" />
          <rect x="65" y="145" width="20" height="5" rx="2" fill="#1F2937" stroke="#6366F1" strokeWidth="2" />
          
          {/* Arms */}
          <rect x="15" y="75" width="15" height="8" rx="3" fill="#1F2937" stroke="#6366F1" strokeWidth="2" />
          <rect x="90" y="75" width="15" height="8" rx="3" fill="#1F2937" stroke="#6366F1" strokeWidth="2" />
        </motion.g>
      </motion.svg>
    </div>
  );
};

export default RobotCharacter; 