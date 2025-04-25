import React, { useState } from 'react';
import { Clock, Calendar, TrendingUp, MapPin, Tag } from 'lucide-react';

interface BiddingCardProps {
  id: string;
  cropName: string;
  farmerName: string;
  location: string;
  quantity: string;
  quality: string;
  basePrice: number;
  currentBid: number;
  bidCount: number;
  expiresIn: string;
  harvestDate: string;
  imageUrl: string;
}

const BiddingCard: React.FC<BiddingCardProps> = ({
  cropName,
  farmerName,
  location,
  quantity,
  quality,
  basePrice,
  currentBid,
  bidCount,
  expiresIn,
  harvestDate,
  imageUrl,
}) => {
  const [bid, setBid] = useState<number>(currentBid + 50);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleBidChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newBid = parseInt(e.target.value);
    if (!isNaN(newBid)) {
      setBid(newBid);
    }
  };

  const handlePlaceBid = () => {
    // In a real app, this would send the bid to an API
    console.log(`Placed bid of ${bid} for ${cropName}`);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all">
      <div className="aspect-w-16 aspect-h-9 bg-gray-200">
        <img
          src={imageUrl}
          alt={cropName}
          className="object-cover w-full h-48"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-gray-900">{cropName}</h3>
          <div className="bg-primary-50 text-primary-700 px-2 py-1 rounded text-sm font-medium">
            {quality}
          </div>
        </div>

        <div className="text-sm text-gray-500 mb-3 flex items-center">
          <MapPin size={16} className="mr-1" /> {location}
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center text-sm">
            <Tag size={16} className="mr-1 text-gray-500" />
            <span className="text-gray-700">
              {quantity}
            </span>
          </div>
          <div className="flex items-center text-sm">
            <Calendar size={16} className="mr-1 text-gray-500" />
            <span className="text-gray-700">
              Harvest: {harvestDate}
            </span>
          </div>
        </div>

        <div className="border-t border-b border-gray-100 py-3 mb-4">
          <div className="flex justify-between items-center mb-2">
            <div className="text-sm text-gray-500">Base Price</div>
            <div className="text-sm font-medium">₹{basePrice.toLocaleString('en-IN')}</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">Current Bid</div>
            <div className="text-base font-semibold text-primary-700">₹{currentBid.toLocaleString('en-IN')}</div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center text-sm">
            <TrendingUp size={16} className="mr-1 text-gray-500" />
            <span className="text-gray-700">
              {bidCount} bids
            </span>
          </div>
          <div className="flex items-center text-sm">
            <Clock size={16} className="mr-1 text-gray-500" />
            <span className="text-gray-700">
              Ends in {expiresIn}
            </span>
          </div>
        </div>

        <button
          onClick={toggleExpand}
          className="w-full py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
        >
          {isExpanded ? 'Cancel' : 'Place Bid'}
        </button>

        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-100 slide-in">
            <div className="mb-3">
              <label htmlFor="bid-amount" className="block text-sm font-medium text-gray-700 mb-1">
                Your Bid (₹)
              </label>
              <input
                type="number"
                id="bid-amount"
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                value={bid}
                onChange={handleBidChange}
                min={currentBid + 10}
                step={10}
              />
              <p className="text-xs text-gray-500 mt-1">
                Minimum bid: ₹{(currentBid + 10).toLocaleString('en-IN')}
              </p>
            </div>
            <button
              onClick={handlePlaceBid}
              className="w-full py-2 px-4 bg-accent-600 hover:bg-accent-700 text-white rounded-lg transition-colors"
            >
              Confirm Bid
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BiddingCard;