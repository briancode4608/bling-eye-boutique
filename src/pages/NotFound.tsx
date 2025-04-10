
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-black">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-9xl font-bold gold-gradient mb-4">404</h1>
          <p className="text-2xl text-white mb-8">
            This page has been misplaced like a precious gem.
          </p>
          <Button asChild className="gold-button rounded-none uppercase tracking-wider">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
