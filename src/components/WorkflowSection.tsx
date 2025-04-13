import React from 'react';
import WorkflowStep from '@/components/WorkflowStep';
import { PenTool, Brain, Share2 } from 'lucide-react';

const WorkflowSection = () => {
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

  return (
    <section id="workflow" className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text inline-block">
            Workflow
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience a seamless content creation process with our intuitive workflow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workflowSteps.map((step, index) => (
            <WorkflowStep key={index} title={step.title} description={step.description} icon={step.icon} step={step.step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection; 