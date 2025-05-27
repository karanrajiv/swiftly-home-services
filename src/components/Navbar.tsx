import { useState, useEffect } from 'react';
import { Menu, X, User, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Badge } from '@/components/ui/badge';

interface User {
  email: string;
  name: string;
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const { getItemCount } = useCart();
  const navigate = useNavigate();
  
  // Check if user is logged in
  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      try {
        setCurrentUser(JSON.parse(userStr));
      } catch (err) {
        localStorage.removeItem("user");
      }
    }
  }, []);
  
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

  const handleLogout = () => {
    localStorage.removeItem("user");
    setCurrentUser(null);
    navigate("/");
    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
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
            
            {/* Cart Icon */}
            <Link to="/checkout" className="relative">
              <Button variant="ghost" size="icon" className="text-gray-700 hover:text-swiftly-blue">
                <ShoppingCart size={20} />
                {getItemCount() > 0 && (
                  <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {getItemCount()}
                  </Badge>
                )}
              </Button>
            </Link>
            
            {currentUser ? (
              <div className="flex items-center gap-4">
                <Link to="/dashboard" className="flex items-center gap-2 text-gray-700 hover:text-swiftly-blue font-medium">
                  <User size={18} />
                  {currentUser.name}
                </Link>
                <Button 
                  variant="outline" 
                  onClick={handleLogout}
                  className="border-swiftly-blue text-swiftly-blue hover:bg-swiftly-blue/10"
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link to="/login" className="text-gray-700 hover:text-swiftly-blue font-medium">
                  Sign In
                </Link>
                <Button variant="default" className="bg-swiftly-blue hover:bg-swiftly-darkblue text-white">
                  Book Now
                </Button>
              </div>
            )}
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
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <a 
                href="#services" 
                className="text-gray-700 hover:text-swiftly-blue font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#how-it-works" 
                className="text-gray-700 hover:text-swiftly-blue font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-700 hover:text-swiftly-blue font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              
              {/* Mobile Cart Icon */}
              <Link 
                to="/checkout" 
                className="flex items-center gap-2 text-gray-700 hover:text-swiftly-blue font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <ShoppingCart size={18} />
                Cart ({getItemCount()})
              </Link>
              
              {currentUser ? (
                <>
                  <Link 
                    to="/dashboard" 
                    className="flex items-center gap-2 text-gray-700 hover:text-swiftly-blue font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <User size={18} />
                    My Account
                  </Link>
                  <Button 
                    variant="outline" 
                    onClick={handleLogout}
                    className="border-swiftly-blue text-swiftly-blue hover:bg-swiftly-blue/10 w-full"
                  >
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className="text-gray-700 hover:text-swiftly-blue font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Button 
                    variant="default" 
                    className="bg-swiftly-blue hover:bg-swiftly-darkblue text-white w-full"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      navigate("/login");
                    }}
                  >
                    Book Now
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
