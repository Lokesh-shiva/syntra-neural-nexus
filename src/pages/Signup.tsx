
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import AnimatedContainer from "@/components/AnimatedContainer";
import anime from "animejs";  // Fix the import

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const { signUp } = useAuth();
  
  useEffect(() => {
    // Animate elements
    anime({
      targets: ".signup-element",
      opacity: [0, 1],
      translateY: [20, 0],
      delay: anime.stagger(100, { start: 300 }),
      easing: "easeOutExpo"
    });
    
    // Animate background particles
    const particlesAnimation = anime({
      targets: ".signup-particle",
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
  
  const validatePasswords = () => {
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return false;
    }
    
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return false;
    }
    
    setPasswordError("");
    return true;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePasswords()) return;
    
    setIsLoading(true);
    try {
      await signUp(email, password, { name });
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
      className="signup-particle absolute rounded-full bg-syntra-blue/20"
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
        <Card className="w-full backdrop-blur-lg bg-syntra-dark/70 border-syntra-blue/20">
          <CardHeader>
            <CardTitle className="signup-element text-2xl text-center gradient-text">Create an Account</CardTitle>
            <CardDescription className="signup-element text-center text-gray-400">
              Join SYNTRA and start your AI automation journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="signup-element space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-white/5 border-white/10"
                />
              </div>
              <div className="signup-element space-y-2">
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
              <div className="signup-element space-y-2">
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
              <div className="signup-element space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="bg-white/5 border-white/10"
                />
                {passwordError && (
                  <p className="text-sm text-red-500 mt-1">{passwordError}</p>
                )}
              </div>
              <Button 
                type="submit" 
                className="signup-element w-full mt-6" 
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Sign Up"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="signup-element flex justify-center">
            <p className="text-sm text-gray-400">
              Already have an account?{" "}
              <Link to="/login" className="text-syntra-blue hover:text-syntra-blue/80 transition-colors">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </AnimatedContainer>
    </div>
  );
};

export default Signup;
