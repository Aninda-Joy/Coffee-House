import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar = () => {
  const { state } = useCart();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-amber-800" />
            <span className="text-xl font-semibold text-amber-900">Artisan Coffee</span>
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-amber-800">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-amber-800">Products</Link>
            <Link to="" className="text-gray-700 hover:text-amber-800">About us</Link>
            
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-amber-800" />
              {state.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {state.items.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};