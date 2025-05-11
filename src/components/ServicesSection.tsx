
import { 
  Home, 
  Settings, 
  Briefcase, 
  ShieldCheck, 
  Clock, 
  PaintBucket, 
  Sofa, 
  ShowerHead, 
  Fan 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Home Cleaning",
    description: "Professional deep cleaning services for your entire home.",
    color: "bg-blue-50",
    iconColor: "text-swiftly-blue",
  },
  {
    icon: Settings,
    title: "Appliance Repair",
    description: "Expert repair services for all your home appliances.",
    color: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Briefcase,
    title: "Plumbing",
    description: "Skilled plumbers to fix all your plumbing issues.",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: PaintBucket,
    title: "Painting",
    description: "Transform your space with professional painting services.",
    color: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: ShowerHead,
    title: "Bathroom Cleaning",
    description: "Spotless and sanitized bathrooms with professional cleaning.",
    color: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    icon: Fan,
    title: "AC Repair & Service",
    description: "Keep cool with our expert AC repair and maintenance.",
    color: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    icon: Sofa,
    title: "Furniture Assembly",
    description: "Get your new furniture professionally assembled.",
    color: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: ShieldCheck,
    title: "Pest Control",
    description: "Effective pest control solutions for your home.",
    color: "bg-red-50",
    iconColor: "text-red-600",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-swiftly-dark">
            Our Professional Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Book experienced, background-verified professionals for all your home service needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-all">
                <CardContent className={`p-6 ${service.color}`}>
                  <div className="flex flex-col items-center text-center">
                    <div className={`mb-4 p-3 rounded-full ${service.color} ${service.iconColor}`}>
                      <service.icon size={32} />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-swiftly-blue hover:bg-swiftly-darkblue text-white font-medium px-6 py-3 rounded-md transition-colors">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
