import React from 'react';
import { useUser } from '@clerk/clerk-react';
import { properties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';

export default function Profile() {
  const { user } = useUser();
  // In a real app, fetch these from your backend
  const favoriteProperties = properties.slice(0, 2);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center space-x-4">
          <img
            src={user?.imageUrl}
            alt={user?.fullName || 'Profile'}
            className="h-20 w-20 rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold">{user?.fullName}</h1>
            <p className="text-gray-600">{user?.primaryEmailAddress?.emailAddress}</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Favorite Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {favoriteProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Recent Searches</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="space-y-4">
            {['Beverly Hills Mansions', 'Manhattan Penthouses', 'Beachfront Properties'].map((search, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                <span>{search}</span>
                <span className="text-gray-500 text-sm">2 days ago</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}