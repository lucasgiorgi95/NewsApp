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
    setIsMenuOpen(false); // Cerrar menú después de seleccionar
  };

  const handleLogoClick = () => {
    onCategoryChange('');
    router.push('/');
    setIsMenuOpen(false); // Cerrar menú cuando se haga clic en el logo
  };

  return (
    <nav className=" top-0 z-10  p-4 flex flex-col items-center space-y-4">
      
      {/* Logo con tamaño grande en desktop, y más pequeño en mobile */}
      <div 
        className="text-3xl lg:text-5xl font-bold text-gray-900 cursor-pointer mb-4" 
        onClick={handleLogoClick}
      >
        📰 NewsApp
      </div>

      {/* Categorías con líneas arriba y abajo, y ajustando el espaciado y el tamaño de texto en mobile */}
      <div className="w-full border-t-2 border-b-2 border-gray-900 py-2">
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
