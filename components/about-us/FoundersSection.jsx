'use client';

import React from 'react';
import { motion } from 'framer-motion';

const foundersData = [
    {
        name: "Muhibullah Nadeem",
        title: "CEO",
        imageUrl: "/about-us/assets/male.png"
    },
    {
        name: "katifa Memoon",
        title: "CTO",
        imageUrl: "/about-us/assets/female.png"
    },
    {
        name: "Syeda Zul Noorain",
        title: "CFO",
        imageUrl: "/about-us/assets/male.png"
    },
    {
        name: "Hadia Eman",
        title: "CMO",
        imageUrl: "/about-us/assets/female.png"
    }
];

const FoundersSection = () => {
    const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } } };
    const itemVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } } };

    return (
        <section className="w-full flex justify-center py-24 px-4">
            <div className="w-full max-w-[896px] flex flex-col items-center">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl font-bold" style={{color: '#281202'}}>Meet Our Founders</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Four passionate undergraduate founders united by a vision to bring dignity and compassion to funeral services through technology.
                    </p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {foundersData.map((founder, index) => (
                        <motion.div 
                            key={index} 
                            className="w-full max-w-[382px] flex flex-col items-center text-center"
                            variants={itemVariants}
                        >
                            <div 
                                className="relative w-[250px] h-[244px] rounded-full flex items-center justify-center border"
                                style={{
                                    backgroundColor: '#F6F6F8',
                                    borderColor: '#B7B7B7',
                                    boxShadow: '-5px -10px 15px 0px #03020226, 0px 0px 50px 0px #D9D9D933 inset'
                                }}
                            >
                                <img 
                                    src={founder.imageUrl} 
                                    alt={founder.name}
                                    className="w-[180px] h-[180px] object-cover rounded-full"
                                />
                            </div>
                            <h3 
                                className="font-bold text-3xl mt-8 leading-tight" 
                                style={{ fontFamily: 'Poppins, sans-serif', color: '#281202' }}
                            >
                                {founder.name}
                            </h3>
                            <p 
                                className="font-medium text-2xl mt-2 tracking-wider capitalize" 
                                style={{ fontFamily: 'Raleway, sans-serif', color: '#281202' }}
                            >
                                {founder.title}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FoundersSection;
