import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import Layout from '@/components/Layout';
import ProtectedRoute from '@/components/ProtectedRoute';
import anime from 'animejs/lib/anime.es.js';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  BarChart3,
  Calendar,
  Edit3,
  Eye,
  FileText,
  Image as ImageIcon,
  LayoutDashboard,
  MessageCircle,
  MoreVertical,
  Play,
  Plus,
  Share2,
  Trash2,
  TrendingUp,
  Video
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ContentItem {
  id: string;
  title: string;
  type: 'post' | 'video' | 'image';
  platform: string;
  date: string;
  status: 'published' | 'draft' | 'scheduled';
  thumbnail: string;
  stats: {
    views: number;
    likes: number;
    comments: number;
    shares: number;
  };
}

// Enhanced mock content data
const mockContent: ContentItem[] = [
  {
    id: '1',
    title: 'How AI is Revolutionizing Marketing',
    type: 'post',
    platform: 'LinkedIn',
    date: '2023-09-15',
    status: 'published',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    stats: {
      views: 2547,
      likes: 423,
      comments: 89,
      shares: 156
    }
  },
  {
    id: '2',
    title: '10 Ways to Boost Your Productivity with AI',
    type: 'video',
    platform: 'YouTube',
    date: '2023-09-20',
    status: 'scheduled',
    thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop',
    stats: {
      views: 1893,
      likes: 342,
      comments: 67,
      shares: 89
    }
  },
  {
    id: '3',
    title: 'The Future of AI in Healthcare',
    type: 'post',
    platform: 'Medium',
    date: '2023-09-10',
    status: 'published',
    thumbnail: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=2070&auto=format&fit=crop',
    stats: {
      views: 3241,
      likes: 567,
      comments: 123,
      shares: 234
    }
  },
  {
    id: '4',
    title: 'AI Tools for Content Creation',
    type: 'image',
    platform: 'Instagram',
    date: '2023-09-05',
    status: 'draft',
    thumbnail: 'https://images.unsplash.com/photo-1553484771-047a44eee27a?q=80&w=2070&auto=format&fit=crop',
    stats: {
      views: 1567,
      likes: 289,
      comments: 45,
      shares: 78
    }
  }
];

// Enhanced stats data with trends
const mockStats = {
  totalPosts: {
    value: 28,
    trend: '+12%',
    isPositive: true
  },
  totalViews: {
    value: 14582,
    trend: '+23%',
    isPositive: true
  },
  engagementRate: {
    value: '4.7%',
    trend: '-2%',
    isPositive: false
  },
  lastRun: {
    value: '2 hours ago',
    trend: 'On schedule',
    isPositive: true
  }
};

const DashboardPage = () => {
  const { user } = useAuth();
  const [activeFilter, setActiveFilter] = useState<'all' | 'published' | 'draft' | 'scheduled'>('all');
  const [view, setView] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    // Animate elements when component mounts
    anime({
      targets: '.dashboard-element',
      opacity: [0, 1],
      translateY: [20, 0],
      delay: anime.stagger(100),
      easing: 'easeOutExpo'
    });

    anime({
      targets: '.stat-item',
      scale: [0.9, 1],
      opacity: [0, 1],
      delay: anime.stagger(150, {start: 300}),
      easing: 'easeOutElastic(1, .5)'
    });
  }, []);

  const formatNumber = (num: number) => {
    return num >= 1000 ? `${(num / 1000).toFixed(1)}k` : num;
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'post':
        return <FileText className="w-4 h-4" />;
      case 'video':
        return <Video className="w-4 h-4" />;
      case 'image':
        return <ImageIcon className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const filteredContent = activeFilter === 'all' 
    ? mockContent 
    : mockContent.filter(item => item.status === activeFilter);

  return (
    <ProtectedRoute>
      <Layout>
        <div className="min-h-screen bg-gradient-to-b from-syntra-dark via-syntra-dark/95 to-syntra-dark">
          <div className="container mx-auto py-20 px-4">
            {/* Header Section */}
            <div className="dashboard-element flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div className="mb-6 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-syntra-purple via-syntra-blue to-syntra-purple animate-gradient mb-2">
                  Welcome back, {user?.name}
                </h1>
                <p className="text-xl text-gray-400">Here's what's happening with your content</p>
              </div>
              <Button 
                className="bg-gradient-to-r from-syntra-purple to-syntra-blue hover:from-syntra-blue hover:to-syntra-purple"
              >
                <Plus className="w-5 h-5 mr-2" /> Create New Content
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <motion.div 
                className="stat-item relative p-6 backdrop-blur-lg rounded-xl border border-syntra-purple/20 bg-syntra-dark/40 shadow-lg overflow-hidden group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-syntra-purple/10 rounded-full blur-2xl transform translate-x-16 -translate-y-8"></div>
                <div className="relative">
                  <p className="text-gray-400 mb-1 flex items-center">
                    <FileText className="w-4 h-4 mr-2" /> Total Posts
                  </p>
                  <h3 className="text-3xl font-bold text-white mb-2">{mockStats.totalPosts.value}</h3>
                  <p className={`text-sm flex items-center ${mockStats.totalPosts.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                    <TrendingUp className="w-4 h-4 mr-1" /> {mockStats.totalPosts.trend}
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="stat-item relative p-6 backdrop-blur-lg rounded-xl border border-syntra-blue/20 bg-syntra-dark/40 shadow-lg overflow-hidden group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-syntra-blue/10 rounded-full blur-2xl transform translate-x-16 -translate-y-8"></div>
                <div className="relative">
                  <p className="text-gray-400 mb-1 flex items-center">
                    <Eye className="w-4 h-4 mr-2" /> Total Views
                  </p>
                  <h3 className="text-3xl font-bold text-white mb-2">{formatNumber(mockStats.totalViews.value)}</h3>
                  <p className={`text-sm flex items-center ${mockStats.totalViews.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                    <TrendingUp className="w-4 h-4 mr-1" /> {mockStats.totalViews.trend}
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="stat-item relative p-6 backdrop-blur-lg rounded-xl border border-green-500/20 bg-syntra-dark/40 shadow-lg overflow-hidden group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl transform translate-x-16 -translate-y-8"></div>
                <div className="relative">
                  <p className="text-gray-400 mb-1 flex items-center">
                    <BarChart3 className="w-4 h-4 mr-2" /> Engagement Rate
                  </p>
                  <h3 className="text-3xl font-bold text-white mb-2">{mockStats.engagementRate.value}</h3>
                  <p className={`text-sm flex items-center ${mockStats.engagementRate.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                    <TrendingUp className="w-4 h-4 mr-1" /> {mockStats.engagementRate.trend}
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="stat-item relative p-6 backdrop-blur-lg rounded-xl border border-syntra-teal/20 bg-syntra-dark/40 shadow-lg overflow-hidden group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-syntra-teal/10 rounded-full blur-2xl transform translate-x-16 -translate-y-8"></div>
                <div className="relative">
                  <p className="text-gray-400 mb-1 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" /> Last Update
                  </p>
                  <h3 className="text-3xl font-bold text-white mb-2">{mockStats.lastRun.value}</h3>
                  <p className={`text-sm flex items-center ${mockStats.lastRun.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                    <TrendingUp className="w-4 h-4 mr-1" /> {mockStats.lastRun.trend}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Content Section */}
            <div className="dashboard-element mb-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <h2 className="text-2xl font-bold mb-4 md:mb-0">Content Library</h2>
                <div className="flex items-center space-x-4">
                  {/* View Toggle */}
                  <div className="flex items-center bg-syntra-dark/40 rounded-lg p-1 backdrop-blur-sm">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setView('grid')}
                      className={`px-3 py-1 ${view === 'grid' ? 'bg-syntra-purple/20' : ''}`}
                    >
                      <LayoutDashboard className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setView('list')}
                      className={`px-3 py-1 ${view === 'list' ? 'bg-syntra-purple/20' : ''}`}
                    >
                      <FileText className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Filter Buttons */}
                  <div className="flex items-center space-x-2">
                    {(['all', 'published', 'draft', 'scheduled'] as const).map((filter) => (
                      <Button
                        key={filter}
                        variant="ghost"
                        size="sm"
                        onClick={() => setActiveFilter(filter)}
                        className={`capitalize ${
                          activeFilter === filter 
                            ? 'bg-gradient-to-r from-syntra-purple to-syntra-blue text-white'
                            : 'hover:bg-syntra-purple/20'
                        }`}
                      >
                        {filter}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Grid/List */}
              <div className={view === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
                {filteredContent.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className={`dashboard-element content-card backdrop-blur-lg rounded-xl border border-white/10 bg-syntra-dark/40 shadow-lg overflow-hidden transition-all hover:border-syntra-purple/40 ${
                      view === 'list' ? 'flex' : ''
                    }`}
                  >
                    {/* Thumbnail */}
                    <div className={`relative ${view === 'list' ? 'w-48' : 'h-48'}`}>
                      <img 
                        src={item.thumbnail} 
                        alt={item.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-syntra-dark via-transparent to-transparent"></div>
                      
                      {/* Status Badge */}
                      <Badge 
                        className={`absolute top-2 right-2 ${
                          item.status === 'published' ? 'bg-green-500/70' : 
                          item.status === 'scheduled' ? 'bg-blue-500/70' : 'bg-gray-500/70'
                        } backdrop-blur-sm border-none`}
                      >
                        {item.status}
                      </Badge>

                      {/* Platform Badge */}
                      <Badge 
                        className="absolute bottom-2 left-2 bg-black/50 backdrop-blur-sm border-none"
                      >
                        {item.platform}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className={`p-4 ${view === 'list' ? 'flex-1' : ''}`}>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            {getTypeIcon(item.type)}
                            <span className="text-sm text-gray-400 capitalize">{item.type}</span>
                          </div>
                          <h3 className="font-semibold text-lg">{item.title}</h3>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem className="flex items-center">
                              <Eye className="w-4 h-4 mr-2" /> View
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center">
                              <Edit3 className="w-4 h-4 mr-2" /> Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center text-red-400">
                              <Trash2 className="w-4 h-4 mr-2" /> Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>

                      <p className="text-gray-400 text-sm mb-4">
                        {new Date(item.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" /> {formatNumber(item.stats.views)}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" /> {formatNumber(item.stats.comments)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Share2 className="w-4 h-4" /> {formatNumber(item.stats.shares)}
                          </span>
                        </div>
                        
                        {item.status === 'scheduled' && (
                          <Button size="sm" className="bg-syntra-purple/20 hover:bg-syntra-purple/30">
                            <Play className="w-4 h-4 mr-1" /> Schedule
                          </Button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
};

export default DashboardPage;
