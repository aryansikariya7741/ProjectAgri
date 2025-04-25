import React, { useState } from 'react';
import { Search, Filter, Plus, ChevronDown } from 'lucide-react';
import BiddingCard from '../components/BiddingCard';

const BiddingSystem: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Mock data for crop listings
  const cropListings = [
    {
      id: '1',
      cropName: 'Premium Basmati Rice',
      farmerName: 'Rajesh Kumar',
      location: 'Haryana, India',
      quantity: '5 Tons',
      quality: 'Premium',
      basePrice: 32000,
      currentBid: 35600,
      bidCount: 12,
      expiresIn: '2 days',
      harvestDate: 'Oct 15, 2025',
      imageUrl: 'https://images.pexels.com/photos/7469106/pexels-photo-7469106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '2',
      cropName: 'Organic Wheat',
      farmerName: 'Anand Singh',
      location: 'Punjab, India',
      quantity: '8 Tons',
      quality: 'Organic',
      basePrice: 28000,
      currentBid: 30500,
      bidCount: 8,
      expiresIn: '1 day',
      harvestDate: 'Oct 20, 2025',
      imageUrl: 'https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '3',
      cropName: 'Fresh Tomatoes',
      farmerName: 'Priya Patel',
      location: 'Gujarat, India',
      quantity: '2 Tons',
      quality: 'Grade A',
      basePrice: 18000,
      currentBid: 19500,
      bidCount: 5,
      expiresIn: '3 days',
      harvestDate: 'Oct 10, 2025',
      imageUrl: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '4',
      cropName: 'Yellow Corn',
      farmerName: 'Vijay Reddy',
      location: 'Telangana, India',
      quantity: '10 Tons',
      quality: 'Standard',
      basePrice: 21000,
      currentBid: 22800,
      bidCount: 7,
      expiresIn: '4 days',
      harvestDate: 'Nov 5, 2025',
      imageUrl: 'https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '5',
      cropName: 'Organic Sugarcane',
      farmerName: 'Mahesh Sharma',
      location: 'Maharashtra, India',
      quantity: '15 Tons',
      quality: 'Organic',
      basePrice: 45000,
      currentBid: 48200,
      bidCount: 10,
      expiresIn: '2 days',
      harvestDate: 'Oct 30, 2025',
      imageUrl: 'https://images.pexels.com/photos/2929906/pexels-photo-2929906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '6',
      cropName: 'Cotton',
      farmerName: 'Suresh Patil',
      location: 'Maharashtra, India',
      quantity: '7 Tons',
      quality: 'Premium',
      basePrice: 52000,
      currentBid: 56500,
      bidCount: 15,
      expiresIn: '1 day',
      harvestDate: 'Nov 10, 2025',
      imageUrl: 'https://images.pexels.com/photos/6156415/pexels-photo-6156415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  const filteredListings = cropListings.filter((crop) => {
    if (filter === 'all') return true;
    if (filter === 'premium' && crop.quality === 'Premium') return true;
    if (filter === 'organic' && crop.quality === 'Organic') return true;
    if (filter === 'standard' && crop.quality === 'Standard') return true;
    if (filter === 'gradeA' && crop.quality === 'Grade A') return true;
    return false;
  }).filter((crop) => {
    if (!searchQuery) return true;
    return crop.cropName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      crop.location.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="space-y-6 fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Crop Bidding System</h1>
        <button className="bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg flex items-center transition-colors">
          <Plus size={18} className="mr-1" />
          List Your Crop
        </button>
      </div>
      
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search crops by name, location..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center transition-colors"
            >
              <Filter size={18} className="mr-2" />
              Filters
              <ChevronDown size={18} className="ml-1" />
            </button>
            <select
              className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg border-none focus:ring-2 focus:ring-primary-500"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Crops</option>
              <option value="premium">Premium</option>
              <option value="organic">Organic</option>
              <option value="standard">Standard</option>
              <option value="gradeA">Grade A</option>
            </select>
          </div>
        </div>
        
        {showFilters && (
          <div className="mt-4 p-4 border border-gray-200 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-4 slide-in">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price Range
              </label>
              <div className="flex items-center gap-2">
                <input 
                  type="number" 
                  placeholder="Min" 
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
                <span className="text-gray-500">to</span>
                <input 
                  type="number" 
                  placeholder="Max" 
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Harvest Date
              </label>
              <input 
                type="date" 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Region
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                <option value="">All Regions</option>
                <option value="punjab">Punjab</option>
                <option value="haryana">Haryana</option>
                <option value="gujarat">Gujarat</option>
                <option value="maharashtra">Maharashtra</option>
                <option value="telangana">Telangana</option>
              </select>
            </div>
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredListings.map((crop) => (
          <BiddingCard
            key={crop.id}
            id={crop.id}
            cropName={crop.cropName}
            farmerName={crop.farmerName}
            location={crop.location}
            quantity={crop.quantity}
            quality={crop.quality}
            basePrice={crop.basePrice}
            currentBid={crop.currentBid}
            bidCount={crop.bidCount}
            expiresIn={crop.expiresIn}
            harvestDate={crop.harvestDate}
            imageUrl={crop.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default BiddingSystem;