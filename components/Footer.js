import React from 'react'

const Footer = () => {
  return (
    <div>
     
  {/* <!-- Footer --> */}
  <footer className="px-6 md:px-24 pt-20 pb-6 bg-[#3A291D] text-sm font-[Outfit]">
    <div className="flex flex-col md:flex-row justify-between border-b border-[#5b4536] pb-12 gap-12">

      {/* <!-- Left: Logo + Description + Social --> */}
      <div className="max-w-md">
        <div className="flex items-center gap-3 mb-4">
          {/* <!-- Replace with your actual logo --> */}
          <img src="https://i.imgur.com/7YJ3HVP.png" alt="Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold text-white">KHUDA HAFIZ</h1>
        </div>
        <p className="text-[#E0D7D0] leading-relaxed mb-6">
          Pakistan's first digital platform providing compassionate funeral services and tech support for social good.
        </p>
        <h2 className="font-semibold text-[#B8A99C] mb-2">Follow us</h2>
        <div className="flex space-x-4 mt-2">
          <div className="bg-[#E0D7D0] w-9 h-9 flex items-center justify-center rounded-full">
            <img src="https://img.icons8.com/ios-filled/20/3A291D/facebook-new.png" />
          </div>
          <div className="bg-[#E0D7D0] w-9 h-9 flex items-center justify-center rounded-full">
            <img src="https://img.icons8.com/ios-filled/20/3A291D/instagram-new.png" />
          </div>
          <div className="bg-[#E0D7D0] w-9 h-9 flex items-center justify-center rounded-md">
            <img src="https://img.icons8.com/ios-filled/20/3A291D/linkedin.png" />
          </div>
        </div>
      </div>

      {/* <!-- Center: Pages --> */}
      <div>
        <h2 className="font-semibold text-[#B8A99C] mb-4">Pages</h2>
        <ul className="space-y-3 text-white">
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Service</li>
          <li className="hover:underline cursor-pointer">Privacy Policy</li>
          <li className="hover:underline cursor-pointer">Contact Us</li>
        </ul>
      </div>

      {/* <!-- Right: Connect --> */}
      <div>
        <h2 className="font-semibold text-[#B8A99C] mb-4">Connect</h2>
        <ul className="space-y-3 text-white">
          <li>hello@khudahafiz.com</li>
          <li>partnerships@khudahafiz.com</li>
        </ul>
      </div>
    </div>

    {/* <!-- Bottom Bar --> */}
    <div className="text-center text-[#E0D7D0] text-sm pt-6">
      KHUDA HAFIZ &copy; 2024 All Right Reserved.
    </div>
  </footer>

    </div>
  )
}

export default Footer