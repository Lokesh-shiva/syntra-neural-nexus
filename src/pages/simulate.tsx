import * as React from 'react';
import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Brain, FileText, Search, Send, Zap, Video, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RobotCharacter from '@/components/RobotCharacter';
import SimulationSteps from '@/components/SimulationSteps';
import ProgressBar from '@/components/ProgressBar';

interface SimulationStep {
  id: number;
  text: string;
  icon: React.ReactNode;
  durationMs: number;
}

const SimulatePage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [progress, setProgress] = useState(0);
  const [robotState, setRobotState] = useState<'idle' | 'thinking' | 'working' | 'complete'>('idle');

  const simulationSteps: SimulationStep[] = [
    {
      id: 1,
      text: "Analyzing your prompt...",
      icon: <Search className="text-blue-400" />,
      durationMs: 3000,
    },
    {
      id: 2,
      text: "Agents brainstorming...",
      icon: <Brain className="text-purple-400" />,
      durationMs: 4000,
    },
    {
      id: 3,
      text: "Generating video...",
      icon: <Video className="text-green-400" />,
      durationMs: 5000,
    },
    {
      id: 4,
      text: "Publishing to the web...",
      icon: <Send className="text-amber-400" />,
      durationMs: 2000,
    },
  ];

  const totalDuration = simulationSteps.reduce((acc, step) => acc + step.durationMs, 0);

  useEffect(() => {
    if (!isSimulating) return;

    let timeout: NodeJS.Timeout;
    let progressInterval: NodeJS.Timeout;
    let accumulatedTime = 0;
    
    // Function to update progress bar
    const updateProgress = () => {
      progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + 1;
        });
      }, totalDuration / 100);
    };

    // Start updating progress
    updateProgress();

    // Function to go through steps
    const runSimulation = async () => {
      // Set robot to thinking state
      setRobotState('thinking');
      
      for (let i = 0; i < simulationSteps.length; i++) {
        setCurrentStep(i);
        
        // When we start working on actual content generation (step 2), change robot state
        if (i === 2) {
          setRobotState('working');
        }
        
        await new Promise(resolve => {
          timeout = setTimeout(resolve, simulationSteps[i].durationMs);
        });
        accumulatedTime += simulationSteps[i].durationMs;
      }
      
      // Complete simulation
      setRobotState('complete');
      setIsComplete(true);
      setIsSimulating(false);
    };

    runSimulation();

    return () => {
      clearTimeout(timeout);
      clearInterval(progressInterval);
    };
  }, [isSimulating]);

  const startSimulation = () => {
    setIsSimulating(true);
    setIsComplete(false);
    setProgress(0);
    setCurrentStep(0);
    setRobotState('idle');
  };

  const resetSimulation = () => {
    setIsComplete(false);
    setProgress(0);
    setCurrentStep(0);
    setIsSimulating(false);
    setRobotState('idle');
  };

  return (
    <Layout>
      <div className="container mx-auto py-20 px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">AI Simulation</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience how Orbynet processes your prompts and generates content in real-time.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Robot Character */}
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <RobotCharacter state={robotState} />
          </motion.div>

          <div className="bg-syntra-dark/40 backdrop-blur-lg rounded-xl border border-white/10 shadow-xl p-8 mb-10">
            {!isSimulating && !isComplete ? (
              <motion.div 
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-syntra-purple to-syntra-blue rounded-full flex items-center justify-center mb-6">
                  <Zap size={40} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-6">Ready to Create</h2>
                <p className="text-gray-400 mb-8">
                  Click the button below to see how Orbynet's AI agents work together to transform your prompt into engaging content.
                </p>
                <Button 
                  onClick={startSimulation}
                  className="px-6 py-6 rounded-full text-white bg-gradient-to-r from-syntra-purple to-syntra-blue hover:from-syntra-blue hover:to-syntra-purple transition-all shadow-lg hover:shadow-xl"
                >
                  Start Simulation
                </Button>
              </motion.div>
            ) : (
              <>
                {/* Progress bar */}
                <ProgressBar progress={progress} />

                {/* Steps */}
                <SimulationSteps 
                  steps={simulationSteps} 
                  currentStep={currentStep} 
                  isSimulating={isSimulating} 
                  isComplete={isComplete} 
                />

                {/* Success state */}
                {isComplete && (
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <div className="w-20 h-20 mx-auto bg-gradient-to-r from-green-500 to-teal-400 rounded-full flex items-center justify-center mb-6">
                      <Check size={40} className="text-white" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Content Created Successfully!</h2>
                    <motion.div 
                      className="w-full h-64 bg-syntra-dark/60 rounded-xl border border-white/10 mb-6 overflow-hidden relative"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <img 
                        src="https://unsplash.it/800/600?image=1033" 
                        alt="Generated content preview" 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-left">
                        <h3 className="text-xl font-bold text-white mb-1">The Future of AI in Content Creation</h3>
                        <p className="text-sm text-gray-300">A glimpse into how artificial intelligence is revolutionizing the way we create and consume digital media.</p>
                        <div className="flex gap-2 mt-2">
                          <span className="text-xs px-2 py-1 rounded-full bg-syntra-dark/80 border border-syntra-purple/30 text-syntra-purple">#AIContent</span>
                          <span className="text-xs px-2 py-1 rounded-full bg-syntra-dark/80 border border-syntra-purple/30 text-syntra-purple">#DigitalCreation</span>
                        </div>
                      </div>
                      
                      {/* Celebration animation */}
                      <motion.div className="absolute inset-0 pointer-events-none">
                        {[...Array(30)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 rounded-full"
                            style={{ 
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                              backgroundColor: ['#8B5CF6', '#3B82F6', '#EC4899', '#10B981', '#F59E0B'][Math.floor(Math.random() * 5)]
                            }}
                            initial={{ scale: 0, opacity: 1 }}
                            animate={{ 
                              y: [0, -(20 + Math.random() * 80)],
                              x: [0, (Math.random() * 40) - 20],
                              scale: [0, 1 + Math.random()],
                              opacity: [1, 0]
                            }}
                            transition={{ 
                              duration: 1 + Math.random(),
                              delay: i * 0.05,
                              ease: "easeOut"
                            }}
                          />
                        ))}
                      </motion.div>
                    </motion.div>
                    <Button 
                      onClick={resetSimulation}
                      className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-all"
                    >
                      Start New Simulation
                    </Button>
                  </motion.div>
                )}
              </>
            )}
          </div>
          
          <motion.div 
            className="text-center text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <p>This is a simulation for demonstration purposes only. Actual processing times may vary based on content complexity.</p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default SimulatePage; 