'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

interface NavProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const Nav: React.FC<NavProps> = ({ selectedCategory, onCategoryChange }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];

  const handleCategoryChange = (category: string) => {
    onCategoryChange(category);
    router.push(`/CategoryNews?category=${category}`);
    setIsMenuOpen(false); 
  };

  const handleLogoClick = () => {
    onCategoryChange('');
    router.push('/');
    setIsMenuOpen(false); 
  };

  return (
    <nav className="font-times top-0 z-10  p-4  flex flex-col items-center space-y-4">
      
     
      <div 
        className=" text-3xl border-t-4 w-full text-center pt-2 border-gray-600 lg:text-5xl font-bold text-gray-900 cursor-pointer mb-4" 
        onClick={handleLogoClick}
      >
        
        The Daily Bulletin
      </div>

      
      <div className="w-full border-t-2 border-b-2 border-gray-600 py-1">
        <div className="flex justify-center space-x-3 lg:space-x-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`text-sm lg:text-lg p-1 lg:p-2 ${selectedCategory === category ? 'text-white bg-gray-800' : 'text-gray-800'} hover:bg-gray-800 hover:text-white transition-colors`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
