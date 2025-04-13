
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-syntra-dark/80 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold gradient-text">SYNTRA</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')} 
            className="text-white/80 hover:text-white transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('agents')} 
            className="text-white/80 hover:text-white transition-colors"
          >
            Agents
          </button>
          <button 
            onClick={() => scrollToSection('workflow')} 
            className="text-white/80 hover:text-white transition-colors"
          >
            Workflow
          </button>
          <button 
            onClick={() => scrollToSection('showcase')} 
            className="text-white/80 hover:text-white transition-colors"
          >
            Showcase
          </button>
          <Button 
            onClick={() => scrollToSection('contact')} 
            variant="outline" 
            className="border-syntra-purple text-syntra-purple hover:bg-syntra-purple/20"
          >
            Join Beta
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            className="text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-syntra-dark/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-white/80 hover:text-white transition-colors py-2 text-left"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('agents')} 
              className="text-white/80 hover:text-white transition-colors py-2 text-left"
            >
              Agents
            </button>
            <button 
              onClick={() => scrollToSection('workflow')} 
              className="text-white/80 hover:text-white transition-colors py-2 text-left"
            >
              Workflow
            </button>
            <button 
              onClick={() => scrollToSection('showcase')} 
              className="text-white/80 hover:text-white transition-colors py-2 text-left"
            >
              Showcase
            </button>
            <Button 
              onClick={() => scrollToSection('contact')} 
              variant="outline" 
              className="border-syntra-purple text-syntra-purple hover:bg-syntra-purple/20 w-full"
            >
              Join Beta
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
