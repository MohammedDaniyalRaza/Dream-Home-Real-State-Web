import React from 'react';
import Hero from '../components/Hero';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/properties';

export default function Home() {
  const featuredProperties = properties.filter(p => p.featured);

  return (
    <div>
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>

      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">3D Virtual Tours</h3>
              <p className="text-gray-600">Experience properties in immersive 3D before visiting in person.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Expert Agents</h3>
              <p className="text-gray-600">Our experienced agents are here to guide you every step of the way.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Premium Locations</h3>
              <p className="text-gray-600">Access to exclusive properties in the most desirable locations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}