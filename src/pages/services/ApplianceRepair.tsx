import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Clock, Shield, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ApplianceRepair = () => {
  const appliances = [
    "Washing Machine", "Refrigerator", "Dishwasher", "Microwave", 
    "Air Conditioner", "Water Heater", "Dryer", "Oven"
  ];

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
            <div className="grid md:grid-cols-4 gap-4">
              {appliances.map((appliance, index) => (
                <Card key={index}>
                  <CardContent className="p-4 text-center">
                    <h3 className="font-semibold">{appliance}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-6 text-lg">
              Book Repair Service - €50
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ApplianceRepair;
