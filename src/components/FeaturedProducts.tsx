
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Diamond Eternity Ring",
    description: "Handcrafted 18K gold ring with premium diamonds",
    price: 2499,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    category: "Rings",
  },
  {
    id: 2,
    name: "Pearl Elegance Necklace",
    description: "Timeless design with genuine white pearls",
    price: 1899,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    category: "Necklaces",
  },
  {
    id: 3,
    name: "Sapphire Drop Earrings",
    description: "Statement earrings with brilliant blue sapphires",
    price: 1599,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    category: "Earrings",
  },
  {
    id: 4,
    name: "Royal Gold Bracelet",
    description: "Intricately designed solid gold bracelet",
    price: 3299,
    image: "https://images.unsplash.com/photo-1615655097441-a4b374fd9d4d?auto=format&fit=crop&w=800&q=80",
    category: "Bracelets",
  },
];

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group relative overflow-hidden">
      <div className="relative overflow-hidden aspect-square bg-gray-200 hover-shine">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
      </div>
      <div className="absolute top-4 right-4">
        <span className="bg-black text-gold px-3 py-1 text-xs uppercase tracking-wider">
          {product.category}
        </span>
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-xl font-semibold font-serif">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{product.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-black">
            ${product.price.toLocaleString()}
          </span>
          <Button
            variant="outline"
            className="bg-transparent hover:bg-gold hover:text-black border-gold text-gold rounded-none h-8 px-3 transition-colors duration-300"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured <span className="gold-gradient">Collections</span>
            </h2>
            <p className="text-gray-600 mt-2">
              Explore our most popular and exclusive pieces
            </p>
          </div>
          <Button
            variant="link"
            className="text-black hover:text-gold transition-colors flex items-center mt-4 md:mt-0"
          >
            View All Collections <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
