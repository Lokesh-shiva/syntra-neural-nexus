
import { useEffect, useRef } from "react";
import anime from "animejs";  // Fix the import

interface AnimatedContainerProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const AnimatedContainer = ({ 
  children, 
  delay = 0, 
  className = "" 
}: AnimatedContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (containerRef.current) {
      anime({
        targets: containerRef.current,
        opacity: [0, 1],
        translateY: [20, 0],
        easing: "easeOutExpo",
        duration: 800,
        delay
      });
    }
  }, [delay]);
  
  return (
    <div ref={containerRef} className={`opacity-0 ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedContainer;
