
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon: Icon,
  index 
}) => {
  return (
    <div 
      className="relative glass-panel p-6 h-full group transition-all duration-300 hover:-translate-y-2 overflow-hidden"
      style={{ 
        animationDelay: `${index * 150}ms`,
      }}
    >
      {/* Background glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-br from-syntra-purple/50 to-syntra-blue/30 opacity-0 group-hover:opacity-100 rounded-lg blur-sm transition-opacity duration-300"></div>
      
      <div className="relative h-full flex flex-col">
        {/* Icon */}
        <div className="mb-4 text-syntra-purple group-hover:text-white transition-colors duration-300">
          <Icon size={32} className="animate-pulse-glow" strokeWidth={1.5} />
        </div>
        
        {/* Content */}
        <div>
          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-glow transition-all duration-300">
            {title}
          </h3>
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
