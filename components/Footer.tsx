
'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter();

  const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];

  const handleCategoryChange = (category: string) => {
    router.push(`/CategoryNews?category=${category}`);
  };

  return (
    <footer className=" container mx-auto font-times border-t-2 border-gray-600 mt-10 p-4">
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap justify-center space-x-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className="text-sm lg:text-base text-gray-800 hover:bg-gray-800 hover:text-white transition-colors p-1 rounded"
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="text-center mt-4 text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} The Daily Bulletin. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
