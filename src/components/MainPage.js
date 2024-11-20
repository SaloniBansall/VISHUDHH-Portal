import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Signup from './Signup';

const Navbar = () => {
  return (
    <nav className="bg-green-400 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold text-xl">Logo</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Link to="/login" className="text-gray-300 bg-gray-700 hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</Link>
              <Link to="/signup" className="text-gray-300 bg-gray-700 hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium ml-4">Signup</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        {/* Add your main page content here */}
        <Route path="/" element={
          <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Welcome to the Main Page</h1>
            <p>This is the main content area of the page.</p>
          </div>
        } />
      </Routes>
    </div>
  );
};

export default MainPage;