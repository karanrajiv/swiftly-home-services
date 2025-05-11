
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-swiftly-blue">
              Swiftly
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-swiftly-blue font-medium">
              Home
            </Link>
            <a href="#services" className="text-gray-700 hover:text-swiftly-blue font-medium">
              Services
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-swiftly-blue font-medium">
              How It Works
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-swiftly-blue font-medium">
              Testimonials
            </a>
            <Button variant="default" className="bg-swiftly-blue hover:bg-swiftly-darkblue text-white">
              Book Now
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-swiftly-blue"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-swiftly-blue font-medium py-2"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
              <a 
                href="#services" 
                className="text-gray-700 hover:text-swiftly-blue font-medium py-2"
                onClick={toggleMobileMenu}
              >
                Services
              </a>
              <a 
                href="#how-it-works" 
                className="text-gray-700 hover:text-swiftly-blue font-medium py-2"
                onClick={toggleMobileMenu}
              >
                How It Works
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-700 hover:text-swiftly-blue font-medium py-2"
                onClick={toggleMobileMenu}
              >
                Testimonials
              </a>
              <Button 
                variant="default" 
                className="bg-swiftly-blue hover:bg-swiftly-darkblue text-white w-full"
                onClick={toggleMobileMenu}
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
