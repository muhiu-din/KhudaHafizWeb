'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Works = () => {
  return (
    // UPDATED: Removed vertical margins and adjusted padding to be full-width
    <section className="relative w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div 
          className="text-center mb-20 px-5"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          {/* Heading */}
          <h2 className="text-4xl font-bold text-[#281202] mb-4">How it works</h2>
          <p className="text-lg font-normal text-gray-600 max-w-3xl mx-auto">
            From compassionate funeral services to empowering social organizations with technology, we're building a comprehensive platform for positive impact.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {/* Step 1 */}
          <motion.div 
            className="flex flex-col items-center"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          >
            <div className="w-20 h-20 mb-4 bg-[#F5F4F0] rounded-full flex items-center justify-center shadow-md border border-gray-200">
              <img src="/auth-icons/acc.png" alt="Sign Up Icon" className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-[#281202] my-4">Sign Up</h3>
            <p className="text-base font-medium text-gray-500">Create Your Account</p>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            className="flex flex-col items-center"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          >
            <div className="w-20 h-20 mb-4 bg-[#F5F4F0] rounded-full flex items-center justify-center shadow-md border border-gray-200">
              <img src="/auth-icons/tick.png" alt="Package Icon" className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-[#281202] my-4">Select a Package</h3>
            <p className="text-base font-medium text-gray-500">Choose flexible service options</p>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            className="flex flex-col items-center"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          >
            <div className="w-20 h-20 mb-4 bg-[#F5F4F0] rounded-full flex items-center justify-center shadow-md border border-gray-200">
              <img src="/auth-icons/i3.png" alt="Wallet Icon" className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-[#281202] my-4">Create Wallet & Pay</h3>
            <p className="text-base font-medium text-gray-500">Securely handle transactions</p>
          </motion.div>
        </motion.div>

        {/* Quote */}
        <motion.div 
          className="text-center px-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-3xl font-bold text-[#281202] leading-relaxed">
            "Khuda Hafiz is where compassion meets innovation honoring every farewell with grace, dignity, and cultural care."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Works;
