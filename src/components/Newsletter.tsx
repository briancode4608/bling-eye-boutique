
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-black via-gray-900 to-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our <span className="gold-gradient">Inner Circle</span>
          </h2>
          
          <p className="text-gray-300 mb-8">
            Subscribe to receive exclusive updates on new collections, special offers, and styling tips. Be the first to know about our limited edition pieces.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-white/10 border-gold/30 text-white placeholder:text-gray-400 focus:border-gold rounded-none"
            />
            <Button className="gold-button rounded-none uppercase tracking-wider whitespace-nowrap">
              Subscribe
            </Button>
          </form>
          
          <p className="text-gray-400 text-sm mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
