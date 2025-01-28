import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import Loader from "./components/loader";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./pages/AdminDashboard";
import ResidentDashboard from "./pages/ResidentDashboard";
import TouristDashboard from "./pages/TouristDashboard";
import EmergencyContacts from "./pages/EmergencyContacts";
import UserProfile from "./pages/UserProfile";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Start fade out
      setTimeout(() => {
        setLoading(false); // Remove loader after animation
      }, 1000); // Match animation duration
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {loading && (
          <div 
            className={`fixed inset-0 z-50 transition-opacity duration-1000 ${
              fadeOut ? "opacity-0" : "opacity-100"
            }`}
          >
            <Loader />
          </div>
        )}
        <BrowserRouter>
          <div className={`min-h-screen bg-background ${loading ? 'hidden' : ''}`}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/resident" element={<ResidentDashboard />} />
              <Route path="/tourist" element={<TouristDashboard />} />
              <Route path="/emergency" element={<EmergencyContacts />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;