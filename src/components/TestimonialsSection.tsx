
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    quote: "Swiftly has been a game-changer for my busy household! The cleaning service was exceptional, and the professional was punctual and thorough. Will definitely use again.",
    rating: 5,
    service: "Home Cleaning",
  },
  {
    id: 2,
    name: "Michael Thompson",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    quote: "As a business owner, I don't have time to deal with plumbing issues. Swiftly connected me with an experienced plumber who fixed everything in one visit. Highly recommended!",
    rating: 5,
    service: "Plumbing",
  },
  {
    id: 3,
    name: "Jessica Williams",
    role: "Working Professional",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    quote: "I was skeptical about booking services online, but Swiftly exceeded my expectations. The AC repair technician was knowledgeable and fixed my unit quickly. Great service!",
    rating: 4,
    service: "AC Repair",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-swiftly-blue/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-swiftly-dark">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it — hear from our satisfied customers
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="w-full md:w-1/3">
              <div className="aspect-square rounded-full overflow-hidden border-4 border-swiftly-blue/20 mx-auto md:mx-0 w-40 h-40">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="w-full md:w-2/3 text-center md:text-left">
              <div className="flex items-center mb-2 justify-center md:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    className={i < testimonials[activeIndex].rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
                  />
                ))}
              </div>
              <h3 className="text-lg text-swiftly-blue font-medium mb-1">
                {testimonials[activeIndex].service}
              </h3>
              <p className="italic text-gray-700 mb-6 text-lg">
                "{testimonials[activeIndex].quote}"
              </p>
              <div className="font-bold text-xl">{testimonials[activeIndex].name}</div>
              <p className="text-gray-600">{testimonials[activeIndex].role}</p>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-3">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full" 
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            {testimonials.map((_, index) => (
              <span 
                key={index} 
                className={`block w-3 h-3 rounded-full ${
                  index === activeIndex ? "bg-swiftly-blue" : "bg-gray-300"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
