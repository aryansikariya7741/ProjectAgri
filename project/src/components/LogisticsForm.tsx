import React, { useState } from 'react';
import { Truck, Calendar, MapPin, Package, Clock } from 'lucide-react';

interface LogisticsFormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  pickupLocation: string;
  destination: string;
  pickupDate: string;
  cargoType: string;
  cargoWeight: string;
  vehicleType: string;
  isPooling: boolean;
}

const LogisticsForm: React.FC<LogisticsFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    pickupLocation: '',
    destination: '',
    pickupDate: '',
    cargoType: '',
    cargoWeight: '',
    vehicleType: 'small',
    isPooling: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h2 className="text-xl font-semibold mb-6 flex items-center text-gray-800">
        <Truck className="mr-2 text-primary-600" size={24} />
        Book Transport
      </h2>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pickup Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                name="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Enter pickup address"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Destination
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Enter destination address"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pickup Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="date"
                name="pickupDate"
                value={formData.pickupDate}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cargo Type
            </label>
            <div className="relative">
              <Package className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                name="cargoType"
                value={formData.cargoType}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="e.g., Rice, Wheat, Vegetables"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cargo Weight (in kg)
            </label>
            <input
              type="text"
              name="cargoWeight"
              value={formData.cargoWeight}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="e.g., 500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Vehicle Type
            </label>
            <select
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              required
            >
              <option value="small">Small Truck (up to 1 ton)</option>
              <option value="medium">Medium Truck (1-3 tons)</option>
              <option value="large">Large Truck (3-8 tons)</option>
              <option value="trailer">Trailer (8+ tons)</option>
            </select>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="isPooling"
              name="isPooling"
              checked={formData.isPooling}
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label htmlFor="isPooling" className="ml-2 block text-sm text-gray-700">
              I'm willing to share the vehicle with other farmers (reduce costs)
            </label>
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors font-medium flex items-center justify-center"
        >
          <Truck size={18} className="mr-2" />
          Find Transport
        </button>
      </form>
    </div>
  );
};

export default LogisticsForm;