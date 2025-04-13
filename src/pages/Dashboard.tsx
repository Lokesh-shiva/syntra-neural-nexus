
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedContainer from "@/components/AnimatedContainer";
import { TrendingUp, MessageSquare, Settings, ArrowDown, BarChart2, Calendar, PieChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import * as animeJS from "animejs";  // Import as namespace

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    // Loading animation
    animeJS.default({
      targets: ".dashboard-loader",
      opacity: [1, 0],
      duration: 800,
      easing: "easeInOutQuad",
      complete: () => {
        // After loader fades out, animate dashboard content
        animeJS.default({
          targets: ".dashboard-content",
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 800,
          easing: "easeOutExpo"
        });
      }
    });

    // Load user data
    const getUserData = async () => {
      try {
        if (!user) return;
        
        // Get user metadata
        const { data, error } = await supabase
          .from('user_profiles')
          .select('*')
          .eq('id', user.id)
          .single();
          
        if (error) throw error;
        
        setUserData(data || user.user_metadata);
      } catch (error) {
        console.error("Error loading user data:", error);
        // Fallback to user metadata from auth
        setUserData(user?.user_metadata || { name: "User" });
      } finally {
        setLoading(false);
      }
    };

    getUserData();
    
    // Animate stat counters
    const animateCounters = () => {
      animeJS.default({
        targets: '.counter',
        innerHTML: (el: any) => [0, el.getAttribute('data-value')],
        easing: 'easeInOutExpo',
        round: true,
        duration: 2000,
        delay: animeJS.stagger(200)
      });
    };
    
    // Wait for content to be visible first
    setTimeout(animateCounters, 1200);
  }, [user]);

  // Get user's first name
  const firstName = userData?.name?.split(' ')[0] || userData?.name || "there";

  return (
    <div className="min-h-screen">
      {/* Loading animation */}
      <div className="dashboard-loader fixed inset-0 bg-syntra-dark flex items-center justify-center z-50">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-syntra-purple rounded-full animate-spin border-t-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-syntra-purple text-xl font-bold">S</span>
          </div>
        </div>
      </div>
      
      <div className="dashboard-content opacity-0 container mx-auto px-4 py-8">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold gradient-text">Dashboard</h1>
            <p className="text-gray-400">Welcome back, {firstName}!</p>
          </div>
          <Button variant="ghost" onClick={signOut}>Sign Out</Button>
        </header>
        
        {/* Stats Overview */}
        <AnimatedContainer delay={300} className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <TrendingUp size={20} className="text-syntra-purple" />
            Your Growth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-white/5 border-white/10 hover:border-syntra-purple/50 transition-all">
              <CardHeader className="pb-2">
                <CardDescription>Total Campaigns</CardDescription>
                <CardTitle className="text-2xl counter" data-value="24">0</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center text-green-500 text-sm">
                  <ArrowDown className="rotate-180 h-4 w-4 mr-1" />
                  <span>12% increase</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10 hover:border-syntra-purple/50 transition-all">
              <CardHeader className="pb-2">
                <CardDescription>Content Generated</CardDescription>
                <CardTitle className="text-2xl counter" data-value="187">0</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center text-green-500 text-sm">
                  <ArrowDown className="rotate-180 h-4 w-4 mr-1" />
                  <span>23% increase</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10 hover:border-syntra-purple/50 transition-all">
              <CardHeader className="pb-2">
                <CardDescription>Engagement Rate</CardDescription>
                <CardTitle className="text-2xl counter" data-value="4.2">0</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center text-red-500 text-sm">
                  <ArrowDown className="h-4 w-4 mr-1" />
                  <span>3% decrease</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedContainer>
        
        {/* Interactions */}
        <AnimatedContainer delay={500} className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <MessageSquare size={20} className="text-syntra-blue" />
            Interactions
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card className="bg-white/5 border-white/10 hover:border-syntra-blue/50 transition-all">
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
                <CardDescription>Your latest platform interactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: "Campaign Created", time: "2 hours ago", icon: <Calendar className="text-syntra-purple" /> },
                    { title: "Content Published", time: "Yesterday", icon: <BarChart2 className="text-syntra-blue" /> },
                    { title: "Analytics Report", time: "3 days ago", icon: <PieChart className="text-syntra-purple" /> }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-md hover:bg-white/5 transition-colors">
                      <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium">{item.title}</h4>
                        <p className="text-sm text-gray-400">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10 hover:border-syntra-blue/50 transition-all">
              <CardHeader>
                <CardTitle className="text-lg">Upcoming Tasks</CardTitle>
                <CardDescription>Scheduled activities and reminders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: "Content Review", time: "Tomorrow, 2:00 PM", completed: false },
                    { title: "Plan Weekly Campaign", time: "Friday, 10:00 AM", completed: false },
                    { title: "Analytics Review", time: "Next Monday", completed: true }
                  ].map((task, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-md hover:bg-white/5 transition-colors">
                      <input 
                        type="checkbox" 
                        checked={task.completed} 
                        className="h-4 w-4 rounded border-gray-500 text-syntra-purple focus:ring-syntra-purple" 
                        readOnly
                      />
                      <div className={task.completed ? "line-through text-gray-500" : ""}>
                        <h4 className="font-medium">{task.title}</h4>
                        <p className="text-sm text-gray-400">{task.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedContainer>
        
        {/* Settings */}
        <AnimatedContainer delay={700}>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Settings size={20} className="text-syntra-purple" />
            Settings
          </h2>
          <Card className="bg-white/5 border-white/10 hover:border-syntra-purple/50 transition-all">
            <CardHeader>
              <CardTitle className="text-lg">Account Settings</CardTitle>
              <CardDescription>Manage your account preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Notifications</label>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-gray-500 text-syntra-purple focus:ring-syntra-purple" />
                    <span className="text-sm">Receive email notifications for important updates</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Theme Preference</label>
                  <div className="flex items-center gap-3">
                    <select className="bg-white/10 border border-white/20 rounded-md px-3 py-2 text-sm w-full max-w-xs">
                      <option>Dark (Default)</option>
                      <option>Light</option>
                      <option>System</option>
                    </select>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button size="sm">Save Preferences</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedContainer>
      </div>
    </div>
  );
};

export default Dashboard;
