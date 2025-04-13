import * as React from 'react';
import { motion } from 'framer-motion';

interface SimulationStep {
  id: number;
  text: string;
  icon: React.ReactNode;
  durationMs: number;
}

interface SimulationStepsProps {
  steps: SimulationStep[];
  currentStep: number;
  isSimulating: boolean;
  isComplete: boolean;
}

const SimulationSteps: React.FC<SimulationStepsProps> = ({ steps, currentStep, isSimulating, isComplete }) => {
  return (
    <div className="space-y-6 mb-8">
      {steps.map((step: SimulationStep, index: number) => (
        <motion.div 
          key={step.id}
          className={`flex items-center p-4 rounded-lg ${index === currentStep && isSimulating ? 'bg-syntra-dark/60 border border-white/10' : ''}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ 
            opacity: index <= currentStep || isComplete ? 1 : 0.4,
            x: 0 
          }}
          transition={{ delay: index * 0.2 }}
        >
          <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4
            ${index < currentStep || isComplete ? 'bg-green-500/20 text-green-400' : 
              index === currentStep && isSimulating ? 'bg-syntra-purple/20 text-syntra-purple animate-pulse' : 
              'bg-gray-800/50 text-gray-400'}`
          }>
            {step.icon}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold">{step.text}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SimulationSteps; 