"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Notify = () => {
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    // UPDATED: Changed py-20 to pt-20 and added pb-24 to create space at the bottom instead.
    <section className="relative w-full bg-white pt-20 pb-24">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-12 px-5">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#281202]">Compassionate Services in Times of Need</h2>
          <p className="text-lg font-normal text-gray-600 max-w-3xl mx-auto mt-4">
            Khuda Hafiz is Pakistan's first digital platform providing compassionate funeral services and tech support for social good. Bringing dignity, innovation, and care to life's most difficult moments.
          </p>

          {/* Email Notify Section */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="E-mail"
              className="w-full sm:w-auto flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7B5A13] text-lg"
            />
            <button className="bg-[#281202] text-white font-bold px-8 py-3 rounded-md hover:bg-[#4a2b0f] transition duration-300 w-full sm:w-auto">
              Notify Me
            </button>
          </div>
        </div>

        {/* Feedback Floating Button */}
        <div className="fixed bottom-6 right-6 flex flex-col items-center z-50 group cursor-pointer">
          <motion.button
            onClick={() => setShowFeedback(true)}
            className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 group-hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/auth-icons/feedback.png" alt="Feedback Icon" className="w-10 h-10 object-contain" />
          </motion.button>
          <span className="mt-2 text-sm font-medium text-[#281202] transition-colors group-hover:text-[#7B5A13]">Feedback?</span>
        </div>

        {/* Feedback Modal */}
        <AnimatePresence>
          {showFeedback && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
              >
                <h3 className="text-xl font-bold mb-4 text-[#281202]">Send us your feedback</h3>
                <textarea
                  className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#281202]"
                  rows="4"
                  placeholder="Share your thoughts..."
                />
                <div className="flex justify-end gap-2">
                  <button
                    className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
                    onClick={() => setShowFeedback(false)}
                  >
                    Cancel
                  </button>
                  <button 
                    className="px-4 py-2 bg-[#281202] text-white rounded-md hover:bg-[#3c1a07] transition-colors"
                    onClick={() => setShowFeedback(false)} // Should also close modal on submit
                  >
                    Submit
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Notify;
