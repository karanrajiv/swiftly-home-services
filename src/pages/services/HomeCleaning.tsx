import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Clock, Users, Shield, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const HomeCleaning = () => {
  const [selectedPackage, setSelectedPackage] = useState("basic");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const packages = [
    {
      id: "basic",
      name: "Basic Cleaning",
      price: "€50",
      duration: "2-3 hours",
      includes: ["Dusting", "Vacuuming", "Bathroom cleaning", "Kitchen cleaning"]
    },
    {
      id: "deep",
      name: "Deep Cleaning",
      price: "€50",
      duration: "4-5 hours",
      includes: ["Everything in Basic", "Inside appliances", "Baseboards", "Window sills", "Light fixtures"]
    },
    {
      id: "premium",
      name: "Premium Cleaning",
      price: "€50",
      duration: "5-6 hours",
      includes: ["Everything in Deep", "Inside cabinets", "Oven cleaning", "Refrigerator cleaning", "Organizing"]
    }
  ];

  const handleBooking = () => {
    toast({
      title: "Booking Confirmed!",
      description: `Your ${packages.find(p => p.id === selectedPackage)?.name} service has been booked for €50.`,
    });
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-swiftly-dark mb-4">Professional Home Cleaning</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience spotless, sanitized spaces with our professional home cleaning services. 
              Our trained and verified cleaners use eco-friendly products to ensure your home is safe and pristine.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <Clock className="mx-auto mb-3 text-swiftly-blue" size={32} />
              <h3 className="font-semibold mb-2">Flexible Timing</h3>
              <p className="text-sm text-gray-600">Book at your convenience</p>
            </div>
            <div className="text-center">
              <Users className="mx-auto mb-3 text-swiftly-blue" size={32} />
              <h3 className="font-semibold mb-2">Trained Professionals</h3>
              <p className="text-sm text-gray-600">Background verified cleaners</p>
            </div>
            <div className="text-center">
              <Shield className="mx-auto mb-3 text-swiftly-blue" size={32} />
              <h3 className="font-semibold mb-2">Insured Service</h3>
              <p className="text-sm text-gray-600">Fully covered and protected</p>
            </div>
            <div className="text-center">
              <Star className="mx-auto mb-3 text-swiftly-blue" size={32} />
              <h3 className="font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-sm text-gray-600">100% satisfaction promise</p>
            </div>
          </div>

          {/* Packages */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">Choose Your Package</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <Card 
                  key={pkg.id}
                  className={`cursor-pointer transition-all ${
                    selectedPackage === pkg.id ? 'ring-2 ring-swiftly-blue' : ''
                  }`}
                  onClick={() => setSelectedPackage(pkg.id)}
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                      <div className="text-3xl font-bold text-swiftly-blue mb-1">{pkg.price}</div>
                      <Badge variant="secondary">{pkg.duration}</Badge>
                    </div>
                    <ul className="space-y-2">
                      {pkg.includes.map((item, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Book Now */}
          <div className="text-center">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-swiftly-blue hover:bg-swiftly-darkblue px-8 py-6 text-lg">
                  Book Now for €50
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Confirm Your Booking</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">
                      {packages.find(p => p.id === selectedPackage)?.name}
                    </h3>
                    <p className="text-2xl font-bold text-swiftly-blue mb-2">€50</p>
                    <Badge variant="secondary">
                      {packages.find(p => p.id === selectedPackage)?.duration}
                    </Badge>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Service includes:</h4>
                    <ul className="space-y-1">
                      {packages.find(p => p.id === selectedPackage)?.includes.map((item, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      onClick={() => setIsDialogOpen(false)}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                    <Button 
                      onClick={handleBooking}
                      className="flex-1 bg-swiftly-blue hover:bg-swiftly-darkblue"
                    >
                      Confirm Booking
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HomeCleaning;
