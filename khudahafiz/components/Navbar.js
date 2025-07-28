import React from 'react'

const navbar = () => {
  return (
<div>

  {/* <!-- Header with navbar --> */}
  <header className="relative bg-cover bg-center h-screen" style={{"background-image": "url('https://images.unsplash.com/photo-1571109487321-1c33db4d3ba4?auto=format&fit=crop&w=1470&q=80');"}}>
    {/* <!-- Navbar --> */}
    <nav className="flex justify-between items-center px-6 md:px-20 py-4 bg-[#7B5A13] rounded-full mx-4 md:mx-16 mt-6">
      {/* <!-- Logo --> */}
      <div className="flex items-center space-x-3">
        <img src="https://i.imgur.com/7YJ3HVP.png" className="w-8 h-8" alt="Logo" />
        <h1 className="font-bold text-white text-lg">KHUDA HAFIZ</h1>
      </div>

      {/* <!-- Menu --> */}
      <ul className="hidden md:flex space-x-6 text-white text-base font-light">
        <li><a href="#">Home</a></li>
        <li><a href="#">Packages</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Contact us</a></li>
      </ul>

      {/* <!-- Buttons --> */}
      <div className="flex space-x-3">
        <button className="px-5 py-1 border border-white rounded-full text-sm">Login</button>
        <button className="px-5 py-1 bg-white text-[#7B5A13] font-semibold rounded-full text-sm">Sign up</button>
      </div>
    </nav>

    {/* <!-- Hero Section Content --> */}
    <div className="absolute top-1/2 left-6 md:left-24 transform -translate-y-1/2 z-10">
      <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-2xl">
        In Your Time of Loss, We help<br />
        you say “<span className="text-white">Khuda Hafiz</span>”
      </h1>
      <button className="mt-8 bg-[#7B5A13] text-white font-bold px-10 py-4 rounded-md">
        Join Now!
      </button>
    </div>

    {/* <!-- Right Side Logo --> */}
    <img src="https://i.imgur.com/7YJ3HVP.png" alt="Hero Logo"
         className="absolute right-10 bottom-12 md:right-24 md:bottom-10 w-36 md:w-64 opacity-90" />
  </header>

    </div>
  )
}

export default navbar