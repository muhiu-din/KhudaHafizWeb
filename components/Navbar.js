// components/Navbar.js
'use client'; // 1. Add this line to make it a Client Component

import React from 'react';
import { usePathname } from 'next/navigation'; // 2. Import the usePathname hook

const Navbar = () => {
  const pathname = usePathname(); // 3. Get the current URL path

  // 4. Determine if the current page is the homepage
  const isHomePage = pathname === '/';

  return (
    <div>
      {/* The header's style and class will now change based on the page */}
      <header 
        className={isHomePage ? "relative bg-cover bg-center h-screen" : "bg-[#7B5A13]"}
        style={isHomePage ? { backgroundImage: "url('https://images.unsplash.com/photo-1571109487321-1c33db4d3ba4?auto=format&fit=crop&w=1470&q=80')" } : {}}
      >
        {/* Navbar - This will show on ALL pages */}
        <nav className="flex justify-between items-center px-6 md:px-20 py-4 bg-[#7B5A13] md:rounded-full md:mx-16 md:mt-6">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="https://i.imgur.com/7YJ3HVP.png" className="w-8 h-8" alt="Logo" />
            <h1 className="font-bold text-white text-lg">KHUDA HAFIZ</h1>
          </div>

          {/* Menu */}
          <ul className="hidden md:flex space-x-6 text-white text-base font-light">
            <li><a href="/">Home</a></li>
            <li><a href="/packages">Packages</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>

          {/* Buttons */}
          <div className="flex space-x-3">
            <button className="px-5 py-1 border border-white rounded-full text-sm text-white">Login</button>
            <button className="px-5 py-1 bg-white text-[#7B5A13] font-semibold rounded-full text-sm">Sign up</button>
          </div>
        </nav>

        {/* 5. Conditionally render the Hero Section and Logo */}
        {isHomePage && (
          <>
            {/* Hero Section Content */}
            <div className="absolute top-1/2 left-6 md:left-24 transform -translate-y-1/2 z-10">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-2xl">
                In Your Time of Loss, We help<br />
                you say “<span className="text-white">Khuda Hafiz</span>”
              </h1>
              <button className="mt-8 bg-[#7B5A13] text-white font-bold px-10 py-4 rounded-md">
                Join Now!
              </button>
            </div>

            {/* Right Side Logo */}
            <img src="https://i.imgur.com/7YJ3HVP.png" alt="Hero Logo"
                 className="absolute right-10 bottom-12 md:right-24 md:bottom-10 w-36 md:w-64 opacity-90" />
          </>
        )}
      </header>
    </div>
  );
};

export default Navbar;