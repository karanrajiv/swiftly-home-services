
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Droplets, Clock, Shield, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Plumbing = () => {
  const services = [
    "Leak Repair", "Pipe Installation", "Drain Cleaning", "Faucet Repair",
    "Toilet Repair", "Water Heater Service", "Emergency Plumbing", "Bathroom Renovation"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-swiftly-dark mb-4">Professional Plumbing Services</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Skilled plumbers available 24/7 for all your plumbing needs. From minor repairs 
              to major installations, we've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <Droplets className="mx-auto mb-3 text-purple-600" size={32} />
              <h3 className="font-semibold mb-2">Licensed Plumbers</h3>
              <p className="text-sm text-gray-600">Fully certified professionals</p>
            </div>
            <div className="text-center">
              <Clock className="mx-auto mb-3 text-purple-600" size={32} />
              <h3 className="font-semibold mb-2">24/7 Emergency</h3>
              <p className="text-sm text-gray-600">Round the clock service</p>
            </div>
            <div className="text-center">
              <Shield className="mx-auto mb-3 text-purple-600" size={32} />
              <h3 className="font-semibold mb-2">Quality Materials</h3>
              <p className="text-sm text-gray-600">Premium plumbing supplies</p>
            </div>
            <div className="text-center">
              <Phone className="mx-auto mb-3 text-purple-600" size={32} />
              <h3 className="font-semibold mb-2">Quick Response</h3>
              <p className="text-sm text-gray-600">Fast arrival time</p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">Our Plumbing Services</h2>
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

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-red-800 mb-2">Emergency Plumbing</h3>
            <p className="text-red-700">
              Burst pipes? Water leaks? Call us now for immediate assistance. Our emergency team is available 24/7.
            </p>
            <Button className="mt-4 bg-red-600 hover:bg-red-700">
              Call Emergency: (555) 123-PIPE
            </Button>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 px-8 py-6 text-lg">
              Book Plumbing Service
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Plumbing;
