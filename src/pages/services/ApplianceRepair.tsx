
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wrench, Clock, Shield, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";

const ApplianceRepair = () => {
  const { toast } = useToast();
  const { addItem } = useCart();
  const navigate = useNavigate();

  const applianceCategories = {
    kitchen: {
      name: "Kitchen Appliances",
      items: ["Refrigerator", "Dishwasher", "Microwave", "Oven"],
      description: "Expert repair services for all your kitchen appliances. We handle everything from cooling systems to heating elements.",
      commonIssues: ["Not cooling/heating properly", "Strange noises", "Water leaks", "Electrical issues"]
    },
    laundry: {
      name: "Laundry Appliances", 
      items: ["Washing Machine", "Dryer"],
      description: "Professional washing machine and dryer repair services to keep your laundry routine running smoothly.",
      commonIssues: ["Won't start", "Not spinning", "Water not draining", "Excessive noise"]
    },
    hvac: {
      name: "HVAC & Water",
      items: ["Air Conditioner", "Water Heater"],
      description: "Climate control and hot water system repairs for year-round comfort in your home.",
      commonIssues: ["No hot water", "Poor cooling", "High energy bills", "Temperature fluctuations"]
    }
  };

  const handleAddToCart = (appliance: string, category: string) => {
    const cartItem = {
      id: `appliance-repair-${category}-${appliance.toLowerCase().replace(/\s+/g, '-')}`,
      name: `${appliance} Repair`,
      price: 0,
      duration: "1-2 hours",
      includes: ["Diagnosis", "Repair", "Parts (if needed)", "Testing"],
      serviceType: "Appliance Repair"
    };
    
    addItem(cartItem);
    
    toast({
      title: "Added to Cart!",
      description: `${appliance} Repair has been added to your cart.`,
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
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-swiftly-dark mb-4">Expert Appliance Repair</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get your home appliances fixed by certified technicians. We repair all major brands 
              with genuine parts and provide warranty on our work.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <Wrench className="mx-auto mb-3 text-green-600" size={32} />
              <h3 className="font-semibold mb-2">Expert Technicians</h3>
              <p className="text-sm text-gray-600">Certified and experienced</p>
            </div>
            <div className="text-center">
              <Clock className="mx-auto mb-3 text-green-600" size={32} />
              <h3 className="font-semibold mb-2">Same Day Service</h3>
              <p className="text-sm text-gray-600">Quick response time</p>
            </div>
            <div className="text-center">
              <Shield className="mx-auto mb-3 text-green-600" size={32} />
              <h3 className="font-semibold mb-2">Genuine Parts</h3>
              <p className="text-sm text-gray-600">Original manufacturer parts</p>
            </div>
            <div className="text-center">
              <Award className="mx-auto mb-3 text-green-600" size={32} />
              <h3 className="font-semibold mb-2">Service Warranty</h3>
              <p className="text-sm text-gray-600">30-day guarantee</p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">Appliances We Repair</h2>
            
            <Tabs defaultValue="kitchen" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="kitchen">Kitchen</TabsTrigger>
                <TabsTrigger value="laundry">Laundry</TabsTrigger>
                <TabsTrigger value="hvac">HVAC & Water</TabsTrigger>
              </TabsList>
              
              {Object.entries(applianceCategories).map(([key, category]) => (
                <TabsContent key={key} value={key} className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-4">Appliances We Service:</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {category.items.map((appliance, index) => (
                          <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
                            <CardContent className="p-4 flex justify-between items-center">
                              <div>
                                <h5 className="font-medium">{appliance}</h5>
                                <p className="text-sm text-gray-600">Professional repair service</p>
                              </div>
                              <Button 
                                size="sm" 
                                className="bg-green-600 hover:bg-green-700"
                                onClick={() => handleAddToCart(appliance, key)}
                              >
                                Add to Cart - €0
                              </Button>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-4">Common Issues We Fix:</h4>
                      <ul className="space-y-2">
                        {category.commonIssues.map((issue, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                            {issue}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          <div className="text-center space-y-4">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-6 text-lg">
              Book General Repair Service - €0
            </Button>
            <div>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-6 text-lg"
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

export default ApplianceRepair;
