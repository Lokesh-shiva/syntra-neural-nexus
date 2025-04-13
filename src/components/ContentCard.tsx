
import React from 'react';
import { Button } from '@/components/ui/button';

interface ContentCardProps {
  title: string;
  description: string;
  hashtags: string[];
  imageSrc: string;
  index: number;
}

const ContentCard: React.FC<ContentCardProps> = ({ 
  title, 
  description, 
  hashtags,
  imageSrc,
  index
}) => {
  return (
    <div 
      className="glass-panel overflow-hidden group hover:neon-border transition-all duration-300"
      style={{ 
        animationDelay: `${index * 150}ms`,
      }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-syntra-dark/80 to-transparent z-10"></div>
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-glow transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-400 mb-4">
          {description}
        </p>
        
        {/* Hashtags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {hashtags.map((tag, i) => (
            <span 
              key={i} 
              className="text-sm bg-syntra-purple/20 text-syntra-purple px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-syntra-blue hover:text-syntra-blue hover:bg-syntra-blue/10"
            >
              View
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-syntra-purple hover:text-syntra-purple hover:bg-syntra-purple/10"
            >
              Share
            </Button>
          </div>
          <div className="text-gray-500 text-sm">AI Generated</div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
