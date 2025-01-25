import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, Share2, Phone, Mail, Bed, Bath, Square } from 'lucide-react';
import { properties } from '../data/properties';
import PropertyViewer3D from '../components/PropertyViewer3D';
import { useAuth } from '@clerk/clerk-react';

export default function PropertyDetail() {
  const { id } = useParams();
  const { isSignedIn } = useAuth();
  const [isFavorite, setIsFavorite] = useState(false);
  
  const property = properties.find(p => p.id === id);
  
  if (!property) {
    return <div>Property not found</div>;
  }

  const handleFavorite = () => {
    if (!isSignedIn) {
      // Redirect to sign in
      return;
    }
    setIsFavorite(!isFavorite);
    // TODO: Update favorites in backend
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="relative">
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-[500px] object-cover rounded-lg"
            />
            <button
              onClick={handleFavorite}
              className={`absolute top-4 right-4 p-2 rounded-full ${
                isFavorite ? 'bg-red-500 text-white' : 'bg-white text-gray-600'
              }`}
            >
              <Heart className="h-6 w-6" fill={isFavorite ? 'currentColor' : 'none'} />
            </button>
          </div>
          
          <div className="mt-8">
            <PropertyViewer3D />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{property.title}</h1>
            <p className="text-2xl text-blue-600 mt-2">${property.price.toLocaleString()}</p>
          </div>

          <div className="flex space-x-8 text-gray-600">
            <div className="flex items-center">
              <Bed className="h-5 w-5 mr-2" />
              <span>{property.bedrooms} beds</span>
            </div>
            <div className="flex items-center">
              <Bath className="h-5 w-5 mr-2" />
              <span>{property.bathrooms} baths</span>
            </div>
            <div className="flex items-center">
              <Square className="h-5 w-5 mr-2" />
              <span>{property.sqft} sqft</span>
            </div>
          </div>

          <p className="text-gray-600">{property.description}</p>

          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-4">Contact Agent</h2>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                <Phone className="h-5 w-5" />
                <span>Call Agent</span>
              </button>
              <button className="w-full flex items-center justify-center space-x-2 border border-blue-600 text-blue-600 py-2 rounded-md hover:bg-blue-50">
                <Mail className="h-5 w-5" />
                <span>Email Agent</span>
              </button>
            </div>
          </div>

          <button className="flex items-center text-gray-600 hover:text-blue-600">
            <Share2 className="h-5 w-5 mr-2" />
            Share Property
          </button>
        </div>
      </div>
    </div>
  );
}