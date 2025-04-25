import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviewCount: number;
  discount?: number;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  category,
  price,
  rating,
  reviewCount,
  discount,
  imageUrl,
}) => {
  const discountedPrice = discount ? price - (price * discount) / 100 : price;

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all">
      <div className="relative">
        <img
          src={imageUrl}
          alt={name}
          className="object-cover w-full h-48"
        />
        {discount && (
          <div className="absolute top-2 right-2 bg-accent-600 text-white text-xs font-bold px-2 py-1 rounded">
            {discount}% OFF
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="text-xs text-gray-500 mb-1">{category}</div>
        <h3 className="text-gray-900 font-medium text-lg mb-1">{name}</h3>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center mr-2">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                />
              ))}
          </div>
          <div className="text-xs text-gray-500">({reviewCount})</div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            {discount ? (
              <div className="flex items-center">
                <span className="text-gray-500 text-sm line-through mr-2">₹{price}</span>
                <span className="text-gray-900 font-bold">₹{discountedPrice}</span>
              </div>
            ) : (
              <span className="text-gray-900 font-bold">₹{price}</span>
            )}
          </div>
          <button className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-lg transition-colors">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;