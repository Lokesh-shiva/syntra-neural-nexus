import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense, useState } from "react";
import PerformanceOptimizer from "./components/PerformanceOptimizer";
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";
import { AuthProvider } from "./hooks/useAuth";
import ErrorBoundary from "./components/ErrorBoundary";
import PageTransition from "./components/PageTransition";
import Preloader from "./components/Preloader";
import DashboardHint from "./components/DashboardHint";
import "./App.css";

// Lazy load page components for better performance
const Index = lazy(() => import("./pages/Index"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Agents = lazy(() => import("./pages/agents"));
const Workflow = lazy(() => import("./pages/workflow"));
const Showcase = lazy(() => import("./pages/showcase"));
const Contact = lazy(() => import("./pages/contact"));
const About = lazy(() => import("./pages/about"));
const Simulate = lazy(() => import("./pages/simulate"));
const ErrorPage = lazy(() => import("./pages/error"));

// Loading component for suspense fallback
const Loading = () => (
  <div className="flex h-screen w-full items-center justify-center bg-syntra-dark">
    <div className="flex flex-col items-center">
      <div className="h-24 w-24 animate-spin rounded-full border-b-2 border-t-2 border-syntra-purple"></div>
      <p className="mt-4 text-xl text-white">Loading...</p>
    </div>
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Improves performance by avoiding unnecessary refetches
      retry: 1, // Limit retry attempts
      staleTime: 5 * 60 * 1000, // 5 minutes - increase cache time
    },
  },
});

function App() {
  const [isPreloaded, setIsPreloaded] = useState(false);

  const handlePreloadComplete = () => {
    setIsPreloaded(true);
  };

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <TooltipProvider>
            <BrowserRouter>
              <ScrollToTop />
              <PerformanceOptimizer>
                <Preloader onPreloadComplete={handlePreloadComplete} />
                <DashboardHint />
                <Suspense fallback={<Loading />}>
                  <PageTransition>
                    <Routes>
                      <Route path="/" element={<Index />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/signup" element={<Signup />} />
                      <Route path="/agents" element={<Agents />} />
                      <Route path="/workflow" element={<Workflow />} />
                      <Route path="/showcase" element={<Showcase />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/simulate" element={<Simulate />} />
                      <Route
                        path="/dashboard"
                        element={
                          <ProtectedRoute>
                            <Dashboard />
                          </ProtectedRoute>
                        }
                      />
                      <Route path="*" element={<ErrorPage />} />
                    </Routes>
                  </PageTransition>
                </Suspense>
              </PerformanceOptimizer>
              <Toaster />
              <Sonner />
            </BrowserRouter>
          </TooltipProvider>
        </AuthProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
