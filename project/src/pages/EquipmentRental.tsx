import React, { useState } from 'react';
import { Search, Filter, Calendar, MapPin } from 'lucide-react';
import EquipmentCard from '../components/EquipmentCard';

const EquipmentRental: React.FC = () => {
  const [equipmentType, setEquipmentType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');

  // Mock data for equipment
  const equipmentList = [
    {
      id: '1',
      name: 'John Deere 5E Tractor',
      type: 'Tractor',
      owner: 'Singh Equipment Services',
      location: 'Amritsar, Punjab',
      pricePerDay: 2800,
      rating: 4.8,
      reviewCount: 126,
      availability: 'Available Today',
      imageUrl: 'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '2',
      name: 'Mahindra 575 DI Tractor',
      type: 'Tractor',
      owner: 'Kumar Rental Services',
      location: 'Sonipat, Haryana',
      pricePerDay: 2500,
      rating: 4.6,
      reviewCount: 87,
      availability: 'Available from Oct 15',
      imageUrl: 'https://images.pexels.com/photos/6160621/pexels-photo-6160621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '3',
      name: 'Paddy Harvester',
      type: 'Harvester',
      owner: 'Patel Equipment Co.',
      location: 'Ahmedabad, Gujarat',
      pricePerDay: 5000,
      rating: 4.3,
      reviewCount: 52,
      availability: 'Available Today',
      imageUrl: 'https://images.pexels.com/photos/6152101/pexels-photo-6152101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '4',
      name: 'Rotavator 5 FT',
      type: 'Plough',
      owner: 'Sharma Agricultural Tools',
      location: 'Jaipur, Rajasthan',
      pricePerDay: 1200,
      rating: 4.5,
      reviewCount: 76,
      availability: 'Available from Oct 20',
      imageUrl: 'https://images.pexels.com/photos/6152109/pexels-photo-6152109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '5',
      name: 'Seed Drill',
      type: 'Seeder',
      owner: 'Verma Equipments',
      location: 'Bhopal, MP',
      pricePerDay: 1000,
      rating: 4.2,
      reviewCount: 42,
      availability: 'Available Today',
      imageUrl: 'https://images.pexels.com/photos/2346001/pexels-photo-2346001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '6',
      name: 'Boom Sprayer',
      type: 'Sprayer',
      owner: 'Reddy Farm Solutions',
      location: 'Hyderabad, Telangana',
      pricePerDay: 800,
      rating: 4.7,
      reviewCount: 61,
      availability: 'Available Today',
      imageUrl: 'https://images.pexels.com/photos/4947087/pexels-photo-4947087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  const filteredEquipment = equipmentList.filter((equipment) => {
    // Filter by type
    if (equipmentType !== 'all' && equipment.type.toLowerCase() !== equipmentType.toLowerCase()) {
      return false;
    }
    
    // Filter by search query (name or owner)
    if (searchQuery && !equipment.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !equipment.owner.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Filter by location
    if (location && !equipment.location.toLowerCase().includes(location.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  const equipmentTypes = ['all', 'Tractor', 'Harvester', 'Plough', 'Seeder', 'Sprayer'];

  return (
    <div className="space-y-6 fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Equipment Rental</h1>
        <button className="bg-secondary-600 hover:bg-secondary-700 text-white py-2 px-4 rounded-lg flex items-center transition-colors">
          List Your Equipment
        </button>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Find Equipment Near You</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search equipment..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Location"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="date"
              placeholder="Date"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <button className="bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg transition-colors">
            Search Equipment
          </button>
        </div>
      </div>
      
      <div className="flex overflow-x-auto py-2 mb-4 gap-2 scrollbar-hide">
        {equipmentTypes.map((type) => (
          <button
            key={type}
            onClick={() => setEquipmentType(type)}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              equipmentType === type
                ? 'bg-secondary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {type === 'all' ? 'All Equipment' : type}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEquipment.map((equipment) => (
          <EquipmentCard
            key={equipment.id}
            id={equipment.id}
            name={equipment.name}
            type={equipment.type}
            owner={equipment.owner}
            location={equipment.location}
            pricePerDay={equipment.pricePerDay}
            rating={equipment.rating}
            reviewCount={equipment.reviewCount}
            availability={equipment.availability}
            imageUrl={equipment.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default EquipmentRental;