import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardHint: React.FC = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Auto-dismiss after 8 seconds
      const dismissTimer = setTimeout(() => {
        setIsVisible(false);
      }, 8000);
      return () => clearTimeout(dismissTimer);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[9999]">
      <div className="bg-syntra-dark border border-syntra-purple/20 rounded-lg shadow-lg p-4 min-w-[300px] max-w-[90vw] relative">
        <button 
          className="absolute top-2 right-2 text-gray-400 hover:text-white text-xl"
          onClick={() => setIsVisible(false)}
        >
          ×
        </button>
        <div className="flex flex-col gap-2 pr-6">
          <p className="font-medium">💡 Quick Tip</p>
          <p>
            Access the dashboard by visiting{' '}
            <span 
              className="text-syntra-purple cursor-pointer hover:underline" 
              onClick={() => navigate('/dashboard')}
            >
              /dashboard
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHint; 