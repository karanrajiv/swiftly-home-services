
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Droplets, Clock, Shield, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";

const Plumbing = () => {
  const { toast } = useToast();
  const { addItem } = useCart();
  const navigate = useNavigate();

  const services = [
    { name: "Leak Repair", description: "Quick and effective leak detection and repair" },
    { name: "Pipe Installation", description: "Professional pipe installation and replacement" },
    { name: "Drain Cleaning", description: "Thorough drain cleaning and unclogging" },
    { name: "Faucet Repair", description: "Faucet repair and replacement services" },
    { name: "Toilet Repair", description: "Complete toilet repair and maintenance" },
    { name: "Water Heater Service", description: "Water heater installation and repair" },
    { name: "Emergency Plumbing", description: "24/7 emergency plumbing services" },
    { name: "Bathroom Renovation", description: "Complete bathroom plumbing renovation" }
  ];

  const handleAddToCart = (service: { name: string; description: string }) => {
    const cartItem = {
      id: `plumbing-${service.name.toLowerCase().replace(/\s+/g, '-')}`,
      name: service.name,
      price: 0,
      duration: "1-3 hours",
      includes: ["Professional diagnosis", "Quality materials", "Expert repair", "Clean-up"],
      serviceType: "Plumbing"
    };
    
    addItem(cartItem);
    
    toast({
      title: "Added to Cart!",
      description: `${service.name} has been added to your cart.`,
    });
  };

  const handleViewCart = () => {
    navigate('/checkout');
  };

  const handleEmergencyCall = () => {
    window.location.href = "tel:+353892145984";
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="relative bg-gradient-to-r from-swiftly-blue to-swiftly-darkblue rounded-lg p-12 mb-12 text-white">
            <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
            <div className="relative text-center">
              <h1 className="text-4xl font-bold mb-4">Professional Plumbing Services</h1>
              <p className="text-lg max-w-2xl mx-auto opacity-90">
                Skilled plumbers available 24/7 for all your plumbing needs. From minor repairs 
                to major installations, we've got you covered.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-swiftly-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="text-swiftly-blue" size={32} />
              </div>
              <h3 className="font-semibold mb-2">Licensed Plumbers</h3>
              <p className="text-sm text-gray-600">Fully certified professionals</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-swiftly-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-swiftly-blue" size={32} />
              </div>
              <h3 className="font-semibold mb-2">24/7 Emergency</h3>
              <p className="text-sm text-gray-600">Round the clock service</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-swiftly-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-swiftly-blue" size={32} />
              </div>
              <h3 className="font-semibold mb-2">Quality Materials</h3>
              <p className="text-sm text-gray-600">Premium plumbing supplies</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-swiftly-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-swiftly-blue" size={32} />
              </div>
              <h3 className="font-semibold mb-2">Quick Response</h3>
              <p className="text-sm text-gray-600">Fast arrival time</p>
            </div>
          </div>

          {/* Emergency Alert */}
          <div className="bg-red-50 border-l-4 border-red-400 rounded-lg p-6 mb-8">
            <div className="flex items-center">
              <Phone className="text-red-500 mr-3" size={24} />
              <div className="flex-1">
                <h3 className="text-lg font-bold text-red-800 mb-2">Emergency Plumbing Available 24/7</h3>
                <p className="text-red-700 mb-3">
                  Burst pipes? Water leaks? Call us now for immediate assistance.
                </p>
                <Button 
                  className="bg-red-600 hover:bg-red-700 text-white"
                  onClick={handleEmergencyCall}
                >
                  Call Emergency: +353892145984
                </Button>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-swiftly-dark">Our Plumbing Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-swiftly-blue to-swiftly-darkblue w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Droplets className="text-white" size={24} />
                      </div>
                      <h3 className="font-bold text-lg mb-2 text-swiftly-dark">{service.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                      <Button 
                        size="sm" 
                        className="bg-swiftly-blue hover:bg-swiftly-darkblue text-white font-medium w-full"
                        onClick={() => handleAddToCart(service)}
                      >
                        Add to Cart - €0
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-swiftly-blue to-swiftly-darkblue rounded-lg p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Need Multiple Plumbing Services?</h3>
            <p className="mb-6 opacity-90">Book our comprehensive plumbing service or select individual services above</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-swiftly-blue hover:bg-gray-100 font-medium px-8 py-6 text-lg"
                onClick={() => handleAddToCart({ name: "Complete Plumbing Service", description: "Comprehensive plumbing solution" })}
              >
                Book Complete Service - €0
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 font-medium px-8 py-6 text-lg"
                onClick={handleViewCart}
              >
                View Cart & Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Plumbing;
