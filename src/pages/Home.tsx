import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Leaf, Award } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

export const Home = () => {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=2850&q=80"
            alt="Coffee shop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Discover the Art of Coffee</h1>
            <p className="text-xl mb-8">Expertly sourced and carefully roasted for the perfect cup</p>
            <Link
              to="/products"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full text-lg font-semibold inline-block"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Coffee className="h-12 w-12 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Beans</h3>
              <p className="text-gray-600">Sourced from the world's finest coffee regions</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Leaf className="h-12 w-12 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainable</h3>
              <p className="text-gray-600">Committed to ethical and eco-friendly practices</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Roasting</h3>
              <p className="text-gray-600">Crafted by experienced master roasters</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} featured />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};