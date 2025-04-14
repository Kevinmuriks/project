// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wider">Spartan Group</h1>
        <ul className="flex space-x-6 text-sm font-medium">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">Projects</li>
          <li className="hover:text-blue-400 cursor-pointer">Articles</li>
          <li className="hover:text-blue-400 cursor-pointer">About</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

