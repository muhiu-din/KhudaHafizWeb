import React from 'react'

const Navbar = () => {
  return (
    <div>


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
          <li><a href="/packages">Packages</a></li>
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

    </div>
  )
}

export default Navbar