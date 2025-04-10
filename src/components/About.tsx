
import React from "react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507034589631-9433cc6bc453?auto=format&fit=crop&w=800&q=80"
                alt="Jewelry Craftsmanship"
                className="w-full h-auto hover-shine"
              />
              <div className="absolute inset-0 border border-gold/30"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold opacity-70"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold opacity-70"></div>
          </div>
          
          <div className="flex flex-col space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Craftsmanship That <span className="gold-gradient">Defines Luxury</span>
            </h2>
            
            <p className="text-gray-300">
              Since 2010, Bling has been creating exquisite jewelry pieces that combine traditional craftsmanship with contemporary design. Every piece tells a story of elegance, passion, and uncompromising quality.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <h3 className="text-gold text-xl font-serif mb-2">Ethically Sourced</h3>
                <p className="text-gray-400 text-sm">
                  We ensure all our materials are responsibly sourced and conflict-free.
                </p>
              </div>
              
              <div>
                <h3 className="text-gold text-xl font-serif mb-2">Handcrafted</h3>
                <p className="text-gray-400 text-sm">
                  Each piece is meticulously crafted by our master artisans.
                </p>
              </div>
              
              <div>
                <h3 className="text-gold text-xl font-serif mb-2">Lifetime Warranty</h3>
                <p className="text-gray-400 text-sm">
                  We stand behind our quality with comprehensive after-sales service.
                </p>
              </div>
              
              <div>
                <h3 className="text-gold text-xl font-serif mb-2">Custom Design</h3>
                <p className="text-gray-400 text-sm">
                  Create bespoke pieces that perfectly express your personal style.
                </p>
              </div>
            </div>
            
            <div className="pt-4">
              <Button className="gold-button rounded-none uppercase tracking-wider">
                Our Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
