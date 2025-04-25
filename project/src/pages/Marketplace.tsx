import React, { useState } from 'react';
import { Search, Filter, TrendingUp, Star, ArrowDownUp } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const Marketplace: React.FC = () => {
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for products
  const products = [
    {
      id: '1',
      name: 'Premium Quality Seeds',
      category: 'Seeds',
      price: 1200,
      rating: 4.8,
      reviewCount: 124,
      discount: 15,
      imageUrl: 'https://images.pexels.com/photos/8105066/pexels-photo-8105066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '2',
      name: 'Organic Fertilizer 5kg',
      category: 'Fertilizers',
      price: 850,
      rating: 4.6,
      reviewCount: 89,
      discount: 0,
      imageUrl: 'https://images.pexels.com/photos/9069396/pexels-photo-9069396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '3',
      name: 'Pesticide Spray Set',
      category: 'Pesticides',
      price: 1500,
      rating: 4.2,
      reviewCount: 56,
      discount: 10,
      imageUrl: 'https://images.pexels.com/photos/2132271/pexels-photo-2132271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '4',
      name: 'Soil Testing Kit',
      category: 'Tools',
      price: 2200,
      rating: 4.9,
      reviewCount: 210,
      discount: 0,
      imageUrl: 'https://images.pexels.com/photos/5273044/pexels-photo-5273044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '5',
      name: 'Garden Hand Tools Set',
      category: 'Tools',
      price: 1800,
      rating: 4.7,
      reviewCount: 95,
      discount: 20,
      imageUrl: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '6',
      name: 'Irrigation Drip System',
      category: 'Equipment',
      price: 3500,
      rating: 4.4,
      reviewCount: 78,
      discount: 5,
      imageUrl: 'https://images.pexels.com/photos/4947080/pexels-photo-4947080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '7',
      name: 'Crop Monitoring IoT Device',
      category: 'IoT Devices',
      price: 5000,
      rating: 4.3,
      reviewCount: 42,
      discount: 0,
      imageUrl: 'https://images.pexels.com/photos/8544639/pexels-photo-8544639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '8',
      name: 'Protective Farming Gloves',
      category: 'Tools',
      price: 450,
      rating: 4.5,
      reviewCount: 112,
      discount: 0,
      imageUrl: 'https://images.pexels.com/photos/1301643/pexels-photo-1301643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '9',
      name: 'Water Pump 1HP',
      category: 'Equipment',
      price: 7500,
      rating: 4.1,
      reviewCount: 68,
      discount: 12,
      imageUrl: 'https://images.pexels.com/photos/3866543/pexels-photo-3866543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  const filteredProducts = products.filter((product) => {
    if (category === 'all') return true;
    return product.category.toLowerCase() === category.toLowerCase();
  }).filter((product) => {
    if (!searchQuery) return true;
    return product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    // Default: popular (by review count)
    return b.reviewCount - a.reviewCount;
  });

  const categories = ['all', 'Seeds', 'Fertilizers', 'Pesticides', 'Tools', 'Equipment', 'IoT Devices'];

  return (
    <div className="space-y-6 fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Agricultural Marketplace</h1>
      </div>
      
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <select
              className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg border-none focus:ring-2 focus:ring-primary-500"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <div className="px-4 py-2 bg-gray-100 rounded-lg flex items-center">
              <Filter size={18} className="mr-2 text-gray-500" />
              <span className="text-gray-700">Filter</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex overflow-x-auto py-2 mb-4 gap-2 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              category === cat
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {cat === 'all' ? 'All Categories' : cat}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
            rating={product.rating}
            reviewCount={product.reviewCount}
            discount={product.discount}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Marketplace;