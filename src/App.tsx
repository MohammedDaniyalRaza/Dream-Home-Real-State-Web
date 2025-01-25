import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ClerkProvider, SignIn, SignUp } from '@clerk/clerk-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PropertyDetail from './pages/PropertyDetail';
import Properties from './pages/Properties';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import ProtectedRoute from './components/ProtectedRoute';

// Make sure to use the environment variable correctly
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
  throw new Error("Missing Clerk Publishable Key");
}

function App() {
  return (
    <ClerkProvider 
      publishableKey={clerkPubKey}
      appearance={{
        layout: {
          socialButtonsPlacement: "bottom",
          socialButtonsVariant: "iconButton",
          termsPageUrl: "https://clerk.com/terms"
        },
        variables: {
          colorPrimary: '#2563eb'
        }
      }}
    >
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route 
                path="/sign-in/*" 
                element={
                  <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-4">
                    <div className="w-full max-w-md">
                      <SignIn routing="path" path="/sign-in" />
                    </div>
                  </div>
                } 
              />
              <Route 
                path="/sign-up/*" 
                element={
                  <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-4">
                    <div className="w-full max-w-md">
                      <SignUp routing="path" path="/sign-up" />
                    </div>
                  </div>
                } 
              />
              <Route path="/properties" element={<Properties />} />
              <Route path="/property/:id" element={<PropertyDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
        </div>
      </Router>
    </ClerkProvider>
  );
}

export default App;