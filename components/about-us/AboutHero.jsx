'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  const imageUrl = '/about-us/assets/logo.png'; 

  return (
    <section 
      className="relative w-full h-[523px] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#190B00' }}
    >
      <div className="relative z-10 w-full max-w-[1440px] h-full mx-auto">
        <motion.div className="absolute top-[73px] left-0 w-[543px] h-[450px]" initial={{ opacity: 0, x: -100, rotate: -10 }} animate={{ opacity: 0.5, x: 0, rotate: 0 }} transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}>
          <img src={imageUrl} alt="Logo Reflection" className="w-full h-full object-contain transform scale-x-[-1]" />
        </motion.div>
        <motion.div className="absolute top-[71px] right-0 w-[543px] h-[450px]" initial={{ opacity: 0, x: 100, rotate: 10 }} animate={{ opacity: 1, x: 0, rotate: 0 }} transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}>
          <img src={imageUrl} alt="Logo" className="w-full h-full object-contain" />
        </motion.div>
        <motion.div className="absolute top-[191px] left-[120px] w-full max-w-[606px] h-[180px] text-white" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}>
          <h1 className="text-6xl font-bold">Our Story</h1>
          <p className="mt-4 text-xl text-gray-300 leading-relaxed">In Pakistan, conversations around death and funeral services are often met with silence. We believe this silence creates burden during the most difficult times in our lives.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
