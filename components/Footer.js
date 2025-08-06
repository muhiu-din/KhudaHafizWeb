'use client';

import React from 'react';
import Link from 'next/link'; // Using Next.js Link for optimized routing
import { motion } from 'framer-motion';

const Footer = () => {

  // Animation variants for Framer Motion
  const footerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Animates children one by one
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <footer className="px-6 md:px-24 pt-20 pb-6 bg-[#3A291D] text-sm font-[Outfit] overflow-hidden">
      <motion.div 
        className="flex flex-col md:flex-row justify-between border-b border-[#5b4536] pb-12 gap-12"
        variants={footerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Animation triggers when 30% of footer is visible
      >

        {/* <!-- Left: Logo + Description + Social --> */}
        <motion.div className="max-w-md" variants={itemVariants}>
          <div className="flex items-center gap-3 mb-4">
            <img src="/auth-icons/navLogo.png" alt="Logo" className="w-10 h-10" />
            <h1 className="text-2xl font-bold text-white">KHUDA HAFIZ</h1>
          </div> 
          <p className="text-[#E0D7D0] leading-relaxed mb-6">
            Pakistan's first digital platform providing compassionate funeral services and tech support for social good.
          </p>
          <h2 className="font-semibold text-[#B8A99C] mb-2">Follow us</h2>
          <div className="flex space-x-4 mt-2">
            {/* --- UPDATED: Added links and hover effect --- */}
            <a href="https://www.instagram.com/khudahafiz.co/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
              <div className="bg-[#E0D7D0] w-9 h-9 flex items-center justify-center rounded-full">
                <img src="https://img.icons8.com/ios-filled/20/3A291D/instagram-new.png" alt="Instagram"/>
              </div>
            </a>
            <a href="https://www.linkedin.com/company/khudahafiz/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
              <div className="bg-[#E0D7D0] w-9 h-9 flex items-center justify-center rounded-full">
                <img src="https://img.icons8.com/ios-filled/20/3A291D/linkedin.png" alt="LinkedIn"/>
              </div>
            </a>
            {/* Example for Facebook */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
               <div className="bg-[#E0D7D0] w-9 h-9 flex items-center justify-center rounded-full">
                 <img src="https://img.icons8.com/ios-filled/20/3A291D/facebook-new.png" alt="Facebook"/>
               </div>
            </a>
          </div>
        </motion.div>

        {/* <!-- Center: Pages --> */}
        <motion.div variants={itemVariants}>
          <h2 className="font-semibold text-[#B8A99C] mb-4">Pages</h2>
          <ul className="space-y-3 text-white">
            {/* --- UPDATED: Used Next.js Link for routing --- */}
            <li><Link href="/aboutus" className="hover:underline">About</Link></li>
            <li><Link href="/services" className="hover:underline">Service</Link></li>
            <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
          </ul>
        </motion.div>

        {/* <!-- Right: Connect --> */}
        <motion.div variants={itemVariants}>
          <h2 className="font-semibold text-[#B8A99C] mb-4">Connect</h2>
          <ul className="space-y-3 text-white">
            <li><a href="mailto:hello@khudahafiz.com" className="hover:underline">hello@khudahafiz.com</a></li>
            <li><a href="mailto:partnerships@khudahafiz.com" className="hover:underline">partnerships@khudahafiz.com</a></li>
          </ul>
        </motion.div>
      </motion.div>

      {/* <!-- Bottom Bar --> */}
      <motion.div 
        className="text-center text-[#E0D7D0] text-sm pt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        KHUDA HAFIZ &copy; 2024 All Right Reserved.
      </motion.div>
    </footer>
  );
}

export default Footer;
