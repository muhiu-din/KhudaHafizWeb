'use client';

import React from 'react';
import { motion } from 'framer-motion';

const drivesUsData = [
  {
    iconUrl: '/about-us/assets/care.png',
    title: 'Compassionate Care',
    description: 'Every feature is thoughtfully crafted with empathy, cultural sensitivity and a deep respect for diverse funeral traditions, ensuring families feel understood and supported during their most difficult times.',
  },
  {
    iconUrl: '/about-us/assets/innovation.png',
    title: 'Digital Innovation',
    description: 'Leveraging technology to simplify complex processes while maintaining dignity, ensuring seamless coordination, enhancing accessibility, and providing families with reliable support in their time of need.',
  },
  {
    iconUrl: '/about-us/assets/social.png',
    title: 'Social Impact',
    description: 'Supporting communities and NGOs with compassionate technology solutions that promote equity, expand access to essential services, and drive lasting, positive change for the greater good.',
  },
];

const WhatDrivesUs = () => {
    const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };
    const cardVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } } };

  return (
    <section className="w-full flex justify-center py-24 px-4">
      <div className="w-full max-w-[1200px] flex flex-col items-center">
        <motion.h2 
            className="text-4xl font-bold mb-20 text-center" 
            style={{ color: '#281202' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
        >
          What Drives Us
        </motion.h2>
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
          {drivesUsData.map((item, index) => (
            <motion.div
              key={index}
              className="w-full max-w-[383px] h-auto md:h-[522px] p-8 flex flex-col items-center text-center border mx-auto"
              style={{ backgroundColor: '#F5F4F0', borderColor: '#190A02', boxShadow: '0px 4px 20px 0px #00000033', borderRadius: '24px' }}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.03, boxShadow: '0px 10px 30px 0px #00000040' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="mb-6"><img src={item.iconUrl} alt={`${item.title} icon`} className="w-24 h-24" /></div>
              <h3 className="text-3xl font-bold mb-4" style={{ color: '#281202' }}>{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatDrivesUs;
