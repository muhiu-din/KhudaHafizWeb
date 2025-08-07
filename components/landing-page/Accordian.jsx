"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-dotted border-gray-300 pb-2 mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-4 px-2 font-medium text-lg text-[#281202] flex justify-between items-center"
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="px-4 text-gray-700 overflow-hidden"
          >
            <p className="pb-4 pt-2">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Accordion = ({ data }) => {
  return (
    // UPDATED: Added bg-white and adjusted padding/margins
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#281202] mb-4">
                Khuda Hafiz FAQs
            </h2>
            <p className="text-xl text-gray-600">
                Do you have any questions? Your Answer might be below!
            </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-[#F2F2F2] shadow-lg rounded-xl p-4">
          {data.map((item, index) => (
            <AccordionItem key={index} {...item} />
          ))}
        </div>

        <div className="text-center mt-12 flex flex-col md:flex-row items-center justify-center gap-4">
          <span className="text-lg text-gray-700">NEED TO GET IN TOUCH?</span>
          <Link href={"/contact"} className="uppercase px-6 py-3 border border-[#281202] text-[#281202] font-bold rounded-md hover:bg-[#281202] hover:text-white transition-colors duration-300">
            Contact us Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Accordion;
