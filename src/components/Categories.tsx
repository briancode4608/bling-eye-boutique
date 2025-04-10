
import React from "react";
import { Button } from "@/components/ui/button";

interface Category {
  id: number;
  name: string;
  image: string;
  count: number;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Rings",
    image: "https://images.unsplash.com/photo-1574740637579-73f1ff3f8ff1?auto=format&fit=crop&w=800&q=80",
    count: 42,
  },
  {
    id: 2,
    name: "Necklaces",
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=800&q=80",
    count: 36,
  },
  {
    id: 3,
    name: "Bracelets",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80",
    count: 28,
  },
];

const Categories = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Shop By <span className="gold-gradient">Category</span>
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Browse our curated collections of fine jewelry, crafted with exceptional materials and meticulous attention to detail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative h-[400px] overflow-hidden hover-shine"
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-3xl font-bold text-white mb-2">{category.name}</h3>
                <p className="text-gold mb-6">{category.count} Products</p>
                <Button className="gold-button rounded-none uppercase tracking-wider">
                  Explore
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
