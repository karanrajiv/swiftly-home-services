
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-swiftly-blue/10 to-blue-100 overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 py-20 pt-32 md:pt-40 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-swiftly-dark mb-6 leading-tight">
            Professional Home Services at Your Doorstep
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            From cleaning and repairs to plumbing and electrical work, we bring skilled professionals to your home with just a few clicks.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-swiftly-blue hover:bg-swiftly-darkblue text-white font-medium px-8 py-6 text-lg">
              Book a Service
            </Button>
            <Button size="lg" variant="outline" className="border-swiftly-blue text-swiftly-blue hover:bg-swiftly-blue/10 font-medium px-8 py-6 text-lg">
              Explore Services
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur rounded-lg p-4 shadow-sm">
              <div className="font-bold text-2xl text-swiftly-blue">500+</div>
              <div className="text-sm text-gray-600">Service Providers</div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-lg p-4 shadow-sm">
              <div className="font-bold text-2xl text-swiftly-blue">10k+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-lg p-4 shadow-sm">
              <div className="font-bold text-2xl text-swiftly-blue">15+</div>
              <div className="text-sm text-gray-600">Service Categories</div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-lg p-4 shadow-sm">
              <div className="font-bold text-2xl text-swiftly-blue">4.8</div>
              <div className="text-sm text-gray-600">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
