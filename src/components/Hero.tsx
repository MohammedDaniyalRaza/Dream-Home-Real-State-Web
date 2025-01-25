import React from 'react';
import { Search } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[600px] flex items-center justify-center">
      <img
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000"
        alt="Luxury home"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-6">Find Your Dream Home</h1>
        <p className="text-xl mb-8">Explore our collection of premium properties in prime locations</p>
        
        <div className="max-w-3xl mx-auto">
          <div className="flex bg-white rounded-lg p-2">
            <input
              type="text"
              placeholder="Search by location, property type, or price..."
              className="flex-1 px-4 py-2 text-gray-800 focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md flex items-center">
              <Search className="h-5 w-5 mr-2" />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}