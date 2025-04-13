import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import anime from 'animejs/lib/anime.es.js';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ExternalLink, Heart, MessageCircle, Share2 } from 'lucide-react';

interface ShowcaseItem {
  id: string;
  title: string;
  description: string;
  image: string;
  platform: string;
  hashtags: string[];
  stats: {
    likes: number;
    comments: number;
    shares: number;
  };
  category: 'social' | 'blog' | 'marketing';
}

// Enhanced showcase data
const showcaseItems: ShowcaseItem[] = [
  {
    id: '1',
    title: 'The Future of Sustainable Tech',
    description: 'Exploring how technology is evolving to address our planet\'s most pressing environmental challenges. From renewable energy innovations to sustainable computing.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    platform: 'LinkedIn',
    hashtags: ['#SustainableTech', '#GreenInnovation', '#FutureTech'],
    stats: {
      likes: 2453,
      comments: 184,
      shares: 672
    },
    category: 'blog'
  },
  {
    id: '2',
    title: '10 AI Tools That Are Changing Creative Work',
    description: 'Discover the cutting-edge AI tools that are transforming how designers, writers, and artists approach their craft in 2025.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop',
    platform: 'Medium',
    hashtags: ['#AITools', '#CreativeTech', '#DesignInnovation'],
    stats: {
      likes: 1872,
      comments: 243,
      shares: 529
    },
    category: 'blog'
  },
  {
    id: '3',
    title: 'How Neural Networks Are Revolutionizing Healthcare',
    description: 'An in-depth look at how AI-powered diagnostic tools are improving patient outcomes and changing the medical landscape forever.',
    image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=2070&auto=format&fit=crop',
    platform: 'Twitter',
    hashtags: ['#AIHealthcare', '#MedicalInnovation', '#TechForGood'],
    stats: {
      likes: 3241,
      comments: 428,
      shares: 892
    },
    category: 'social'
  },
  {
    id: '4',
    title: 'The Psychology Behind Effective UX Design',
    description: 'Understanding the cognitive principles that make interfaces intuitive and engaging for users across different platforms.',
    image: 'https://images.unsplash.com/photo-1553484771-047a44eee27a?q=80&w=2070&auto=format&fit=crop',
    platform: 'Instagram',
    hashtags: ['#UXDesign', '#DigitalPsychology', '#UserExperience'],
    stats: {
      likes: 1567,
      comments: 134,
      shares: 289
    },
    category: 'marketing'
  }
];

const ShowcasePage = () => {
  const [filter, setFilter] = useState<'all' | 'social' | 'blog' | 'marketing'>('all');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    // Animate header elements
    anime({
      targets: '.showcase-header > *',
      opacity: [0, 1],
      translateY: [20, 0],
      delay: anime.stagger(200),
      easing: 'easeOutExpo'
    });

    // Animate filter buttons
    anime({
      targets: '.filter-button',
      scale: [0.9, 1],
      opacity: [0, 1],
      delay: anime.stagger(100, { start: 400 }),
      easing: 'easeOutElastic(1, .6)'
    });
  }, []);

  const filteredItems = filter === 'all' 
    ? showcaseItems 
    : showcaseItems.filter(item => item.category === filter);

  const formatNumber = (num: number) => {
    return num >= 1000 ? `${(num / 1000).toFixed(1)}k` : num;
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-syntra-dark via-syntra-dark/95 to-syntra-dark">
        <div className="container mx-auto py-20 px-4">
          <div className="showcase-header text-center mb-16 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-syntra-purple via-syntra-blue to-syntra-purple animate-gradient">
              Content Showcase
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how Orbynet's AI transforms ideas into engaging content across platforms.
              Each piece is crafted for maximum impact and engagement.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'social', 'blog', 'marketing'].map((category) => (
              <Button
                key={category}
                onClick={() => setFilter(category as any)}
                className={`filter-button capitalize ${
                  filter === category 
                    ? 'bg-gradient-to-r from-syntra-purple to-syntra-blue'
                    : 'bg-syntra-dark/50 hover:bg-syntra-dark/70'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="showcase-card group"
                onHoverStart={() => setHoveredCard(item.id)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-syntra-dark/40 backdrop-blur-lg shadow-xl transition-all duration-500 hover:border-white/25">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-syntra-dark via-syntra-dark/50 to-transparent opacity-90"></div>
                    
                    {/* Platform Badge */}
                    <Badge 
                      className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm border-none"
                      variant="outline"
                    >
                      {item.platform}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold group-hover:text-syntra-blue transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">
                      {item.description}
                    </p>
                    
                    {/* Hashtags */}
                    <div className="flex flex-wrap gap-2">
                      {item.hashtags.map((tag, i) => (
                        <span 
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-syntra-dark border border-syntra-purple/30 text-syntra-purple"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Engagement Stats */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex gap-6">
                        <div className="flex items-center gap-2">
                          <Heart className="w-4 h-4 text-pink-500" />
                          <span className="text-sm text-gray-400">{formatNumber(item.stats.likes)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MessageCircle className="w-4 h-4 text-blue-500" />
                          <span className="text-sm text-gray-400">{formatNumber(item.stats.comments)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Share2 className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-400">{formatNumber(item.stats.shares)}</span>
                        </div>
                      </div>
                      
                      <Button 
                        size="sm"
                        className="bg-gradient-to-r from-syntra-purple to-syntra-blue opacity-80 hover:opacity-100"
                      >
                        View <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div 
            className="mt-20 text-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-xl text-gray-400">
              Ready to create content that captivates and converts?
            </p>
            <Link to="/simulate">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-syntra-purple to-syntra-blue hover:from-syntra-blue hover:to-syntra-purple transform hover:scale-105 transition-all duration-300"
              >
                Start Creating Now <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default ShowcasePage; 