
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WorkflowStepProps {
  title: string;
  description: string;
  icon: LucideIcon;
  step: number;
  isLast?: boolean;
}

const WorkflowStep: React.FC<WorkflowStepProps> = ({ 
  title, 
  description, 
  icon: Icon,
  step,
  isLast = false
}) => {
  return (
    <div className="relative flex flex-col items-center text-center px-4 md:px-8">
      {/* Step number */}
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-syntra-purple to-syntra-blue flex items-center justify-center text-white font-bold text-xl mb-4 z-10 relative animate-pulse-glow">
        {step}
      </div>
      
      {/* Icon */}
      <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center mb-4 z-10">
        <Icon size={32} className="text-syntra-purple" />
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 max-w-xs">{description}</p>
      
      {/* Connecting line */}
      {!isLast && (
        <div className={cn(
          "absolute top-6 left-[calc(50%+2rem)] right-0 h-0.5 bg-gradient-to-r from-syntra-purple to-syntra-blue",
          "hidden md:block"
        )}></div>
      )}
    </div>
  );
};

export default WorkflowStep;
