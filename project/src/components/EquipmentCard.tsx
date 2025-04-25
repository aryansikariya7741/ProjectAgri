import React from 'react';
import { Calendar, MapPin, Star, Clock } from 'lucide-react';

interface EquipmentCardProps {
  id: string;
  name: string;
  type: string;
  owner: string;
  location: string;
  pricePerDay: number;
  rating: number;
  reviewCount: number;
  availability: string;
  imageUrl: string;
}

const EquipmentCard: React.FC<EquipmentCardProps> = ({
  name,
  type,
  owner,
  location,
  pricePerDay,
  rating,
  reviewCount,
  availability,
  imageUrl,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all">
      <div className="aspect-w-16 aspect-h-9 bg-gray-200">
        <img
          src={imageUrl}
          alt={name}
          className="object-cover w-full h-48"
        />
      </div>
      <div className="p-4">
        <div className="mb-2">
          <div className="text-xs text-gray-500 uppercase">{type}</div>
          <h3 className="text-gray-900 font-medium text-lg">{name}</h3>
        </div>
        
        <div className="flex items-center mb-3 text-sm text-gray-500">
          <MapPin size={16} className="mr-1" />
          <span>{location}</span>
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                />
              ))}
            <span className="text-xs text-gray-500 ml-1">({reviewCount})</span>
          </div>
          <div className="text-primary-700 font-semibold">
            ₹{pricePerDay}/day
          </div>
        </div>
        
        <div className="flex items-center justify-between text-sm mb-4">
          <div className="flex items-center text-gray-600">
            <Clock size={16} className="mr-1" />
            <span>{availability}</span>
          </div>
          <div className="text-xs text-gray-500">
            Owned by {owner}
          </div>
        </div>
        
        <button className="w-full py-2 px-4 bg-secondary-600 hover:bg-secondary-700 text-white rounded-lg transition-colors flex items-center justify-center">
          <Calendar size={16} className="mr-2" />
          Check Availability
        </button>
      </div>
    </div>
  );
};

export default EquipmentCard;