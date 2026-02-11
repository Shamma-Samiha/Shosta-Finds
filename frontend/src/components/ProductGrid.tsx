import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

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

interface ProductGridProps {
  category?: string;
  title: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ category, title }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const url = category 
          ? `http://localhost:8000/api/products/by_category/?category=${category}`
          : `http://localhost:8000/api/products/`;
        const response = await axios.get(url);
        setProducts(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to load products. Please make sure the backend server is running.');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500 mx-auto mb-4"></div>
          <p className="text-white text-xl font-bold">Loading amazing products...</p>
          <p className="text-gray-400 mt-2">{category ? `Category: ${category}` : 'All Categories'}</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="bg-red-900 bg-opacity-50 border border-red-500 rounded-lg p-6 max-w-md">
          <h3 className="text-red-200 text-xl font-bold mb-2">Oops!</h3>
          <p className="text-red-100">{error}</p>
           <p className="text-white mt-4">API URL: {category ? `http://localhost:8000/api/products/by_category/?category=${category}` : 'http://localhost:8000/api/products/'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 md:p-10 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 mb-8 text-center">
          {title}
        </h1>
        
        <p className="text-center text-gray-400 mb-4">Found {products.length} products</p>
        
        {products.length === 0 ? (
          <div className="text-center text-gray-400 text-xl mt-20">
            No products available in this category yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
