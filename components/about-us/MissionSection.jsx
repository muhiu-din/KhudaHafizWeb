'use client';

import React from 'react';
import { motion } from 'framer-motion';

const missionData = [
    {
        title: "Our Mission",
        description: "Our long-term vision extends beyond funeral services to building a comprehensive digital ecosystem that empowers NGOs, social organizations, and communities through innovative technology solutions.",
        imageUrl: "/about-us/assets/pic.png", 
        layout: "textLeft"
    },
    {
        title: "Compassion meets Innovation",
        description: "Khuda Hafiz was born from the recognition that technology can bring compassion, efficiency, and dignity to funeral services. We’re not just building a platform, we’re creating a movement to normalize conversations around death while providing meaningful support to grieving families.",
        imageUrl: "/about-us/assets/compassion.png", 
        layout: "textRight"
    }
];

const MissionSection = () => {
    const sectionVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } };

    return (
        <section className="w-full flex flex-col items-center space-y-24 py-16">
            {missionData.map((item, index) => (
                <motion.div
                    key={index}
                    className="relative w-full max-w-[1200px] h-auto md:h-[485px] flex flex-col md:flex-row items-center px-4"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className={`w-full md:w-1/2 flex justify-center ${item.layout === 'textLeft' ? 'md:order-1' : 'md:order-2'}`}>
                        <div className="w-full max-w-[584px] p-4 text-center md:text-left">
                            <h2 className="text-5xl font-bold mb-6" style={{color: '#281202'}}>{item.title}</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">{item.description}</p>
                        </div>
                    </div>
                    <div className={`w-full md:w-1/2 h-full flex items-center justify-center mt-8 md:mt-0 ${item.layout === 'textLeft' ? 'md:order-2' : 'md:order-1'}`}>
                        <div className="relative w-[485px] h-[439px] flex items-center justify-center">
                            <div className="absolute inset-0" style={{ backgroundColor: '#FFFFFF', borderTopLeftRadius: '10px', borderTopRightRadius: '200px', borderBottomRightRadius: '200px', borderBottomLeftRadius: '200px', boxShadow: '0px 10px 40px 0px #0000001A' }}></div>
                            <motion.img src={item.imageUrl} alt={item.title} className="relative w-[398px] h-[398px] object-contain" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }} />
                        </div>
                    </div>
                </motion.div>
            ))}
        </section>
    );
};

export default MissionSection;
