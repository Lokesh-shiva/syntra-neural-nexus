import React from 'react';
import Layout from '@/components/Layout';
import anime from 'animejs';
import { Wand, MessageSquare, Pen, Search, Lightbulb, Database, Share2, PieChart, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface Agent {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  background: string;
}

const agents: Agent[] = [
  {
    id: '1',
    name: 'Topic Generator',
    description: 'Analyzes trends and generates engaging content ideas tailored to your audience and industry.',
    icon: <Lightbulb size={36} />,
    color: 'from-pink-500 to-purple-600',
    background: 'bg-gradient-to-br from-pink-500/20 to-purple-600/20'
  },
  {
    id: '2',
    name: 'Prompt Enhancer',
    description: 'Takes basic prompts and enriches them with relevant context, keywords, and structure for better results.',
    icon: <Wand size={36} />,
    color: 'from-blue-400 to-cyan-500',
    background: 'bg-gradient-to-br from-blue-400/20 to-cyan-500/20'
  },
  {
    id: '3',
    name: 'Content Assistant',
    description: 'Crafts engaging, on-brand copy and content optimized for your target platforms and audience.',
    icon: <Pen size={36} />,
    color: 'from-green-400 to-teal-500',
    background: 'bg-gradient-to-br from-green-400/20 to-teal-500/20'
  },
  {
    id: '4',
    name: 'Chat Intelligence',
    description: 'Powers conversational experiences with context-aware responses that maintain brand voice and accuracy.',
    icon: <MessageSquare size={36} />,
    color: 'from-purple-500 to-indigo-600',
    background: 'bg-gradient-to-br from-purple-500/20 to-indigo-600/20'
  },
  {
    id: '5',
    name: 'SEO Optimizer',
    description: 'Automatically enhances content with SEO best practices, relevant keywords, and metadata.',
    icon: <Search size={36} />,
    color: 'from-amber-500 to-orange-600',
    background: 'bg-gradient-to-br from-amber-500/20 to-orange-600/20'
  },
  {
    id: '6',
    name: 'Analytics Agent',
    description: 'Tracks performance metrics and provides insights to optimize your content strategy.',
    icon: <PieChart size={36} />,
    color: 'from-red-500 to-rose-600',
    background: 'bg-gradient-to-br from-red-500/20 to-rose-600/20'
  },
  {
    id: '7',
    name: 'Knowledge Base',
    description: 'Maintains a centralized repository of information to ensure content accuracy and consistency.',
    icon: <Database size={36} />,
    color: 'from-violet-500 to-fuchsia-600',
    background: 'bg-gradient-to-br from-violet-500/20 to-fuchsia-600/20'
  },
  {
    id: '8',
    name: 'Distribution Bot',
    description: 'Automates publishing and sharing content across multiple platforms with optimal timing.',
    icon: <Share2 size={36} />,
    color: 'from-emerald-500 to-green-600',
    background: 'bg-gradient-to-br from-emerald-500/20 to-green-600/20'
  },
  {
    id: '9',
    name: 'Scheduling Manager',
    description: 'Coordinates content calendar and optimizes posting times for maximum engagement.',
    icon: <Clock size={36} />,
    color: 'from-sky-500 to-blue-600',
    background: 'bg-gradient-to-br from-sky-500/20 to-blue-600/20'
  }
];

const AgentsPage = () => {
  React.useEffect(() => {
    // Animate elements when component mounts
    anime({
      targets: '.agent-card',
      opacity: [0, 1],
      translateY: [20, 0],
      delay: anime.stagger(100),
      easing: 'easeOutExpo'
    });
  }, []);

  return (
    <Layout>
      <div className="container mx-auto py-20 px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold gradient-text mb-4">Intelligent Agents</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our suite of specialized AI agents work together to power your content creation workflow.
            Each agent is designed to handle specific tasks within the content pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <div 
              key={agent.id}
              className="agent-card backdrop-blur-lg rounded-xl border border-white/10 bg-syntra-dark/40 shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:border-white/25 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-2 w-full bg-gradient-to-r ${agent.color}`}></div>
              <div className="p-6 relative">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 flex items-center justify-center rounded-full ${agent.background} border border-white/10 mr-4 group-hover:border-white/30 transition-all`}>
                    <div className={`text-transparent bg-clip-text bg-gradient-to-r ${agent.color}`}>
                      {agent.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold">{agent.name}</h3>
                </div>
                <p className="text-gray-400">{agent.description}</p>
              </div>
              <div className={`absolute inset-0 bg-gradient-to-r ${agent.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-400 mb-8">
            Ready to experience the power of AI-driven content creation?
          </p>
          <div className="flex justify-center">
            <Link to="/simulate">
              <Button 
                className="w-full sm:w-auto bg-gradient-to-r from-syntra-purple to-syntra-blue hover:from-syntra-purple/90 hover:to-syntra-blue/90"
              >
                Start Creating
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AgentsPage; 