
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Checkout from "./pages/Checkout";
import HomeCleaning from "./pages/services/HomeCleaning";
import ApplianceRepair from "./pages/services/ApplianceRepair";
import Plumbing from "./pages/services/Plumbing";
import Painting from "./pages/services/Painting";
import FurnitureAssembly from "./pages/services/FurnitureAssembly";
import SalonServices from "./pages/services/SalonServices";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/services/home-cleaning" element={<HomeCleaning />} />
            <Route path="/services/appliance-repair" element={<ApplianceRepair />} />
            <Route path="/services/plumbing" element={<Plumbing />} />
            <Route path="/services/painting" element={<Painting />} />
            <Route path="/services/furniture-assembly" element={<FurnitureAssembly />} />
            <Route path="/services/salon-services" element={<SalonServices />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
