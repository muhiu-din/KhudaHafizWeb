import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>


      {/* <!-- Navbar --> */}
      <nav className="flex justify-between items-center px-6 md:px-20 py-4 bg-[#7B5A13] rounded-full mx-4 md:mx-16 mt-6">
        {/* <!-- Logo --> */}
        <div className="flex items-center space-x-3">
          <img src="/auth-icons/navLogo.png" className="w-8 h-8" alt="Logo" />
            <Link href="/">
              <h1 className="font-bold text-white text-lg cursor-pointer">KHUDA HAFIZ</h1>
            </Link>
        </div>

        {/* <!-- Menu --> */}
        <ul className="hidden md:flex space-x-6 text-white text-base font-light">
          <li><Link href="/home">Home</Link></li>
          <li><Link href="/packages">Packages</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/about">About us</Link></li>
          <li><Link href="/contact">Contact </Link></li>
        </ul>

        {/* <!-- Buttons --> */}
        <div className="flex space-x-3">
          <Link href={"/auth/login"} className="px-5 py-1 border border-white rounded-full text-white text-sm">Login</Link>
          <Link href={"/auth/signup"} className="px-5 py-1 bg-white text-[#7B5A13] font-semibold rounded-full text-sm">Sign up</Link>
        </div>
      </nav>

    </div>
  )
}

export default Navbar