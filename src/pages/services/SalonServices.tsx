
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Clock, Shield, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";

const SalonServices = () => {
  const { toast } = useToast();
  const { addItem } = useCart();
  const navigate = useNavigate();

  const services = [
    { name: "Hair Cut & Styling", description: "Professional haircuts and styling for all hair types" },
    { name: "Hair Coloring", description: "Expert hair coloring and highlighting services" },
    { name: "Manicure & Pedicure", description: "Complete nail care and beautification" },
    { name: "Facial Treatment", description: "Rejuvenating facial treatments for all skin types" },
    { name: "Eyebrow Threading", description: "Precise eyebrow shaping and threading" },
    { name: "Hair Spa", description: "Deep conditioning and hair treatment therapy" },
    { name: "Bridal Makeup", description: "Special occasion and bridal makeup services" },
    { name: "Men's Grooming", description: "Complete grooming services for men" }
  ];

  const handleAddToCart = (service: { name: string; description: string }) => {
    const cartItem = {
      id: `salon-${service.name.toLowerCase().replace(/\s+/g, '-')}`,
      name: service.name,
      price: 0,
      duration: "1-2 hours",
      includes: ["Professional service", "Premium products", "Sanitized tools", "Expert styling"],
      serviceType: "Salon Services"
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
              <h1 className="text-4xl font-bold mb-4">Professional Salon Services</h1>
              <p className="text-lg max-w-2xl mx-auto opacity-90">
                Pamper yourself with our professional salon services at the comfort of your home. 
                Our skilled beauticians bring the salon experience to your doorstep.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-swiftly-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scissors className="text-swiftly-blue" size={32} />
              </div>
              <h3 className="font-semibold mb-2">Expert Stylists</h3>
              <p className="text-sm text-gray-600">Trained professionals</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-swiftly-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-swiftly-blue" size={32} />
              </div>
              <h3 className="font-semibold mb-2">Flexible Timing</h3>
              <p className="text-sm text-gray-600">Book at your convenience</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-swiftly-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-swiftly-blue" size={32} />
              </div>
              <h3 className="font-semibold mb-2">Hygiene First</h3>
              <p className="text-sm text-gray-600">Sanitized equipment</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-swiftly-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-swiftly-blue" size={32} />
              </div>
              <h3 className="font-semibold mb-2">Premium Products</h3>
              <p className="text-sm text-gray-600">Quality beauty products</p>
            </div>
          </div>

          {/* Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-swiftly-dark">Our Salon Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-swiftly-blue to-swiftly-darkblue w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Scissors className="text-white" size={24} />
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
            <h3 className="text-2xl font-bold mb-4">Ready for a Makeover?</h3>
            <p className="mb-6 opacity-90">Book our complete salon package or choose individual services above</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-swiftly-blue hover:bg-gray-100 font-medium px-8 py-6 text-lg"
                onClick={() => handleAddToCart({ name: "Complete Salon Package", description: "Full salon experience" })}
              >
                Book Complete Package - €0
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

export default SalonServices;
