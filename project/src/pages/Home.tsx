import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import { BarChart3, Truck, ShoppingCart, Tractor, MessageCircle, LineChart } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-10 fade-in">
      <HeroSection />
      
      <section>
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">All You Need in One Platform</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            KisanConnect brings together all agricultural services in one place, making farming more profitable and easier to manage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            title="Crop Bidding System" 
            description="List your crops and get the best price through transparent bidding from verified buyers."
            icon={BarChart3}
            linkTo="/bidding"
            color="bg-primary-600"
          />
          <FeatureCard 
            title="Logistics Services" 
            description="Book transportation for your produce and track deliveries in real-time."
            icon={Truck}
            linkTo="/logistics"
            color="bg-secondary-600"
          />
          <FeatureCard 
            title="Agricultural Marketplace" 
            description="Buy quality seeds, fertilizers, and other farming essentials at the best prices."
            icon={ShoppingCart}
            linkTo="/marketplace"
            color="bg-accent-700"
          />
          <FeatureCard 
            title="Equipment Rental" 
            description="Rent tractors and farming equipment when you need them without the upfront cost."
            icon={Tractor}
            linkTo="/equipment"
            color="bg-green-600"
          />
          <FeatureCard 
            title="Community & Learning" 
            description="Connect with other farmers, get expert advice, and access educational resources."
            icon={MessageCircle}
            linkTo="/community"
            color="bg-blue-600"
          />
          <FeatureCard 
            title="Market Insights" 
            description="Access real-time market data and trends to make informed farming decisions."
            icon={LineChart}
            linkTo="/market-insights"
            color="bg-purple-600"
          />
        </div>
      </section>
      
      <section className="bg-primary-50 rounded-xl p-6 md:p-10">
        <div className="md:flex items-center">
          <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary-800">Why Choose KisanConnect?</h2>
            <div className="space-y-4">
              <div className="flex">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <span className="text-primary-700 text-xl font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Better Prices</h3>
                  <p className="text-gray-600">Eliminate middlemen and get up to 20% higher prices for your crops through direct bidding.</p>
                </div>
              </div>
              <div className="flex">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <span className="text-primary-700 text-xl font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Reduced Costs</h3>
                  <p className="text-gray-600">Save on transportation and equipment by sharing resources with other farmers in your area.</p>
                </div>
              </div>
              <div className="flex">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <span className="text-primary-700 text-xl font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Knowledge Sharing</h3>
                  <p className="text-gray-600">Learn from expert farmers and agricultural scientists to improve your yield and crop quality.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-center mb-4">
                <span className="inline-block rounded-full bg-primary-100 p-3 text-primary-600 mb-2">
                  <LineChart size={24} />
                </span>
                <h3 className="text-lg font-semibold">Growing Together</h3>
                <p className="text-gray-600 text-sm">Join thousands of farmers already benefiting from KisanConnect</p>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-3">
                  <div className="text-2xl font-bold text-primary-700">20k+</div>
                  <div className="text-sm text-gray-600">Farmers</div>
                </div>
                <div className="p-3 border-x border-gray-100">
                  <div className="text-2xl font-bold text-primary-700">₹12Cr+</div>
                  <div className="text-sm text-gray-600">Crops Sold</div>
                </div>
                <div className="p-3">
                  <div className="text-2xl font-bold text-primary-700">5k+</div>
                  <div className="text-sm text-gray-600">Villages</div>
                </div>
              </div>
              <div className="mt-6">
                <Link 
                  to="/register"
                  className="block w-full py-3 bg-primary-600 hover:bg-primary-700 text-white text-center rounded-lg transition-colors font-medium"
                >
                  Join KisanConnect
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Download Our Mobile App</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Take KisanConnect with you in the field. Get instant notifications for bids, weather alerts, and manage your farm on the go.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="flex items-center bg-black text-white px-6 py-3 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M3 11h18"/><path d="M18 16.5 15.5 19 18 21.5"/><path d="M18.37 19H22"/></svg>
            <div className="text-left">
              <div className="text-xs">Download on the</div>
              <div className="text-sm font-semibold">App Store</div>
            </div>
          </a>
          <a href="#" className="flex items-center bg-black text-white px-6 py-3 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M3 7v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1z"/><path d="m10 17 5-5-5-5"/></svg>
            <div className="text-left">
              <div className="text-xs">GET IT ON</div>
              <div className="text-sm font-semibold">Google Play</div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;