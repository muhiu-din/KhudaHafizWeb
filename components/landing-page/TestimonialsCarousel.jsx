"use client"
import React, { useState } from 'react'; // Corrected the import
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from './contants';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalTestimonials = testimonials.length;

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % totalTestimonials);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + totalTestimonials) % totalTestimonials);
  };

  const getVisibleTestimonials = () => {
    const prevIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
    const nextIndex = (currentIndex + 1) % totalTestimonials;
    return [
      testimonials[prevIndex],
      testimonials[currentIndex],
      testimonials[nextIndex]
    ];
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    // UPDATED: Added bg-white and adjusted padding
    <section className="w-full bg-white py-20">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#281202]">Testimonials</h2>
        </div>

        <div className="relative flex items-center justify-center h-[450px] overflow-hidden">
          <AnimatePresence>
            <div className="flex items-center justify-center w-full">
              {/* Left Card */}
              <motion.div
                key={currentIndex - 1}
                className="absolute w-[350px] p-8 bg-[#F5F4F0] rounded-2xl shadow-lg opacity-50 transform -translate-x-full scale-90"
                initial={{ x: '-100%', opacity: 0, scale: 0.9 }}
                animate={{ x: '-80%', opacity: 0.5, scale: 0.9 }}
                exit={{ x: '-100%', opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                 <CardContent testimonial={visibleTestimonials[0]} isCenter={false} />
              </motion.div>

              {/* Center Card */}
              <motion.div
                key={currentIndex}
                className="relative w-[411px] p-8 bg-[#F5F4F0] rounded-2xl shadow-2xl z-10"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <CardContent testimonial={visibleTestimonials[1]} isCenter={true} />
              </motion.div>

              {/* Right Card */}
              <motion.div
                key={currentIndex + 1}
                className="absolute w-[350px] p-8 bg-[#F5F4F0] rounded-2xl shadow-lg opacity-50 transform translate-x-full scale-90"
                initial={{ x: '100%', opacity: 0, scale: 0.9 }}
                animate={{ x: '80%', opacity: 0.5, scale: 0.9 }}
                exit={{ x: '100%', opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                 <CardContent testimonial={visibleTestimonials[2]} isCenter={false} />
              </motion.div>
            </div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center mt-8 space-x-6">
          <button onClick={prevSlide} className="p-2 rounded-full hover:bg-gray-200 transition-colors">
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <div className="flex space-x-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-[#281202] scale-125' : 'bg-gray-300 hover:scale-110'}`}
              />
            ))}
          </div>
          <button onClick={nextSlide} className="p-2 rounded-full hover:bg-gray-200 transition-colors">
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

// Helper component for card content to avoid repetition
const CardContent = ({ testimonial, isCenter }) => {
    // Return null if testimonial data is not available to prevent crashes
    if (!testimonial) {
        return null;
    }

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
        ));
    };

    return (
        <>
            <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                    {React.cloneElement(testimonial.avatar, { size: 28, className: "text-gray-500" })}
                </div>
                <div>
                    <h3 className="font-bold text-lg text-[#281202]">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
                <div className="flex items-center ml-auto">
                    {renderStars(testimonial.rating)}
                </div>
            </div>
            <p className={`leading-relaxed ${isCenter ? 'text-gray-700' : 'text-gray-600 text-sm'}`}>
                "{isCenter ? testimonial.text : testimonial.text.substring(0, 100) + '...'}"
            </p>
        </>
    )
}

export default TestimonialCarousel;
