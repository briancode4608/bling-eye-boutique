
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, Heart, Share2, ShoppingBag, ArrowLeft, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

// Mock data - in a real app, this would come from an API
const products = [
  {
    id: "diamond-eternity",
    name: "Diamond Eternity Ring",
    description: "Handcrafted 18K gold ring with premium diamonds encircling the band, symbolizing never-ending love and commitment. Each diamond is carefully selected for its exceptional cut, clarity, and color.",
    price: 2499,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    category: "Rings",
    rating: 4.9,
    reviews: 124,
    details: [
      "18K Yellow Gold",
      "1.2 carat total diamond weight",
      "VS1-VS2 clarity, F-G color",
      "Accompanied by a certificate of authenticity",
      "Available in sizes 4-10"
    ],
    related: ["pearl-elegance", "sapphire-drop", "royal-gold"]
  },
  {
    id: "pearl-elegance",
    name: "Pearl Elegance Necklace",
    description: "Timeless design with genuine white South Sea pearls, each carefully hand-selected for exceptional luster and perfect roundness, with 18K gold chain and clasp.",
    price: 1899,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    category: "Necklaces",
    rating: 4.8,
    reviews: 98,
    details: [
      "18K White Gold",
      "9-11mm South Sea pearls",
      "Diamond accent clasp (0.15 carat)",
      "Adjustable 16-18 inch length",
      "Presented in a signature jewelry box"
    ],
    related: ["diamond-eternity", "sapphire-drop", "royal-gold"]
  },
  {
    id: "sapphire-drop",
    name: "Sapphire Drop Earrings",
    description: "Statement earrings featuring brilliant blue Ceylon sapphires surrounded by a halo of diamonds, creating a captivating sparkle that enhances any evening attire.",
    price: 1599,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    category: "Earrings",
    rating: 4.7,
    reviews: 86,
    details: [
      "18K Rose Gold",
      "2.5 carat total sapphire weight",
      "0.8 carat total diamond weight",
      "Secure lever back closures",
      "Ethically sourced gemstones"
    ],
    related: ["diamond-eternity", "pearl-elegance", "royal-gold"]
  },
  {
    id: "royal-gold",
    name: "Royal Gold Bracelet",
    description: "Intricately designed solid gold bracelet featuring a sophisticated pattern inspired by ancient royal jewelry, hand-finished by master artisans with decades of experience.",
    price: 3299,
    image: "https://images.unsplash.com/photo-1615655097441-a4b374fd9d4d?auto=format&fit=crop&w=800&q=80",
    category: "Bracelets",
    rating: 5.0,
    reviews: 72,
    details: [
      "22K Yellow Gold",
      "28 grams total weight",
      "Adjustable fit with secure clasp",
      "Intricate hand-engraved details",
      "Limited edition design"
    ],
    related: ["diamond-eternity", "pearl-elegance", "sapphire-drop"]
  }
];

const ProductDetail = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  
  // Find the product based on ID
  const product = products.find(p => p.id === productId);
  
  // Find related products
  const relatedProducts = product
    ? product.related
        .map(id => products.find(p => p.id === id))
        .filter(Boolean)
    : [];
  
  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-8">Sorry, the product you're looking for could not be found.</p>
          <Button asChild className="gold-button rounded-none">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const addToCart = () => {
    toast.success(`${quantity} ${product.name}${quantity > 1 ? 's' : ''} added to cart`);
  };

  const addToWishlist = () => {
    toast.success(`${product.name} added to wishlist`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 mb-8">
          <Link to="/" className="text-gray-500 hover:text-gold flex items-center gap-2 w-fit">
            <ArrowLeft className="h-4 w-4" />
            Back to shopping
          </Link>
        </div>
        
        {/* Product Section */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="relative overflow-hidden rounded-lg border border-gold/20 group">
              <div className="absolute top-4 right-4 z-10">
                <Badge className="bg-gold text-black font-medium px-3 py-1 rounded-none">
                  {product.category}
                </Badge>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10"></div>
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-[500px] object-cover object-center hover-shine transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Product Details */}
            <div className="flex flex-col space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-gold' : 'text-gray-300'}`} 
                        fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                  <span className="text-gold font-medium">{product.rating}</span>
                  <span className="text-gray-500">({product.reviews} reviews)</span>
                </div>
                <p className="text-2xl font-bold gold-gradient mb-4">
                  ${product.price.toLocaleString()}
                </p>
                <p className="text-gray-600 mb-6">
                  {product.description}
                </p>
              </div>
              
              {/* Quantity Selector */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium">Quantity</label>
                <div className="flex h-12 w-40">
                  <button 
                    onClick={decreaseQuantity} 
                    className="w-12 border border-input hover:bg-muted flex items-center justify-center"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <div className="flex-1 border-y border-input flex items-center justify-center font-medium">
                    {quantity}
                  </div>
                  <button 
                    onClick={increaseQuantity} 
                    className="w-12 border border-input hover:bg-muted flex items-center justify-center"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              {/* Product Details List */}
              <div className="border-t border-b border-border py-6">
                <h3 className="font-medium mb-4">Product Details</h3>
                <ul className="space-y-2">
                  {product.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-gold">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button 
                  onClick={addToCart}
                  className="gold-button rounded-none flex-1 gap-2"
                >
                  <ShoppingBag className="h-5 w-5" />
                  Add to Cart
                </Button>
                <Button 
                  onClick={addToWishlist}
                  variant="outline" 
                  className="border-gold hover:bg-gold/10 text-gold rounded-none flex-1 gap-2"
                >
                  <Heart className="h-5 w-5" />
                  Add to Wishlist
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gold hover:bg-gold/10 text-gold rounded-none w-12 sm:w-auto"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Related Products */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold mb-8">
              You May Also <span className="gold-gradient">Love</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((related) => (
                <Link 
                  key={related?.id} 
                  to={`/product/${related?.id}`} 
                  className="group relative overflow-hidden hover-shine"
                >
                  <div className="relative overflow-hidden aspect-square bg-gray-200">
                    <img
                      src={related?.image}
                      alt={related?.name}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="text-xl font-semibold font-serif">{related?.name}</h3>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-lg font-bold text-black">
                        ${related?.price.toLocaleString()}
                      </span>
                      <Button
                        variant="outline"
                        className="bg-transparent hover:bg-gold hover:text-black border-gold text-gold rounded-none h-8 px-3 transition-colors duration-300"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
