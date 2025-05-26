import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Fan, Clock, Shield, Thermometer } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ACRepair = () => {
  const services = [
    "AC Installation", "Repair Services", "Regular Maintenance", "Filter Replacement",
    "Refrigerant Refill", "Duct Cleaning", "Thermostat Repair", "Emergency Service"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-swiftly-dark mb-4">AC Repair & Service</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Keep cool with our expert AC repair and maintenance services. 
              From installation to emergency repairs, we've got your comfort covered.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <Fan className="mx-auto mb-3 text-indigo-600" size={32} />
              <h3 className="font-semibold mb-2">Expert Technicians</h3>
              <p className="text-sm text-gray-600">Certified AC specialists</p>
            </div>
            <div className="text-center">
              <Clock className="mx-auto mb-3 text-indigo-600" size={32} />
              <h3 className="font-semibold mb-2">24/7 Service</h3>
              <p className="text-sm text-gray-600">Emergency repairs available</p>
            </div>
            <div className="text-center">
              <Shield className="mx-auto mb-3 text-indigo-600" size={32} />
              <h3 className="font-semibold mb-2">Quality Parts</h3>
              <p className="text-sm text-gray-600">Genuine components</p>
            </div>
            <div className="text-center">
              <Thermometer className="mx-auto mb-3 text-indigo-600" size={32} />
              <h3 className="font-semibold mb-2">Energy Efficient</h3>
              <p className="text-sm text-gray-600">Optimize performance</p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">Our AC Services</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {services.map((service, index) => (
                <Card key={index}>
                  <CardContent className="p-4 text-center">
                    <h3 className="font-semibold">{service}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 px-8 py-6 text-lg">
              Book AC Service - €50
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ACRepair;
