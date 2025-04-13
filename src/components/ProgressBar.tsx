import * as React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="h-2 w-full bg-gray-800 rounded-full mb-8 overflow-hidden">
      <motion.div 
        className="h-full bg-gradient-to-r from-syntra-purple to-syntra-blue"
        initial={{ width: "0%" }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default ProgressBar; 