import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { dispatch } = useCart();

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
          <button
            onClick={() => navigate('/products')}
            className="text-amber-600 hover:text-amber-700 flex items-center space-x-2"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Products</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/products')}
          className="text-amber-600 hover:text-amber-700 flex items-center space-x-2 mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Products</span>
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0 md:w-1/2">
              <img
                className="h-96 w-full object-cover md:h-full"
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className="p-8 md:w-1/2">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Details</h2>
                <dl className="space-y-3">
                  {product.details.origin && (
                    <div>
                      <dt className="text-gray-500">Origin</dt>
                      <dd className="text-gray-900">{product.details.origin}</dd>
                    </div>
                  )}
                  {product.details.roastLevel && (
                    <div>
                      <dt className="text-gray-500">Roast Level</dt>
                      <dd className="text-gray-900">{product.details.roastLevel}</dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-gray-500">Flavor Notes</dt>
                    <dd className="text-gray-900">{product.details.flavorNotes.join(', ')}</dd>
                  </div>
                  {product.details.preparation && (
                    <div>
                      <dt className="text-gray-500">Preparation</dt>
                      <dd className="text-gray-900">{product.details.preparation}</dd>
                    </div>
                  )}
                </dl>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-amber-800">
                  ${product.price.toFixed(2)}
                </span>
                <button
                  onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full flex items-center space-x-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};