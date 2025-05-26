
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PaintBucket, Clock, Shield, Palette } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Painting = () => {
  const services = [
    "Interior Painting", "Exterior Painting", "Wall Preparation", "Color Consultation",
    "Ceiling Painting", "Trim & Molding", "Wallpaper Removal", "Touch-up Services"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-swiftly-dark mb-4">Professional Painting Services</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transform your space with our expert painting services. We use premium paints 
              and professional techniques to deliver flawless results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <PaintBucket className="mx-auto mb-3 text-orange-600" size={32} />
              <h3 className="font-semibold mb-2">Premium Paints</h3>
              <p className="text-sm text-gray-600">High-quality materials</p>
            </div>
            <div className="text-center">
              <Clock className="mx-auto mb-3 text-orange-600" size={32} />
              <h3 className="font-semibold mb-2">Timely Completion</h3>
              <p className="text-sm text-gray-600">On-schedule delivery</p>
            </div>
            <div className="text-center">
              <Shield className="mx-auto mb-3 text-orange-600" size={32} />
              <h3 className="font-semibold mb-2">Clean Work</h3>
              <p className="text-sm text-gray-600">Mess-free painting</p>
            </div>
            <div className="text-center">
              <Palette className="mx-auto mb-3 text-orange-600" size={32} />
              <h3 className="font-semibold mb-2">Color Matching</h3>
              <p className="text-sm text-gray-600">Perfect color coordination</p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">Our Painting Services</h2>
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
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 px-8 py-6 text-lg">
              Book Painting Service
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Painting;
