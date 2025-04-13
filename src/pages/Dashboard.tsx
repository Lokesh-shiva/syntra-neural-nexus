
import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import AnimatedContainer from "@/components/AnimatedContainer";
import StatsOverview from "@/components/dashboard/StatsOverview";
import InteractionsSection from "@/components/dashboard/InteractionsSection";
import SettingsSection from "@/components/dashboard/SettingsSection";
import DashboardLoader from "@/components/dashboard/DashboardLoader";
import { animate } from "animejs";

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
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
  }, [user]);

  // Get user's first name
  const firstName = userData?.name?.split(' ')[0] || userData?.name || "there";

  return (
    <div className="min-h-screen">
      <DashboardLoader />
      
      <div className="dashboard-content opacity-0 container mx-auto px-4 py-8">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold gradient-text">Dashboard</h1>
            <p className="text-gray-400">Welcome back, {firstName}!</p>
          </div>
          <Button variant="ghost" onClick={signOut}>Sign Out</Button>
        </header>
        
        {/* Stats Overview */}
        <StatsOverview />
        
        {/* Interactions */}
        <InteractionsSection />
        
        {/* Settings */}
        <SettingsSection />
      </div>
    </div>
  );
};

export default Dashboard;
