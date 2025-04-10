
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gold/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <h1 className="text-3xl font-bold gold-gradient">BLING</h1>
            </Link>
            <p className="text-gray-400 mt-4">
              Exquisite jewelry for the modern connoisseur, crafted with passion and precision.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-gray-400 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/collections" className="text-gray-400 hover:text-gold transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="text-gray-400 hover:text-gold transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/bestsellers" className="text-gray-400 hover:text-gold transition-colors">
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link to="/sale" className="text-gray-400 hover:text-gold transition-colors">
                  Special Offers
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">About</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/our-story" className="text-gray-400 hover:text-gold transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/craftsmanship" className="text-gray-400 hover:text-gold transition-colors">
                  Craftsmanship
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-gray-400 hover:text-gold transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-gray-400 hover:text-gold transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-gold transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-400 hover:text-gold transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/care" className="text-gray-400 hover:text-gold transition-colors">
                  Jewelry Care
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Bling Jewelry. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-gray-500 text-sm hover:text-gold transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-gray-500 text-sm hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="text-gray-500 text-sm hover:text-gold transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
