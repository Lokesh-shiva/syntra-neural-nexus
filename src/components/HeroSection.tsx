import React from 'react';
import { Button } from '@/components/ui/button';
import SyntraLogo from '@/components/SyntraLogo';
import NeuralAnimation from '@/components/NeuralAnimation';
import { Link } from 'react-router-dom';

const HeroSection = ({ scrollToDemo }: { scrollToDemo: () => void }) => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center py-20 px-4 overflow-hidden">
      <NeuralAnimation />
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex justify-center mb-8">
          <SyntraLogo className="animate-float" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-glow">
          Think It. Prompt It. <span className="gradient-text">Orbynet</span> Does the Rest.
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
          The next-gen AI automation platform that transforms ideas into polished social media content with intelligent agents.
        </p>
        <Link to="/simulate">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-syntra-purple to-syntra-blue hover:from-syntra-purple/90 hover:to-syntra-blue/90 text-white font-bold py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg animate-pulse-glow"
          >
            Launch the Engine
          </Button>
        </Link>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-syntra-purple flex items-start justify-center p-1">
          <div className="w-1 h-3 bg-syntra-purple rounded-full animate-pulse-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 