
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart2, Calendar, MessageSquare, PieChart } from "lucide-react";
import AnimatedContainer from "@/components/AnimatedContainer";

const InteractionsSection = () => {
  return (
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
  );
};

export default InteractionsSection;
