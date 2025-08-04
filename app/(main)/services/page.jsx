'use client';

import React from 'react';
import { motion } from 'framer-motion';

// --- Data for your services ---
const primaryServices = [
  {
    id: 'shroud',
    title: 'Shroud (Kafan)',
    description: 'We provide high-quality Islamic shrouds for men, women, and children.',
    imageUrl: '/home-page/assets/shroud.png',
    gridPosition: 'md:row-start-2 md:col-start-1 justify-self-end',
  },
  {
    id: 'grave',
    title: 'Grave Management',
    description: 'We assist in grave selection, purchasing, and digging to ensure a smooth burial process.',
    imageUrl: '/home-page/assets/grave.png',
    gridPosition: 'md:row-start-1 md:col-start-2 justify-self-center',
  },
  {
    id: 'catering',
    title: 'Catering Management',
    description: 'We provide meal arrangements for condolence gatherings, offering hassle-free catering.',
    imageUrl: '/home-page/assets/chef.png',
    gridPosition: 'md:row-start-3 md:col-start-2 justify-self-center',
  },
  {
    id: 'support',
    title: 'Emotional Support',
    description: 'We connect grieving families with professional therapists for counseling and support.',
    imageUrl: '/home-page/assets/enjoy.png',
    gridPosition: 'md:row-start-2 md:col-start-3 justify-self-start',
  },
];

// --- Reordered secondary services with updated image URLs ---
const secondaryServices = [
    {
        title: 'Tech Consultation for Nonprofits',
        description: 'Providing strategic technology consultation for Islamic welfare organizations and nonprofits to help them adopt modern digital solutions and improve operational efficiency.',
        imageUrl: '/services-page/assets/consultation.png',
        gradient: 'linear-gradient(to right, #F3E8D2, #E0B357)',
        layout: 'imageRight',
    },
    {
        title: 'Grief Counseling Resources',
        description: 'Professional counseling support, spiritual guidance, and resource materials to help families navigate grief, loss, and burial arrangements during difficult times with compassion and dignity.',
        imageUrl: '/services-page/assets/counselling.png',
        gradient: 'linear-gradient(to right, #A7C8FF, #B3CFFF)',
        layout: 'imageLeft',
    },
    {
        title: 'NGO Website Development',
        description: 'We provide custom website development tailored specifically for NGOs and community-based organizations, enabling them to share their mission, engage supporters, and amplify their social impact.',
        imageUrl: '/services-page/assets/development.png',
        gradient: 'linear-gradient(to right, #F3E8D2, #E0B357)',
        layout: 'imageRight',
    },
    {
        title: 'Booking & Logistics Coordination',
        description: 'Streamlined booking system for grave sites, transportation, funeral venues, and all essential services, ensuring timely, respectful arrangements without added stress.',
        imageUrl: '/services-page/assets/booking.png',
        gradient: 'linear-gradient(to right, #A7C8FF, #B3CFFF)',
        layout: 'imageLeft',
    },
    {
        title: 'AI Integration & Chatbot Solutions',
        description: 'Empowering social platforms with intelligent chatbot solutions designed to boost engagement, answer queries instantly, and build stronger, more connected communities.',
        imageUrl: '/services-page/assets/ai.png',
        gradient: 'linear-gradient(to right, #F3E8D2, #E0B357)',
        layout: 'imageRight',
    },
    {
        title: 'Funeral Planning and Support',
        description: 'Comprehensive planning tools and step-by-step guidance for all funeral arrangements, delivered with cultural and religious sensitivity.',
        imageUrl: '/services-page/assets/planning.png',
        gradient: 'linear-gradient(to right, #A7C8FF, #B3CFFF)',
        layout: 'imageLeft',
    },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardPopIn = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

const secondaryCardSlideIn = (layout) => ({
  hidden: { opacity: 0, x: layout === 'imageLeft' ? -100 : 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
});

const ServicesPage = () => {
  return (
    <div style={{ backgroundColor: '#F5F4F0' }} className="min-h-screen font-sans overflow-x-hidden">
      {/* Wrapper for centered content */}
      <div className="container mx-auto px-4 pt-12 sm:pt-16 pb-24 flex flex-col items-center">
        {/* --- Page Header --- */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 tracking-tight">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            We provide respectful end-of-life services rooted in faith and compassion.
          </p>
        </motion.div>

        {/* --- Primary Services Section --- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-x-8 gap-y-2 w-full md:w-[1200px] items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {primaryServices.map((service) => (
            <motion.div
              key={service.id}
              variants={cardPopIn}
              className={`w-full max-w-[383px] h-[484px] bg-white rounded-3xl p-8 text-center flex flex-col ${service.gridPosition}`}
              style={{ boxShadow: '0px 10px 40px 0px #00000040' }}
            >
              <motion.div
                className="flex-grow flex flex-col items-center justify-center"
                whileHover="hover"
              >
                <motion.img
                  src={service.imageUrl}
                  alt={`${service.title} illustration`}
                  className="rounded-lg"
                  style={{ width: '229px', height: '229px' }}
                  variants={{
                    hover: {
                      scale: 1.1,
                      rotate: -5,
                      y: -20,
                      transition: { type: 'spring', stiffness: 300, damping: 10 },
                    },
                  }}
                />
                <motion.h3
                  className="text-2xl font-bold text-gray-800 mt-8"
                  variants={{ hover: { y: 20, transition: { type: 'spring', stiffness: 300 } } }}
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  className="text-gray-600 mt-2"
                  variants={{ hover: { y: 20, transition: { type: 'spring', stiffness: 300 } } }}
                >
                  {service.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* --- Secondary Services Section (Full-width) --- */}
      <div className="mt-32 space-y-16 w-full">
          {secondaryServices.map((service, index) => (
              <div key={index} className={`w-full flex ${service.layout === 'imageLeft' ? 'justify-start' : 'justify-end'}`}>
                  <motion.div
                      className={`relative w-full max-w-[1321px] h-auto md:h-[465px] p-8 sm:p-12 overflow-hidden flex flex-col md:flex-row items-center gap-8
                          ${service.layout === 'imageLeft' ? 'rounded-tr-[50px] rounded-br-[50px]' : 'rounded-tl-[50px] rounded-bl-[50px]'}
                      `}
                      style={{ backgroundImage: service.gradient, boxShadow: '0px 10px 40px 0px #00000020' }}
                      variants={secondaryCardSlideIn(service.layout)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                  >
                      <div className={`w-full md:w-1/2 text-left px-4 md:px-12 ${service.layout === 'imageRight' ? 'md:order-1' : 'md:order-2'}`}>
                          <h3 className="text-3xl font-bold text-gray-800">{service.title}</h3>
                          <p className="mt-4 text-gray-700 text-lg">{service.description}</p>
                      </div>
                      <div className={`w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0 ${service.layout === 'imageRight' ? 'md:order-2' : 'md:order-1'}`}>
                          <motion.img
                          src={service.imageUrl}
                          alt={`${service.title} illustration`}
                          className="max-w-xs md:max-w-sm lg:max-w-md rounded-lg"
                          whileHover={{ scale: 1.05, rotate: service.layout === 'imageRight' ? -2 : 2 }}
                          transition={{ type: 'spring', stiffness: 200 }}
                          />
                      </div>
                      <div className="absolute top-4 right-4 bg-white/70 backdrop-blur-sm text-gray-600 text-xs font-semibold px-3 py-1 rounded-full">
                          coming soon
                      </div>
                  </motion.div>
              </div>
          ))}
      </div>
      {/* Added padding at the bottom for spacing */}
      <div className="py-16"></div>
    </div>
  );
};

export default ServicesPage;
