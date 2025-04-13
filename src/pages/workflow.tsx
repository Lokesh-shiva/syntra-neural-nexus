import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import anime from 'animejs';
import { MessageSquare, Brain, FileText, Search, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const workflowSteps: WorkflowStep[] = [
  {
    id: '1',
    title: 'User Prompts',
    description: 'Start with a simple prompt or request. Tell Orbynet what kind of content you need, for which platform, and your target audience.',
    icon: <MessageSquare size={32} />,
    color: 'from-blue-400 to-cyan-500'
  },
  {
    id: '2',
    title: 'Agents Activate',
    description: 'Our specialized AI agents collaborate to analyze your request, gather context, and build the appropriate response strategy.',
    icon: <Brain size={32} />,
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: '3',
    title: 'Content Generated',
    description: 'Orbynet crafts high-quality content tailored to your specific needs, maintaining your brand voice and style guidelines.',
    icon: <FileText size={32} />,
    color: 'from-green-400 to-teal-500'
  },
  {
    id: '4',
    title: 'Optimized for SEO',
    description: 'Content is automatically enhanced with relevant keywords, meta descriptions, and SEO best practices.',
    icon: <Search size={32} />,
    color: 'from-amber-500 to-orange-600'
  },
  {
    id: '5',
    title: 'Ready to Publish',
    description: 'Review the polished content, make any final adjustments, and publish directly to your chosen platforms.',
    icon: <Send size={32} />,
    color: 'from-red-500 to-rose-600'
  }
];

const WorkflowPage = () => {
  useEffect(() => {
    // Animate steps when component mounts
    anime({
      targets: '.workflow-step',
      opacity: [0, 1],
      translateY: [40, 0],
      delay: anime.stagger(120),
      easing: 'easeOutQuart'
    });

    // Animate connecting lines
    anime({
      targets: '.connector',
      scaleX: [0, 1],
      opacity: [0, 0.7],
      delay: anime.stagger(300, {start: 600}),
      easing: 'easeOutExpo'
    });

    // Pulse animation for nodes
    anime({
      targets: '.node-pulse',
      scale: [1, 1.15, 1],
      opacity: [0.8, 1, 0.8],
      easing: 'easeInOutQuad',
      duration: 2000,
      loop: true,
      delay: anime.stagger(400)
    });
  }, []);

  return (
    <Layout>
      <div className="container mx-auto py-20 px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold gradient-text mb-4">How Orbynet Works</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our intelligent workflow combines specialized AI agents to transform your basic prompts
            into optimized, ready-to-publish content across platforms.
          </p>
        </div>

        {/* Desktop Workflow (horizontal) */}
        <div className="hidden md:flex flex-col items-center">
          <div className="relative flex w-full justify-between max-w-5xl mx-auto mb-20">
            {workflowSteps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="workflow-step relative z-10 flex flex-col items-center text-center w-40">
                  <div className={`node w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r ${step.color} relative`}>
                    <div className="node-pulse absolute inset-0 rounded-full bg-gradient-to-r animate-ping"></div>
                    <div className="text-white">{step.icon}</div>
                  </div>
                  <h3 className="mt-4 font-bold text-lg">{step.title}</h3>
                </div>
                
                {/* Connecting line */}
                {index < workflowSteps.length - 1 && (
                  <div className="connector h-[2px] bg-gradient-to-r from-syntra-purple to-syntra-blue flex-grow self-center mx-2 opacity-70 origin-left"></div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Step descriptions */}
          <div className="grid grid-cols-5 gap-6 max-w-6xl mx-auto">
            {workflowSteps.map((step) => (
              <div key={step.id} className="workflow-step text-center px-2">
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Workflow (vertical) */}
        <div className="md:hidden">
          <div className="relative flex flex-col items-center">
            {workflowSteps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="workflow-step flex items-start mb-6 w-full">
                  <div className="relative">
                    <div className={`node w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-r ${step.color}`}>
                      <div className="node-pulse absolute inset-0 rounded-full bg-gradient-to-r animate-ping"></div>
                      <div className="text-white">{step.icon}</div>
                    </div>
                    
                    {/* Vertical connector */}
                    {index < workflowSteps.length - 1 && (
                      <div className="connector w-[2px] h-16 bg-gradient-to-b from-syntra-purple to-syntra-blue absolute left-1/2 -translate-x-1/2 top-14 opacity-70"></div>
                    )}
                  </div>
                  
                  <div className="ml-6 flex-1">
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-lg text-gray-400 mb-8">
            Orbynet's workflow is designed to be efficient and intelligent, saving you time 
            while producing high-quality content that drives engagement.
          </p>
          <Link to="/simulate">
            <Button 
              size="lg"
              className="px-6 py-3 rounded-full text-white bg-gradient-to-r from-syntra-purple to-syntra-blue hover:from-syntra-blue hover:to-syntra-purple transition-all shadow-lg hover:shadow-xl"
            >
              Try Orbynet's Workflow Today
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default WorkflowPage; 