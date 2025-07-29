"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from './contants';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const totalTestimonials = testimonials.length;

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % totalTestimonials);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, totalTestimonials]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % totalTestimonials);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + totalTestimonials) % totalTestimonials);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  // Get the testimonials to display (previous, current, next)
  const getVisibleTestimonials = () => {
    const prevIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
    const nextIndex = (currentIndex + 1) % totalTestimonials;
    
    return [
      { ...testimonials[prevIndex], position: 'left' },
      { ...testimonials[currentIndex], position: 'center' },
      { ...testimonials[nextIndex], position: 'right' }
    ];
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div 
      className="w-full max-w-7xl mx-auto px-4 py-12"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl mt-10 font-bold text-gray-900 my-2">Testimonials</h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
      </div>

      <div className="relative">
        {/* Main carousel container */}
        <div className="flex justify-center items-center py-8 min-h-[300px]">
          {visibleTestimonials.map((testimonial) => {
            const isCenter = testimonial.position === 'center';
            
            return (
              <div
                key={`${testimonial.id}-${currentIndex}`}
                className={`flex-shrink-0 bg-[#F3F2F2] mx-4 transition-all duration-500 relative ${
                  isCenter 
                    ? 'w-80 transform scale-110 z-20' 
                    : 'w-72 transform scale-95 z-10'
                }`}
              >
                <div className={`bg-[#F2F2F2] rounded-lg shadow-lg p-6 h-full border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative ${
                  !isCenter ? 'before:absolute before:inset-0 before:bg-white before:bg-opacity-40 before:rounded-lg before:z-10' : ''
                }`}>
                  {/* Header with avatar and info */}
                  <div className="flex items-center mb-4 relative z-20">
                    <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4 relative z-20">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-gray-700 leading-relaxed text-sm relative z-20">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation controls */}
      <div className="flex justify-center items-center mt-8 space-x-6">
        {/* Left arrow */}
        <button
          onClick={prevSlide}
          className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 border border-gray-200"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        {/* Dot indicators */}
        <div className="flex space-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                i === currentIndex ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={nextSlide}
          className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 border border-gray-200"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;