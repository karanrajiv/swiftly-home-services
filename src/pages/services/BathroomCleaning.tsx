
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShowerHead, Clock, Shield, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BathroomCleaning = () => {
  const services = [
    "Deep Scrubbing", "Grout Cleaning", "Toilet Sanitization", "Mirror & Glass",
    "Tile Cleaning", "Mold Removal", "Fixture Polishing", "Floor Mopping"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-swiftly-dark mb-4">Professional Bathroom Cleaning</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Spotless and sanitized bathrooms with our deep cleaning service. 
              We tackle every corner to ensure a hygienic and sparkling clean space.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <ShowerHead className="mx-auto mb-3 text-teal-600" size={32} />
              <h3 className="font-semibold mb-2">Deep Sanitization</h3>
              <p className="text-sm text-gray-600">Thorough disinfection</p>
            </div>
            <div className="text-center">
              <Clock className="mx-auto mb-3 text-teal-600" size={32} />
              <h3 className="font-semibold mb-2">Quick Service</h3>
              <p className="text-sm text-gray-600">Efficient cleaning</p>
            </div>
            <div className="text-center">
              <Shield className="mx-auto mb-3 text-teal-600" size={32} />
              <h3 className="font-semibold mb-2">Safe Products</h3>
              <p className="text-sm text-gray-600">Eco-friendly cleaners</p>
            </div>
            <div className="text-center">
              <Sparkles className="mx-auto mb-3 text-teal-600" size={32} />
              <h3 className="font-semibold mb-2">Spotless Results</h3>
              <p className="text-sm text-gray-600">Pristine finish</p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">What We Clean</h2>
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
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 px-8 py-6 text-lg">
              Book Bathroom Cleaning
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BathroomCleaning;
