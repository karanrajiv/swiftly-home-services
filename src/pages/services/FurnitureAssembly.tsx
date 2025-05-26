import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sofa, Clock, Shield, Wrench } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FurnitureAssembly = () => {
  const services = [
    "IKEA Assembly", "Office Furniture", "Bedroom Sets", "Kitchen Cabinets",
    "Dining Tables", "Bookcases", "TV Stands", "Exercise Equipment"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-swiftly-dark mb-4">Professional Furniture Assembly</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get your new furniture professionally assembled. Our skilled technicians 
              handle all brands and types of furniture with precision and care.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <Sofa className="mx-auto mb-3 text-amber-600" size={32} />
              <h3 className="font-semibold mb-2">All Furniture Types</h3>
              <p className="text-sm text-gray-600">Any brand or style</p>
            </div>
            <div className="text-center">
              <Clock className="mx-auto mb-3 text-amber-600" size={32} />
              <h3 className="font-semibold mb-2">Fast Assembly</h3>
              <p className="text-sm text-gray-600">Quick and efficient</p>
            </div>
            <div className="text-center">
              <Shield className="mx-auto mb-3 text-amber-600" size={32} />
              <h3 className="font-semibold mb-2">Damage Protection</h3>
              <p className="text-sm text-gray-600">Careful handling</p>
            </div>
            <div className="text-center">
              <Wrench className="mx-auto mb-3 text-amber-600" size={32} />
              <h3 className="font-semibold mb-2">Professional Tools</h3>
              <p className="text-sm text-gray-600">Right equipment</p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">Furniture We Assemble</h2>
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
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 px-8 py-6 text-lg">
              Book Assembly Service - €50
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FurnitureAssembly;
