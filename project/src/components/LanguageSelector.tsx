import React, { useState } from 'react';
import { Globe } from 'lucide-react';

interface LanguageSelectorProps {
  darkMode: boolean;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('English');

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिन्दी (Hindi)' },
    { code: 'mr', name: 'मराठी (Marathi)' },
    { code: 'te', name: 'తెలుగు (Telugu)' },
    { code: 'ta', name: 'தமிழ் (Tamil)' },
    { code: 'pa', name: 'ਪੰਜਾਬੀ (Punjabi)' },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (language: string) => {
    setCurrentLanguage(language);
    setIsOpen(false);
    // In a real app, we'd change the language context here
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className={`flex items-center space-x-1 py-2 px-3 rounded-md ${
          darkMode
            ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
        aria-label="Select language"
      >
        <Globe size={18} />
        <span className="text-sm hidden sm:inline">{currentLanguage}</span>
      </button>

      {isOpen && (
        <div
          className={`absolute right-0 mt-2 py-2 w-48 rounded-md shadow-lg z-10 ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } ring-1 ring-black ring-opacity-5 fade-in`}
        >
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.name)}
              className={`block w-full text-left px-4 py-2 text-sm ${
                currentLanguage === language.name
                  ? 'bg-primary-50 text-primary-600'
                  : darkMode
                  ? 'text-gray-300 hover:bg-gray-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {language.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;