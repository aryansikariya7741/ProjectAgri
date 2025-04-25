import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 text-white rounded-xl">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/235925/pexels-photo-235925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20"></div>
      <div className="relative z-10 px-6 py-12 md:py-24 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Empowering Farmers with Technology
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl opacity-90">
          KisanConnect brings together farmers, buyers, logistics providers, and equipment owners on a single platform to revolutionize agricultural commerce.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link 
            to="/bidding" 
            className="bg-white text-primary-800 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium flex items-center transition-all shadow-lg hover:shadow-xl"
          >
            Start Selling Crops
            <ArrowRight className="ml-2" size={18} />
          </Link>
          <Link 
            to="/marketplace" 
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-800 px-6 py-3 rounded-lg font-medium flex items-center transition-all"
          >
            Explore Marketplace
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;