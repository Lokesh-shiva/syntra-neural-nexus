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
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import WorkflowSection from '@/components/WorkflowSection';
import ShowcaseSection from '@/components/ShowcaseSection';
import ContactSection from '@/components/ContactSection';

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
      description: "Orbynet's intelligent agents collaborate to process your request.",
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
      <HeroSection scrollToDemo={scrollToDemo} />

      {/* Features Section */}
      <FeaturesSection />

      {/* Workflow Section */}
      <WorkflowSection />

      {/* Showcase Section */}
      <ShowcaseSection />

      {/* CTA Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-2xl font-bold gradient-text">Orbynet</span>
            </div>
            
            <div className="text-gray-500 text-sm">
              © 2025 Orbynet. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
