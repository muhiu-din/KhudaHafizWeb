// Creates Service Page
// Changed Logo from Footer


'use client';

import React from 'react';
import { motion } from 'framer-motion';

// --- Data for your services ---
const servicesList = [
  {
    title: 'Funeral Planning & Support',
    description: 'We provide compassionate guidance and meticulous planning to honor your loved one’s memory, handling all arrangements with dignity and respect to ease your burden during this difficult time.',
  },
  {
    title: 'Booking & Logistics Coordination',
    description: 'Our team manages all logistical aspects, including venue booking, transportation, and scheduling, ensuring a seamless and stress-free process for your family and guests.',
  },
  {
    title: 'Grief Counseling Resources',
    description: 'We connect you with a network of professional grief counselors and support groups to help you and your family navigate the emotional journey of loss in a safe and supportive environment.',
  },
  {
    title: 'NGO Website Development',
    description: 'We empower fellow non-profits by developing professional, user-friendly websites that effectively communicate their mission and amplify their impact in the community.',
  },
  {
    title: 'AI Integration & Chatbot Solutions',
    description: 'Leverage modern technology with our AI and chatbot solutions, designed to provide instant, 24/7 support and information to the communities you serve, directly on your website.',
  },
  {
    title: 'Tech Consultation for Nonprofits',
    description: 'Our tech experts offer strategic consultation to help other NGOs and compassionate organizations optimize their digital tools, streamline operations, and better achieve their goals.',
  },
];

// --- Animation Variants for Framer Motion ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // This will make cards appear one after another
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-[#FFF9F3] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* --- Page Header --- */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 tracking-tight">
            Our Comprehensive Services
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Dedicated support designed to provide comfort, guidance, and technical
            empowerment.
          </p>
        </motion.div>

        {/* --- Services Grid --- */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {servicesList.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="bg-[#704116] rounded-xl shadow-lg p-8 flex flex-col"
              whileHover={{ y: -8, scale: 1.03 }} // Animation on hover
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold text-white">
                {service.title}
              </h3>
              <p className="mt-4 text-slate-200 text-opacity-90 flex-grow">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;