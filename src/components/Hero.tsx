
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = imageRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${y * -5}deg)`;
    };

    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    };

    const element = imageRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center bg-black text-white relative overflow-hidden pt-16">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px]"></div>
      </div>
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center relative z-10">
        <div className="flex flex-col space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gold-gradient leading-tight">
            Exquisite Jewelry For Extraordinary You
          </h1>
          <p className="text-lg text-gray-300 md:pr-12">
            Discover our collection of luxurious, handcrafted jewelry that makes every moment special and every outfit stunning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="gold-button rounded-none">
              Shop Collection
            </Button>
            <Button variant="outline" className="border-gold hover:bg-gold/10 text-gold rounded-none">
              Learn More
            </Button>
          </div>
        </div>
        
        <div 
          ref={imageRef}
          className="relative transition-all duration-200 ease-out animate-fade-in"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gold/20 group">
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=800&q=80" 
              alt="Luxury Jewelry" 
              className="w-full object-cover object-center hover-shine h-[500px]"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-2xl font-bold text-white">2025 Collection</h3>
              <p className="text-gold">Elegance Redefined</p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-gold opacity-70"></div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-gold opacity-70"></div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-lg animate-image-glow"></div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-gold text-sm mb-2">Scroll to explore</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-gold to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;
