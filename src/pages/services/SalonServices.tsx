
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Clock, Shield, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SalonServices = () => {
  const services = [
    "Hair Cut & Styling", "Hair Coloring", "Manicure & Pedicure", "Facial Treatment",
    "Eyebrow Threading", "Hair Spa", "Bridal Makeup", "Men's Grooming"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-swiftly-dark mb-4">Professional Salon Services</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pamper yourself with our professional salon services at the comfort of your home. 
              Our skilled beauticians bring the salon experience to your doorstep.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <Scissors className="mx-auto mb-3 text-pink-600" size={32} />
              <h3 className="font-semibold mb-2">Expert Stylists</h3>
              <p className="text-sm text-gray-600">Trained professionals</p>
            </div>
            <div className="text-center">
              <Clock className="mx-auto mb-3 text-pink-600" size={32} />
              <h3 className="font-semibold mb-2">Flexible Timing</h3>
              <p className="text-sm text-gray-600">Book at your convenience</p>
            </div>
            <div className="text-center">
              <Shield className="mx-auto mb-3 text-pink-600" size={32} />
              <h3 className="font-semibold mb-2">Hygiene First</h3>
              <p className="text-sm text-gray-600">Sanitized equipment</p>
            </div>
            <div className="text-center">
              <Star className="mx-auto mb-3 text-pink-600" size={32} />
              <h3 className="font-semibold mb-2">Premium Products</h3>
              <p className="text-sm text-gray-600">Quality beauty products</p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">Our Salon Services</h2>
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
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700 px-8 py-6 text-lg">
              Book Salon Service - €0
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SalonServices;
