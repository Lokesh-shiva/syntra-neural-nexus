import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Brain, Globe, Zap } from 'lucide-react';

const AboutPage = () => {
  return (
    <Layout>
      <motion.div 
        className="container mx-auto py-20 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">About Orbynet</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Think It. Prompt It. Orbynet Does the Rest.
          </p>
        </div>

        <div className="bg-syntra-dark/40 backdrop-blur-lg rounded-xl border border-white/10 shadow-xl p-8 mb-16 max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Our Mission
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-300 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Orbynet was founded with a singular vision: to democratize content creation by harnessing the power of artificial intelligence. 
            We believe that everyone deserves access to tools that can transform their ideas into compelling, professional-grade content—regardless 
            of their technical expertise or creative background.
          </motion.p>
          
          <motion.p 
            className="text-lg text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Our AI Content Nexus represents the culmination of years of research and development in neural networks, 
            natural language processing, and multimedia generation. By bringing these technologies together in an 
            intuitive platform, we're empowering creators, marketers, educators, and businesses to produce 
            high-quality content faster and more efficiently than ever before.
          </motion.p>
        </div>

        <div className="mb-16">
          <motion.h2 
            className="text-3xl font-bold mb-10 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            What Makes Orbynet Different
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-syntra-dark/40 backdrop-blur-lg rounded-xl border border-white/10 shadow-xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center mx-auto mb-4">
                <Brain size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Intelligent Agents</h3>
              <p className="text-gray-400">
                Our specialized AI agents work collaboratively to understand context, generate ideas, and produce content tailored to your needs.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-syntra-dark/40 backdrop-blur-lg rounded-xl border border-white/10 shadow-xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-400 flex items-center justify-center mx-auto mb-4">
                <Zap size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Cutting-Edge Technology</h3>
              <p className="text-gray-400">
                We leverage the latest advancements in neural networks and generative AI to create content that's indistinguishable from human-made.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-syntra-dark/40 backdrop-blur-lg rounded-xl border border-white/10 shadow-xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-green-400 flex items-center justify-center mx-auto mb-4">
                <Globe size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Universal Accessibility</h3>
              <p className="text-gray-400">
                Our intuitive interface makes advanced AI tools accessible to everyone, not just technical experts or professional creators.
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
        >
          <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
            At Orbynet, we're just getting started. Our team of researchers and engineers is continuously pushing the boundaries 
            of what's possible with AI-powered content creation. Join us as we build the future of digital expression.
          </p>
          <a 
            href="/agents"
            className="px-6 py-3 rounded-full text-white bg-gradient-to-r from-syntra-purple to-syntra-blue hover:from-syntra-blue hover:to-syntra-purple transition-all shadow-lg hover:shadow-xl"
          >
            Explore Our Agents
          </a>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default AboutPage; 