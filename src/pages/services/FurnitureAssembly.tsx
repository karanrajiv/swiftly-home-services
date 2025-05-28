
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sofa, Clock, Shield, Wrench } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";

const FurnitureAssembly = () => {
  const { toast } = useToast();
  const { addItem } = useCart();
  const navigate = useNavigate();

  const services = [
    { name: "IKEA Assembly", description: "Expert assembly of all IKEA furniture" },
    { name: "Office Furniture", description: "Professional office furniture setup" },
    { name: "Bedroom Sets", description: "Complete bedroom furniture assembly" },
    { name: "Kitchen Cabinets", description: "Precise cabinet installation and assembly" },
    { name: "Dining Tables", description: "Sturdy dining table assembly" },
    { name: "Bookcases", description: "Secure bookcase and shelving assembly" },
    { name: "TV Stands", description: "Entertainment center setup" },
    { name: "Exercise Equipment", description: "Fitness equipment assembly" }
  ];

  const handleAddToCart = (service: { name: string; description: string }) => {
    const cartItem = {
      id: `furniture-assembly-${service.name.toLowerCase().replace(/\s+/g, '-')}`,
      name: service.name,
      price: 0,
      duration: "1-3 hours",
      includes: ["Professional assembly", "Tools provided", "Hardware check", "Clean-up"],
      serviceType: "Furniture Assembly"
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

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="relative bg-gradient-to-r from-swiftly-blue to-swiftly-darkblue rounded-lg p-12 mb-12 text-white">
            <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
            <div className="relative text-center">
              <h1 className="text-4xl font-bold mb-4">Professional Furniture Assembly</h1>
              <p className="text-lg max-w-2xl mx-auto opacity-90">
                Get your new furniture professionally assembled. Our skilled technicians 
                handle all brands and types of furniture with precision and care.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-swiftly-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sofa className="text-swiftly-blue" size={32} />
              </div>
              <h3 className="font-semibold mb-2">All Furniture Types</h3>
              <p className="text-sm text-gray-600">Any brand or style</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-swiftly-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-swiftly-blue" size={32} />
              </div>
              <h3 className="font-semibold mb-2">Fast Assembly</h3>
              <p className="text-sm text-gray-600">Quick and efficient service</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-swiftly-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-swiftly-blue" size={32} />
              </div>
              <h3 className="font-semibold mb-2">Damage Protection</h3>
              <p className="text-sm text-gray-600">Careful handling guaranteed</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-swiftly-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="text-swiftly-blue" size={32} />
              </div>
              <h3 className="font-semibold mb-2">Professional Tools</h3>
              <p className="text-sm text-gray-600">Right equipment for the job</p>
            </div>
          </div>

          {/* Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-swiftly-dark">Furniture We Assemble</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-swiftly-blue to-swiftly-darkblue w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Sofa className="text-white" size={24} />
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
            <h3 className="text-2xl font-bold mb-4">Need Multiple Items Assembled?</h3>
            <p className="mb-6 opacity-90">Book our comprehensive assembly service or select individual items above</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-swiftly-blue hover:bg-gray-100 font-medium px-8 py-6 text-lg"
                onClick={() => handleAddToCart({ name: "Complete Assembly Service", description: "Multiple furniture assembly" })}
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

export default FurnitureAssembly;
