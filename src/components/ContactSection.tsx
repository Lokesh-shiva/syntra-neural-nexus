import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const [email, setEmail] = useState('');

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

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto max-w-3xl">
        <div className="glass-panel p-8 md:p-12 rounded-2xl glow-effect-purple">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text inline-block">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join our beta program and be the first to experience SYNTRA's capabilities.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 p-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-syntra-purple"
            />
            <Button type="submit" className="bg-syntra-purple text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Join Beta
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 