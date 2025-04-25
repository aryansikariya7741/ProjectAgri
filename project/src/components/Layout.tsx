import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, ShoppingCart, Truck, BarChart3, Tractor, MessageCircle, User, Sun, Moon } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // In a real app, we'd apply a dark class to the root element
  };

  const navItems = [
    { path: '/', label: 'Home', icon: <Home size={20} /> },
    { path: '/bidding', label: 'Crop Bidding', icon: <BarChart3 size={20} /> },
    { path: '/logistics', label: 'Logistics', icon: <Truck size={20} /> },
    { path: '/marketplace', label: 'Marketplace', icon: <ShoppingCart size={20} /> },
    { path: '/equipment', label: 'Equipment', icon: <Tractor size={20} /> },
    { path: '/community', label: 'Community', icon: <MessageCircle size={20} /> },
    { path: '/profile', label: 'Profile', icon: <User size={20} /> },
  ];

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
      {/* Header */}
      <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm z-10`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-primary-600 font-semibold text-lg md:text-xl">
                <Link to="/" className="flex items-center">
                  <Tractor className="mr-2 text-primary-600" size={24} />
                  <span className={`${darkMode ? 'text-white' : 'text-primary-800'} font-bold`}>
                    KisanConnect
                  </span>
                </Link>
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center py-2 ${
                    location.pathname === item.path
                      ? 'text-primary-600 font-medium'
                      : `${darkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-primary-600`
                  }`}
                >
                  {item.icon}
                  <span className="ml-1">{item.label}</span>
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <LanguageSelector darkMode={darkMode} />
              
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${
                  darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-100 text-gray-600'
                }`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className={`fixed inset-y-0 right-0 max-w-xs w-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl transform transition-transform duration-300 ease-in-out slide-in`}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  KisanConnect
                </h2>
                <button
                  onClick={toggleMobileMenu}
                  className={`p-2 rounded-md ${
                    darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  }`}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              <nav className="space-y-6">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center py-3 px-4 rounded-md ${
                      location.pathname === item.path
                        ? 'bg-primary-50 text-primary-600 font-medium'
                        : `${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`
                    }`}
                    onClick={toggleMobileMenu}
                  >
                    {item.icon}
                    <span className="ml-3">{item.label}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 py-6">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className={`py-6 ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'} border-t`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">© 2025 KisanConnect. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm hover:text-primary-600">Terms</a>
              <a href="#" className="text-sm hover:text-primary-600">Privacy</a>
              <a href="#" className="text-sm hover:text-primary-600">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;