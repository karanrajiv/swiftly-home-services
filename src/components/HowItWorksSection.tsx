
import { Search, Calendar, Star } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Book in 60 Seconds",
    description: "Select the service you need and choose your preferred time slot",
    color: "bg-blue-500",
  },
  {
    icon: Calendar,
    title: "Get Expert Service",
    description: "Our verified professionals will perform the service at your doorstep",
    color: "bg-green-500",
  },
  {
    icon: Star,
    title: "Enjoy & Rate",
    description: "Sit back, relax and rate your experience after the service",
    color: "bg-purple-500",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-swiftly-dark">
            How Swiftly Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Booking a home service has never been easier
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[calc(100%_-_16px)] w-[calc(100%_-_64px)] h-[2px] bg-gray-200 z-0"></div>
              )}
              <div className="bg-white rounded-lg p-6 relative z-10 text-center hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className={`${step.color} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <step.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-swiftly-gray rounded-xl p-6 md:p-10 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-swiftly-dark">
                Download Our Mobile App
              </h3>
              <p className="text-gray-600 mb-6">
                Get the full Swiftly experience on your smartphone. Book and manage services on the go!
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center">
                  <svg className="w-7 h-7 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.6.75c.3 0 .7.2.9.5.2.3.2.6 0 .9-.1.3-.4.5-.7.6 1.7.6 3.1 1.6 4.3 3 1.2 1.4 2 3.1 2.3 5 .1.4-.1.8-.4 1-.3.2-.7.2-1.1 0-.3-.2-.5-.5-.6-.9-.2-1.5-.8-2.8-1.8-4-.9-1.1-2.1-2-3.5-2.4-.3.3-.7.5-1.1.5-.4 0-.8-.2-1.1-.5-1.4.5-2.6 1.3-3.5 2.4-.9 1.2-1.6 2.5-1.8 4-.1.4-.3.7-.6.9-.3.2-.7.2-1.1 0-.3-.2-.5-.6-.4-1 .3-1.9 1.1-3.6 2.3-5 1.2-1.4 2.6-2.5 4.3-3-.3-.1-.6-.3-.7-.6-.2-.3-.1-.7 0-.9.3-.3.6-.5.9-.5h2.3zm-1.2 2c-.4 0-.8 0-1.1.1v12.3c0 .4.2.8.5 1 .3.3.7.4 1.1.4h.2c.4 0 .8-.1 1.1-.4.3-.2.5-.6.5-1V2.85c-.3-.1-.7-.1-1.1-.1h-1.2z" fill="currentColor"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-medium">App Store</div>
                  </div>
                </button>
                <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center">
                  <svg className="w-7 h-7 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.26 2.82C4.7 3.39 4.33 4.2 4.33 5.16C4.33 6.1 4.68 7.01 5.24 7.57C5.79 8.14 6.6 8.54 7.55 8.54H7.65C7.08 9.23 6.78 10.21 6.78 11.01C6.78 11.79 7.08 12.5 7.55 13.07L7.74 13.26L6.94 13.38C4.38 13.66 2.5 15.65 2.5 17.91C2.5 19.2 3.09 20.33 4.07 21.17C5.01 21.99 6.35 22.4 7.82 22.4C11.67 22.4 13.77 19.65 13.77 16.92C13.77 15.07 12.63 13.91 11.36 12.69L10.6 11.95C10.23 11.58 9.96 11.1 9.96 10.59C9.96 10.07 10.22 9.68 10.47 9.39C10.63 9.22 10.8 9.05 10.99 8.9C11.49 9.19 12.06 9.38 12.68 9.38C14.14 9.38 15.37 8.7 16.12 7.62C16.84 6.6 17.12 5.28 17.12 4.06C17.12 3.31 16.97 2.62 16.7 2H19.67C19.85 2 20 1.85 20 1.67V1.33C20 1.15 19.85 1 19.67 1H12.69C12.39 1 12.08 1.02 11.79 1.07C11.33 1.15 10.85 1.29 10.41 1.49C9.09 2.05 8.17 3.14 7.69 4.36C7.39 3.78 7.01 3.29 6.6 2.92C6.04 2.43 5.4 2.13 4.74 2.04C4.35 2 3.96 1.99 3.55 2.03C3.35 2.05 3.19 2.25 3.21 2.45C3.23 2.64 3.41 2.78 3.59 2.77C3.95 2.74 4.3 2.75 4.63 2.78C5.14 2.85 5.6 3.08 6.01 3.45C6.44 3.82 6.77 4.33 6.96 5.03C6.94 5.22 6.93 5.41 6.93 5.61C6.93 6.76 7.23 7.71 7.8 8.4C7.7 8.41 7.59 8.42 7.48 8.42C6.87 8.42 6.3 8.12 5.9 7.69C5.49 7.28 5.24 6.65 5.24 5.95C5.24 5.13 5.47 4.57 5.84 4.18C6.22 3.78 6.71 3.55 7.23 3.47C7.38 3.44 7.5 3.31 7.5 3.16C7.51 3 7.4 2.87 7.25 2.84C6.54 2.69 5.83 2.66 5.26 2.82ZM12.7 8.48C11.57 8.48 10.71 7.48 10.16 6.22C9.63 5 9.55 3.67 9.98 2.84C10.27 2.27 10.82 1.9 11.61 1.9H11.79C12.38 1.9 12.84 2.05 13.25 2.27C13.64 2.48 13.99 2.78 14.3 3.16C14.85 3.85 15.17 4.82 15.17 5.77C15.17 6.55 15.02 7.36 14.6 8C14.16 8.66 13.54 8.99 12.75 8.48H12.7ZM7.82 21.5C6.59 21.5 5.48 21.15 4.69 20.47C3.9 19.79 3.42 18.84 3.42 17.81C3.42 15.88 5.09 14.27 7.27 14.27C7.46 14.27 7.65 14.28 7.84 14.31C7.97 14.33 8.11 14.3 8.22 14.22C8.32 14.14 8.38 14.02 8.38 13.9C8.38 13.82 8.36 13.73 8.31 13.66C8.24 13.54 8.16 13.43 8.08 13.31C7.88 13.02 7.67 12.72 7.67 12.31C7.67 11.97 7.79 11.64 8.05 11.32C8.14 11.21 8.24 11.1 8.34 11C8.4 10.95 8.41 10.85 8.38 10.77C8.35 10.68 8.28 10.62 8.19 10.6C8 10.56 7.79 10.54 7.58 10.54C6.36 10.54 5.23 11.06 4.44 11.91C3.65 12.75 3.22 13.87 3.22 14.99C3.22 16.05 3.69 17.02 4.46 17.71C5.23 18.4 6.31 18.83 7.5 18.83H7.53C7.72 18.83 7.87 18.68 7.88 18.5C7.88 18.31 7.73 18.16 7.55 18.15C6.54 18.09 5.68 17.71 5.09 17.17C4.5 16.63 4.16 15.89 4.16 15.15C4.16 14.29 4.5 13.49 5.09 12.91C5.67 12.33 6.49 12 7.35 12C7.47 12 7.59 12.01 7.7 12.02C7.33 12.5 7.12 13.04 7.12 13.6C7.12 14.2 7.38 14.76 7.63 15.16L7.71 15.28C7.81 15.44 7.92 15.6 7.92 15.79C7.92 15.92 7.88 16.02 7.82 16.11C7.72 16.25 7.57 16.34 7.41 16.38C7.21 16.43 7 16.46 6.8 16.47C6.61 16.48 6.47 16.64 6.47 16.83C6.48 17.02 6.63 17.17 6.82 17.16C7.06 17.15 7.3 17.12 7.55 17.06C7.89 16.97 8.2 16.78 8.39 16.5C8.54 16.28 8.62 16.02 8.62 15.74C8.62 15.37 8.49 15.05 8.34 14.79C8.76 14.91 9.2 15.1 9.62 15.37C10.85 16.11 11.85 17.17 11.85 18.3C11.85 19.2 11.42 19.99 10.66 20.55C9.9 21.11 8.84 21.5 7.82 21.5Z" fill="currentColor"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-sm font-medium">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Swiftly Mobile App" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
