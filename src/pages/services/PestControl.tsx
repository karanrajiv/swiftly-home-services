
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Clock, Shield, Bug } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PestControl = () => {
  const services = [
    "Ant Control", "Cockroach Treatment", "Termite Control", "Rodent Control",
    "Bed Bug Treatment", "Spider Control", "Mosquito Control", "General Pest Control"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-swiftly-dark mb-4">Professional Pest Control</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Effective pest control solutions for your home. Our licensed professionals 
              use safe and proven methods to eliminate pests and prevent their return.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <ShieldCheck className="mx-auto mb-3 text-red-600" size={32} />
              <h3 className="font-semibold mb-2">Licensed Experts</h3>
              <p className="text-sm text-gray-600">Certified professionals</p>
            </div>
            <div className="text-center">
              <Clock className="mx-auto mb-3 text-red-600" size={32} />
              <h3 className="font-semibold mb-2">Quick Response</h3>
              <p className="text-sm text-gray-600">Same-day service</p>
            </div>
            <div className="text-center">
              <Shield className="mx-auto mb-3 text-red-600" size={32} />
              <h3 className="font-semibold mb-2">Safe Methods</h3>
              <p className="text-sm text-gray-600">Family & pet safe</p>
            </div>
            <div className="text-center">
              <Bug className="mx-auto mb-3 text-red-600" size={32} />
              <h3 className="font-semibold mb-2">All Pest Types</h3>
              <p className="text-sm text-gray-600">Comprehensive solutions</p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">Pest Control Services</h2>
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
            <Button size="lg" className="bg-red-600 hover:bg-red-700 px-8 py-6 text-lg">
              Book Pest Control
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PestControl;
