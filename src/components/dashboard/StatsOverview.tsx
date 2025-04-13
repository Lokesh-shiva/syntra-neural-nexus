
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, TrendingUp } from "lucide-react";
import AnimatedContainer from "@/components/AnimatedContainer";
import { useEffect } from "react";
import anime from "animejs";

const StatsOverview = () => {
  useEffect(() => {
    // Animate stat counters
    const animateCounters = () => {
      anime({
        targets: '.counter',
        innerHTML: function(el: any) { return [0, el.getAttribute('data-value')]; },
        easing: 'easeInOutExpo',
        round: true,
        duration: 2000,
        delay: function(el: any, i: number) { return i * 200; }
      });
    };
    
    // Wait for content to be visible first
    setTimeout(animateCounters, 1200);
  }, []);

  return (
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
  );
};

export default StatsOverview;
