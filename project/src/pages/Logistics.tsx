import React from 'react';
import { Truck, Package, MapPin, ArrowRight } from 'lucide-react';
import LogisticsForm from '../components/LogisticsForm';

const Logistics: React.FC = () => {
  const handleSubmit = (formData: any) => {
    console.log('Logistics form submitted:', formData);
    // In a real app, this would send data to an API
  };

  const transportProviders = [
    {
      name: 'FastTruck Logistics',
      rating: 4.8,
      trips: 1240,
      image: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Kisan Transport Co.',
      rating: 4.6,
      trips: 870,
      image: 'https://images.pexels.com/photos/2800159/pexels-photo-2800159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Village Truck Union',
      rating: 4.9,
      trips: 1530,
      image: 'https://images.pexels.com/photos/2684218/pexels-photo-2684218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  return (
    <div className="space-y-6 fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Logistics & Transport</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <LogisticsForm onSubmit={handleSubmit} />
          
          <div className="mt-6 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-800">
              <Package className="mr-2 text-secondary-600" size={24} />
              Active Shipments
            </h2>
            
            <div className="border rounded-lg overflow-hidden">
              <div className="divide-y">
                <div className="flex items-center p-4 hover:bg-gray-50">
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded">In Transit</span>
                      <span className="text-xs text-gray-500 ml-2">Oct 12, 2025</span>
                    </div>
                    <div className="font-medium">10 Tons Wheat</div>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <MapPin size={16} className="mr-1" />
                      <span>Punjab to Delhi Mandi</span>
                    </div>
                  </div>
                  <button className="text-primary-600 hover:text-primary-700">
                    <ArrowRight size={20} />
                  </button>
                </div>
                
                <div className="flex items-center p-4 hover:bg-gray-50">
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">Scheduled</span>
                      <span className="text-xs text-gray-500 ml-2">Oct 18, 2025</span>
                    </div>
                    <div className="font-medium">5 Tons Rice</div>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <MapPin size={16} className="mr-1" />
                      <span>Haryana to Delhi Warehouse</span>
                    </div>
                  </div>
                  <button className="text-primary-600 hover:text-primary-700">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-800">
              <Truck className="mr-2 text-secondary-600" size={24} />
              Top Transport Providers
            </h2>
            
            <div className="space-y-4">
              {transportProviders.map((provider, index) => (
                <div key={index} className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-3 bg-gray-200">
                    <img 
                      src={provider.image} 
                      alt={provider.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{provider.name}</div>
                    <div className="flex items-center text-sm">
                      <div className="flex items-center text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                        <span className="ml-1 text-gray-600">{provider.rating}</span>
                      </div>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-gray-600">{provider.trips} trips</span>
                    </div>
                  </div>
                  <button className="px-3 py-1 text-sm border border-secondary-600 text-secondary-600 rounded hover:bg-secondary-50">
                    Contact
                  </button>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-4 text-center text-secondary-600 hover:text-secondary-700 text-sm font-medium">
              View All Providers
            </button>
          </div>
          
          <div className="bg-primary-50 rounded-xl p-6">
            <h3 className="font-semibold text-primary-800 mb-2">Pool Your Shipments</h3>
            <p className="text-primary-700 text-sm mb-4">
              Share transport with other farmers going to the same destination and save up to 40% on costs.
            </p>
            <button className="w-full py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors text-sm">
              Find Pool Partners
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logistics;