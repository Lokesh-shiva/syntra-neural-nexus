import * as React from 'react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { motion } from 'framer-motion';

// NavLink Component
const NavLink: React.FC<{ to: string; label: string; isActive: boolean; onClick?: () => void }> = ({ to, label, isActive, onClick }) => (
  <Link 
    to={to} 
    className={`text-white/80 hover:text-white transition-colors relative ${isActive ? 'text-white' : ''}`}
    onClick={onClick}
  >
    {label}
    {isActive && (
      <motion.div 
        layoutId="navIndicator"
        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-syntra-purple to-syntra-blue" 
      />
    )}
  </Link>
);

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

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

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleAuthAction = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/login');
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
          <Link to="/" className="text-2xl font-bold gradient-text">Orbynet</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" label="Home" isActive={isActive('/')} onClick={() => setIsMenuOpen(false)} />
          <NavLink to="/about" label="About" isActive={isActive('/about')} onClick={() => setIsMenuOpen(false)} />
          <NavLink to="/agents" label="Agents" isActive={isActive('/agents')} onClick={() => setIsMenuOpen(false)} />
          <NavLink to="/workflow" label="Workflow" isActive={isActive('/workflow')} onClick={() => setIsMenuOpen(false)} />
          <NavLink to="/showcase" label="Showcase" isActive={isActive('/showcase')} onClick={() => setIsMenuOpen(false)} />
          <NavLink to="/simulate" label="Simulate" isActive={isActive('/simulate')} onClick={() => setIsMenuOpen(false)} />
          <NavLink to="/contact" label="Contact" isActive={isActive('/contact')} onClick={() => setIsMenuOpen(false)} />
          
          {user ? (
            <Button 
              onClick={() => navigate('/dashboard')} 
              variant="outline" 
              className="border-syntra-purple text-syntra-purple hover:bg-syntra-purple/20"
            >
              Dashboard
            </Button>
          ) : (
            <Button 
              onClick={() => navigate('/login')} 
              variant="outline" 
              className="border-syntra-purple text-syntra-purple hover:bg-syntra-purple/20"
            >
              Sign In
            </Button>
          )}
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
            <NavLink to="/" label="Home" isActive={isActive('/')} onClick={() => setIsMenuOpen(false)} />
            <NavLink to="/about" label="About" isActive={isActive('/about')} onClick={() => setIsMenuOpen(false)} />
            <NavLink to="/agents" label="Agents" isActive={isActive('/agents')} onClick={() => setIsMenuOpen(false)} />
            <NavLink to="/workflow" label="Workflow" isActive={isActive('/workflow')} onClick={() => setIsMenuOpen(false)} />
            <NavLink to="/showcase" label="Showcase" isActive={isActive('/showcase')} onClick={() => setIsMenuOpen(false)} />
            <NavLink to="/simulate" label="Simulate" isActive={isActive('/simulate')} onClick={() => setIsMenuOpen(false)} />
            <NavLink to="/contact" label="Contact" isActive={isActive('/contact')} onClick={() => setIsMenuOpen(false)} />
            
            {user ? (
              <>
                <Button 
                  onClick={() => {
                    navigate('/dashboard');
                    setIsMenuOpen(false);
                  }}
                  variant="outline" 
                  className="border-syntra-purple text-syntra-purple hover:bg-syntra-purple/20 w-full"
                >
                  Dashboard
                </Button>
                <Button 
                  onClick={() => {
                    signOut();
                    setIsMenuOpen(false);
                  }}
                  variant="ghost" 
                  className="w-full text-gray-400"
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <Button 
                onClick={() => {
                  handleAuthAction();
                  setIsMenuOpen(false);
                }}
                variant="outline" 
                className="border-syntra-purple text-syntra-purple hover:bg-syntra-purple/20 w-full"
              >
                Sign In
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
