
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import AnimatedContainer from "@/components/AnimatedContainer";

const SettingsSection = () => {
  return (
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
  );
};

export default SettingsSection;
