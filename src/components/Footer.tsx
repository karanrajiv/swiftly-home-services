
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-white">Swiftly</span>
            </div>
            <p className="mb-6 text-gray-400">
              Connecting you with professional, verified service providers for all your home needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/home-cleaning" className="text-gray-400 hover:text-white transition-colors">
                  Home Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services/plumbing" className="text-gray-400 hover:text-white transition-colors">
                  Plumbing
                </Link>
              </li>
              <li>
                <Link to="/services/appliance-repair" className="text-gray-400 hover:text-white transition-colors">
                  Appliance Repair
                </Link>
              </li>
              <li>
                <Link to="/services/painting" className="text-gray-400 hover:text-white transition-colors">
                  Painting
                </Link>
              </li>
              <li>
                <Link to="/services/furniture-assembly" className="text-gray-400 hover:text-white transition-colors">
                  Furniture Assembly
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-swiftly-blue" />
                <span>Dublin, Ireland</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-swiftly-blue" />
                <span>+353892145984</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-swiftly-blue" />
                <span>+353892477816</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-swiftly-blue" />
                <span>gowithswiftly@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Swiftly. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex justify-center md:justify-end space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
