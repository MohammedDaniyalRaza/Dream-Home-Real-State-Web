import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, Search, Heart, User, LogOut } from 'lucide-react';
import { useAuth, useUser } from '@clerk/clerk-react';

export default function Navbar() {
  const { isSignedIn, signOut } = useAuth();
  const { user } = useUser();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Home className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-xl">DreamHome</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/properties" className="hover:text-blue-600">Properties</Link>
            <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="h-5 w-5" />
            </button>
            {isSignedIn ? (
              <>
                <Link to="/profile" className="flex items-center space-x-2">
                  <img
                    src={user?.imageUrl}
                    alt={user?.fullName || 'Profile'}
                    className="h-8 w-8 rounded-full"
                  />
                </Link>
                <Link to="/profile/favorites" className="p-2 hover:bg-gray-100 rounded-full">
                  <Heart className="h-5 w-5" />
                </Link>
                <button
                  onClick={handleSignOut}
                  className="p-2 hover:bg-gray-100 rounded-full text-red-500"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </>
            ) : (
              <Link
                to="/sign-in"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}