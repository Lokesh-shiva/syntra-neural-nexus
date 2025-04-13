import * as React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SocialCampaignMockup, EcommerceMockup, ContentStrategyMockup } from './ShowcaseMockups';

const ShowcaseSection = () => {
  const showcaseContent = [
    {
      title: "AI-Powered Social Media Campaign",
      description: "Generated and optimized content that increased engagement by 300%.",
      hashtags: ["#AIMarketing", "#SocialMedia", "#Growth"],
      mockup: <SocialCampaignMockup />
    },
    {
      title: "E-commerce Product Launch",
      description: "Automated product descriptions and visuals for 1000+ SKUs.",
      hashtags: ["#Ecommerce", "#ProductLaunch", "#Automation"],
      mockup: <EcommerceMockup />
    },
    {
      title: "Content Strategy Optimization",
      description: "AI-driven content calendar that boosted organic traffic by 250%.",
      hashtags: ["#ContentStrategy", "#SEO", "#Growth"],
      mockup: <ContentStrategyMockup />
    }
  ];

  return (
    <section id="showcase" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text inline-block">
            Showcase
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore how Orbynet is transforming content creation across industries.
          </p>
        </div>

        {/* Device Showcase */}
        <div className="relative h-[600px] mb-20 hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-r from-syntra-purple/20 to-syntra-blue/20 rounded-3xl backdrop-blur-3xl"></div>
          
          {/* Laptop */}
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-[800px] h-[500px] bg-gray-900 rounded-2xl p-4 shadow-2xl">
              <div className="w-full h-full bg-syntra-dark rounded-lg overflow-hidden">
                {showcaseContent[0].mockup}
              </div>
              <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-32 h-4 bg-gray-800 rounded-b-xl"></div>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            className="absolute right-[15%] top-[20%]"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-[250px] h-[500px] bg-gray-900 rounded-[40px] p-3 shadow-2xl rotate-[-5deg]">
              <div className="w-full h-full bg-syntra-dark rounded-[32px] overflow-hidden">
                {showcaseContent[1].mockup}
              </div>
              <div className="absolute top-[20px] left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full"></div>
            </div>
          </motion.div>

          {/* Tablet */}
          <motion.div
            className="absolute left-[15%] top-[25%]"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="w-[350px] h-[470px] bg-gray-900 rounded-[24px] p-4 shadow-2xl rotate-[5deg]">
              <div className="w-full h-full bg-syntra-dark rounded-lg overflow-hidden">
                {showcaseContent[2].mockup}
              </div>
              <div className="absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-2 h-20 bg-gray-800 rounded-r-lg"></div>
            </div>
          </motion.div>
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseContent.map((content, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="showcase-card backdrop-blur-lg rounded-xl border border-white/10 bg-syntra-dark/40 overflow-hidden"
            >
              <div className="relative h-48">
                <div className="w-full h-full">
                  {content.mockup}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-syntra-dark to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{content.title}</h3>
                <p className="text-gray-400 mb-4">{content.description}</p>
                <div className="flex flex-wrap gap-2">
                  {content.hashtags.map((tag, i) => (
                    <span 
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-syntra-purple/20 text-syntra-purple border border-syntra-purple/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Ready to transform your content creation process with AI?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/simulate">
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-syntra-purple to-syntra-blue hover:from-syntra-purple/90 hover:to-syntra-blue/90"
              >
                Try Orbynet's Workflow
              </Button>
            </Link>
            <Link to="/simulate">
              <Button 
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-syntra-purple text-syntra-purple hover:bg-syntra-purple/20"
              >
                Start Creating
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection; 