import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number | string;
  category: string;
  image_url: string;
  stock: number;
  is_featured: boolean;
  rating: number | string;
}

interface ProductCardProps {
  product: Product;
}

const CONVERSION_RATE = 120;

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [imageError, setImageError] = useState(false);
  const fallbackImage = 'https://images.unsplash.com/photo-1594122230689-45899d9e6f69?w=500&q=80'; // Clean placeholder

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden bg-gray-700">
        <img
          src={imageError ? fallbackImage : product.image_url}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          onError={() => setImageError(true)}
        />
        {product.is_featured && (
          <span className="absolute top-2 right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            Featured
          </span>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-2 truncate">{product.name}</h3>
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between mb-2">
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            ৳{(Number(product.price) * CONVERSION_RATE).toLocaleString()}
          </span>
          <div className="flex items-center">
            <span className="text-yellow-400 mr-1">★</span>
            <span className="text-white font-semibold">{Number(product.rating).toFixed(1)}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className={`text-sm ${product.stock > 0 ? 'text-green-400' : 'text-red-400'}`}>
            {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
          </span>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
