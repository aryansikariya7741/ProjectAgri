import React, { useState } from 'react';
import { User, MapPin, Phone, Mail, Edit, Tractor, Package, BarChart3, Settings, Bell, LogOut } from 'lucide-react';

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('listings');

  // Mock user data
  const user = {
    name: 'Rajesh Kumar',
    type: 'Farmer',
    location: 'Sonipat, Haryana',
    phone: '+91 98765 43210',
    email: 'rajesh.kumar@example.com',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    farmSize: '12 acres',
    mainCrops: ['Wheat', 'Rice', 'Mustard'],
    member: 'June 2023',
    farmLocation: 'Sonipat, Haryana',
    notifications: 5,
  };

  // Mock data for user's listings
  const userListings = [
    {
      id: '1',
      type: 'crop',
      name: 'Premium Basmati Rice',
      quantity: '5 Tons',
      price: '₹36,000/ton',
      status: 'Active',
      bids: 12,
      image: 'https://images.pexels.com/photos/7469106/pexels-photo-7469106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '2',
      type: 'crop',
      name: 'Wheat - Rabi Season',
      quantity: '8 Tons',
      price: '₹24,500/ton',
      status: 'Pending',
      bids: 0,
      image: 'https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '3',
      type: 'equipment',
      name: 'Tractor - John Deere',
      price: '₹2,500/day',
      status: 'Active',
      bookings: 8,
      image: 'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  // Mock data for transaction history
  const transactions = [
    {
      id: '1',
      date: 'Oct 10, 2025',
      description: 'Sold 3 tons of Rice',
      amount: '₹1,08,000',
      buyer: 'Agro Exports Ltd.',
      status: 'Completed',
    },
    {
      id: '2',
      date: 'Oct 5, 2025',
      description: 'Purchased Fertilizers',
      amount: '-₹12,500',
      buyer: 'Farm Supplies Co.',
      status: 'Completed',
    },
    {
      id: '3',
      date: 'Sep 28, 2025',
      description: 'Tractor Rental Income',
      amount: '₹7,500',
      buyer: 'Anand Singh',
      status: 'Completed',
    },
    {
      id: '4',
      date: 'Sep 22, 2025',
      description: 'Logistics Service',
      amount: '-₹8,200',
      buyer: 'FastTruck Logistics',
      status: 'Completed',
    },
  ];

  return (
    <div className="space-y-6 fade-in">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 h-32 relative">
          <button className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full">
            <Edit size={18} />
          </button>
        </div>
        
        <div className="px-6 pb-6 relative">
          <div className="flex flex-col md:flex-row items-start md:items-end">
            <div className="w-24 h-24 rounded-full border-4 border-white bg-white overflow-hidden -mt-12 shadow-md">
              <img 
                src={user.image} 
                alt={user.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="mt-4 md:mt-0 md:ml-4 md:mb-2 flex-1">
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-1">
                <span className="inline-flex items-center text-sm text-gray-600">
                  <User size={16} className="mr-1" />
                  {user.type}
                </span>
                <span className="inline-flex items-center text-sm text-gray-600">
                  <MapPin size={16} className="mr-1" />
                  {user.location}
                </span>
                <span className="inline-flex items-center text-sm text-gray-600">
                  <Phone size={16} className="mr-1" />
                  {user.phone}
                </span>
                <span className="inline-flex items-center text-sm text-gray-600">
                  <Mail size={16} className="mr-1" />
                  {user.email}
                </span>
              </div>
            </div>
            
            <div className="mt-4 md:mt-0 flex space-x-2">
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Farm Information</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Farm Size</span>
                <span className="font-medium">{user.farmSize}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Main Crops</span>
                <div className="flex flex-wrap justify-end gap-1">
                  {user.mainCrops.map((crop, index) => (
                    <span key={index} className="bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded">
                      {crop}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Member Since</span>
                <span className="font-medium">{user.member}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Farm Location</span>
                <span className="font-medium">{user.farmLocation}</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
            <div className="space-y-3">
              <a href="#" className="flex justify-between items-center py-2 border-b border-gray-100">
                <div className="flex items-center">
                  <Settings size={18} className="mr-3 text-gray-500" />
                  <span>Account Settings</span>
                </div>
                <span className="text-primary-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
              <a href="#" className="flex justify-between items-center py-2 border-b border-gray-100">
                <div className="flex items-center">
                  <Bell size={18} className="mr-3 text-gray-500" />
                  <span>Notifications</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-primary-100 text-primary-800 text-xs px-2 py-0.5 rounded-full mr-2">
                    {user.notifications}
                  </span>
                  <span className="text-primary-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </a>
              <a href="#" className="flex justify-between items-center py-2 border-b border-gray-100">
                <div className="flex items-center">
                  <LogOut size={18} className="mr-3 text-gray-500" />
                  <span>Sign Out</span>
                </div>
                <span className="text-primary-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-accent-500 to-accent-700 rounded-xl p-6 text-white">
            <h3 className="font-semibold text-lg mb-2">KisanConnect Premium</h3>
            <p className="mb-4 opacity-90 text-sm">
              Upgrade to Premium for priority bidding, advanced analytics, and premium transport rates.
            </p>
            <button className="w-full py-2 bg-white text-accent-700 hover:bg-gray-100 rounded-lg transition-colors font-medium">
              Upgrade Now
            </button>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm">
            <div className="border-b">
              <div className="flex">
                <button 
                  onClick={() => setActiveTab('listings')}
                  className={`px-4 py-3 font-medium text-sm flex items-center ${
                    activeTab === 'listings' 
                      ? 'border-b-2 border-primary-600 text-primary-600' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Package size={18} className="mr-2" />
                  My Listings
                </button>
                <button 
                  onClick={() => setActiveTab('transactions')}
                  className={`px-4 py-3 font-medium text-sm flex items-center ${
                    activeTab === 'transactions' 
                      ? 'border-b-2 border-primary-600 text-primary-600' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <BarChart3 size={18} className="mr-2" />
                  Transactions
                </button>
              </div>
            </div>
            
            <div className="p-6">
              {activeTab === 'listings' && (
                <div className="space-y-6">
                  {userListings.map((listing) => (
                    <div key={listing.id} className="border rounded-lg overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 bg-gray-100">
                          <img 
                            src={listing.image} 
                            alt={listing.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium text-lg">{listing.name}</h3>
                              <div className="flex items-center text-sm text-gray-500 mt-1">
                                {listing.type === 'crop' ? (
                                  <>
                                    <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-0.5 rounded mr-2">
                                      Crop
                                    </span>
                                    <span>{listing.quantity}</span>
                                  </>
                                ) : (
                                  <>
                                    <span className="inline-block bg-secondary-100 text-secondary-800 text-xs px-2 py-0.5 rounded mr-2">
                                      Equipment
                                    </span>
                                  </>
                                )}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                                listing.status === 'Active' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {listing.status}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-end mt-4">
                            <div>
                              <div className="text-gray-500 text-sm">Price</div>
                              <div className="font-semibold">{listing.price}</div>
                            </div>
                            <div className="text-right">
                              {listing.type === 'crop' ? (
                                <div className="text-sm">
                                  <span className="text-gray-500">{listing.bids} bids</span>
                                </div>
                              ) : (
                                <div className="text-sm">
                                  <span className="text-gray-500">{listing.bookings} bookings</span>
                                </div>
                              )}
                              <button className="mt-1 text-primary-600 hover:text-primary-700 text-sm font-medium">
                                View Details
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="flex justify-center">
                    <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                      View All Listings
                    </button>
                  </div>
                </div>
              )}
              
              {activeTab === 'transactions' && (
                <div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Date</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Description</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Amount</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {transactions.map((transaction) => (
                          <tr key={transaction.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 text-sm">{transaction.date}</td>
                            <td className="py-3 px-4">
                              <div className="font-medium text-sm">{transaction.description}</div>
                              <div className="text-gray-500 text-xs">{transaction.buyer}</div>
                            </td>
                            <td className={`py-3 px-4 font-medium ${
                              transaction.amount.startsWith('-') ? 'text-red-600' : 'text-green-600'
                            }`}>
                              {transaction.amount}
                            </td>
                            <td className="py-3 px-4">
                              <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded">
                                {transaction.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="flex justify-center mt-6">
                    <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                      View All Transactions
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;