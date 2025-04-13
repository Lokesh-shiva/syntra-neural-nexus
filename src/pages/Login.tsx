import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import AnimatedContainer from "@/components/AnimatedContainer";
import anime from "animejs/lib/anime.es.js";  // Specify the correct module path

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { signIn, user } = useAuth();
  
  useEffect(() => {
    // Animate elements
    anime({
      targets: ".login-element",
      opacity: [0, 1],
      translateY: [20, 0],
      delay: anime.stagger(100, { start: 300 }),
      easing: "easeOutExpo"
    });
    
    // Animate background particles
    const particlesAnimation = anime({
      targets: ".login-particle",
      translateX: () => anime.random(-20, 20),
      translateY: () => anime.random(-20, 20),
      scale: () => anime.random(0.8, 1.2),
      opacity: () => anime.random(0.3, 0.6),
      easing: "easeInOutQuad",
      duration: 3000,
      complete: function(anim) {
        particlesAnimation.restart();
      }
    });
    
    return () => {
      particlesAnimation.pause();
    };
  }, []);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    
    setIsLoading(true);
    try {
      await signIn(email, password);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Create background particles
  const particles = Array.from({ length: 20 }).map((_, i) => (
    <div 
      key={i} 
      className="login-particle absolute rounded-full bg-syntra-purple/20"
      style={{
        width: Math.random() * 40 + 10 + "px",
        height: Math.random() * 40 + 10 + "px",
        top: Math.random() * 100 + "%",
        left: Math.random() * 100 + "%",
        opacity: Math.random() * 0.3
      }}
    />
  ));
  
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {particles}
      
      <AnimatedContainer className="w-full max-w-md z-10">
        <Card className="w-full backdrop-blur-lg bg-syntra-dark/70 border-syntra-purple/20">
          <CardHeader>
            <CardTitle className="login-element text-2xl text-center gradient-text">Login to SYNTRA</CardTitle>
            <CardDescription className="login-element text-center text-gray-400">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="login-element space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/5 border-white/10"
                />
              </div>
              <div className="login-element space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-white/5 border-white/10"
                />
              </div>
              <Button 
                type="submit" 
                className="login-element w-full mt-6" 
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="login-element flex justify-center">
            <p className="text-sm text-gray-400">
              Don't have an account?{" "}
              <Link to="/signup" className="text-syntra-purple hover:text-syntra-purple/80 transition-colors">
                Sign up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </AnimatedContainer>
    </div>
  );
};

export default Login;
