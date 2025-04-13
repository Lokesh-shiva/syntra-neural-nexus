
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import SyntraLogo from '@/components/SyntraLogo';
import NeuralAnimation from '@/components/NeuralAnimation';
import FeatureCard from '@/components/FeatureCard';
import WorkflowStep from '@/components/WorkflowStep';
import ContentCard from '@/components/ContentCard';
import { Lightbulb, Wand2, ImageIcon, Video, Search, Brain, Lightbulb as LightbulbIdea, PenTool, Share2 } from 'lucide-react';

const Index = () => {
  const [email, setEmail] = useState('');
  const demoRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState<{ [key: string]: boolean }>({
    agents: false,
    workflow: false,
    showcase: false,
    contact: false
  });

  // Scroll to demo section
  const scrollToDemo = () => {
    demoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Please enter your email",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Thanks for joining our beta!",
      description: "We'll be in touch soon."
    });
    setEmail('');
  };

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setIsIntersecting(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = ['agents', 'workflow', 'showcase', 'contact'];
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  // Feature cards data
  const features = [
    {
      title: "Topic Generator",
      description: "AI-powered content ideation tailored to your industry and audience.",
      icon: Lightbulb
    },
    {
      title: "Prompt Enhancer",
      description: "Optimize your prompts for maximum AI effectiveness and relevance.",
      icon: Wand2
    },
    {
      title: "Image Creator",
      description: "Generate stunning visuals from text descriptions in seconds.",
      icon: ImageIcon
    },
    {
      title: "Video Synthesizer",
      description: "Transform concepts into engaging video content automatically.",
      icon: Video
    },
    {
      title: "SEO Poster",
      description: "Optimize and publish content across platforms with SEO enhancement.",
      icon: Search
    }
  ];

  // Workflow steps data
  const workflowSteps = [
    {
      title: "Input",
      description: "Start with a simple prompt or idea for your content needs.",
      icon: PenTool,
      step: 1
    },
    {
      title: "Agents Activate",
      description: "SYNTRA's intelligent agents collaborate to process your request.",
      icon: Brain,
      step: 2
    },
    {
      title: "Output Ready",
      description: "Receive polished, multi-format content ready for publishing.",
      icon: Share2,
      step: 3
    }
  ];

  // Showcase content data
  const showcaseContent = [
    {
      title: "The Future of AI in Marketing",
      description: "How intelligent agents are revolutionizing digital marketing strategies in 2025.",
      hashtags: ["#AIMarketing", "#FutureTech", "#DigitalStrategy"],
      imageSrc: "https://source.unsplash.com/random/600x400/?tech,ai,future"
    },
    {
      title: "Sustainable Living Guide",
      description: "Simple steps to reduce your carbon footprint while enhancing your lifestyle.",
      hashtags: ["#Sustainability", "#GreenLiving", "#EcoFriendly"],
      imageSrc: "https://source.unsplash.com/random/600x400/?nature,sustainability,green"
    },
    {
      title: "Remote Work Productivity Hacks",
      description: "Boost your efficiency and well-being while working from anywhere.",
      hashtags: ["#RemoteWork", "#Productivity", "#WFH"],
      imageSrc: "https://source.unsplash.com/random/600x400/?office,remote,laptop"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center py-20 px-4 overflow-hidden">
        <NeuralAnimation />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <SyntraLogo className="animate-float" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-glow">
            Think It. Prompt It. <span className="gradient-text">SYNTRA</span> Does the Rest.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            The next-gen AI automation platform that transforms ideas into polished social media content with intelligent agents.
          </p>
          
          <Button 
            size="lg" 
            onClick={scrollToDemo}
            className="bg-gradient-to-r from-syntra-purple to-syntra-blue hover:from-syntra-purple/90 hover:to-syntra-blue/90 text-white font-bold py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg animate-pulse-glow"
          >
            Launch the Engine
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-syntra-purple flex items-start justify-center p-1">
            <div className="w-1 h-3 bg-syntra-purple rounded-full animate-pulse-glow"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        id="agents" 
        ref={demoRef}
        className="py-20 px-4"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text inline-block">
              Intelligent Agents
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              SYNTRA's powerful AI agents work together to automate your content creation workflow.
            </p>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
            isIntersecting.agents ? 'animate-slide-up' : 'opacity-0'
          }`}>
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section 
        id="workflow" 
        className="py-20 px-4 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-syntra-dark to-syntra-dark/50 z-0"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text inline-block">
              How SYNTRA Works
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A seamless three-step process from idea to published content.
            </p>
          </div>
          
          <div className={`flex flex-col md:flex-row justify-between items-start ${
            isIntersecting.workflow ? 'animate-slide-up' : 'opacity-0'
          }`}>
            {workflowSteps.map((step, index) => (
              <WorkflowStep 
                key={index}
                title={step.title}
                description={step.description}
                icon={step.icon}
                step={step.step}
                isLast={index === workflowSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section 
        id="showcase" 
        className="py-20 px-4"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text inline-block">
              Showcase
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Examples of content automatically generated by SYNTRA.
            </p>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
            isIntersecting.showcase ? 'animate-slide-up' : 'opacity-0'
          }`}>
            {showcaseContent.map((content, index) => (
              <ContentCard 
                key={index}
                title={content.title}
                description={content.description}
                hashtags={content.hashtags}
                imageSrc={content.imageSrc}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        id="contact" 
        className="py-20 px-4 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-syntra-dark/90 to-transparent z-0"></div>
        
        <div className="container mx-auto max-w-3xl relative z-10">
          <div className={`glass-panel p-8 md:p-12 rounded-2xl glow-effect-purple ${
            isIntersecting.contact ? 'animate-slide-up' : 'opacity-0'
          }`}>
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Step Into the Future
              </h2>
              <p className="text-xl text-gray-300 max-w-xl mx-auto">
                Join the SYNTRA beta and revolutionize your content creation process.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-syntra-purple to-syntra-blue hover:from-syntra-purple/90 hover:to-syntra-blue/90 text-white font-semibold"
                >
                  Join the Beta
                </Button>
              </div>
            </form>
            
            <div className="mt-12 text-center">
              <p className="text-gray-400 text-sm">
                Already have access? <a href="#" className="text-syntra-purple hover:underline">Sign in</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-2xl font-bold gradient-text">SYNTRA</span>
            </div>
            
            <div className="text-gray-500 text-sm">
              © 2025 SYNTRA. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
