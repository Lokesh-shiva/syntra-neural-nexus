import React from 'react';
import FeatureCard from '@/components/FeatureCard';
import { Lightbulb, Wand2, ImageIcon, Video, Search } from 'lucide-react';

const FeaturesSection = () => {
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

  return (
    <section id="agents" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text inline-block">
            Intelligent Agents
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            SYNTRA's powerful AI agents work together to automate your content creation workflow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 