
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu, X, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold gold-gradient">BLING</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-white hover:text-gold transition-colors">
            Home
          </Link>
          <Link to="/shop" className="text-white hover:text-gold transition-colors">
            Shop
          </Link>
          <Link to="/collections" className="text-white hover:text-gold transition-colors">
            Collections
          </Link>
          <Link to="/about" className="text-white hover:text-gold transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-gold transition-colors">
            Contact
          </Link>
        </nav>

        {/* Shopping Bag and Search */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hover:text-gold">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-gold relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-black rounded-full text-xs flex items-center justify-center">
              0
            </span>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white hover:text-gold transition-colors"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 absolute top-full left-0 w-full animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              to="/"
              className="text-white hover:text-gold py-2 transition-colors"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-white hover:text-gold py-2 transition-colors"
              onClick={toggleMobileMenu}
            >
              Shop
            </Link>
            <Link
              to="/collections"
              className="text-white hover:text-gold py-2 transition-colors"
              onClick={toggleMobileMenu}
            >
              Collections
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-gold py-2 transition-colors"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-gold py-2 transition-colors"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
            <div className="flex items-center space-x-4 pt-2">
              <Button variant="ghost" size="icon" className="hover:text-gold">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-gold relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-black rounded-full text-xs flex items-center justify-center">
                  0
                </span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
