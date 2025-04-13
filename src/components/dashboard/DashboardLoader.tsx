
import { useEffect } from "react";
import anime from "animejs";

const DashboardLoader = () => {
  useEffect(() => {
    // Loading animation
    anime({
      targets: ".dashboard-loader",
      opacity: [1, 0],
      duration: 800,
      easing: "easeInOutQuad",
      complete: () => {
        // After loader fades out, animate dashboard content
        anime({
          targets: ".dashboard-content",
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 800,
          easing: "easeOutExpo"
        });
      }
    });
  }, []);

  return (
    <div className="dashboard-loader fixed inset-0 bg-syntra-dark flex items-center justify-center z-50">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-syntra-purple rounded-full animate-spin border-t-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-syntra-purple text-xl font-bold">S</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardLoader;
