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

  const renderStars = (rating, isCenter = true) => {
    const starSize = isCenter ? 'w-4 h-4' : 'w-3 h-3';
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`${starSize} ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-yellow-300'}`}
      />
    ));
  };

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

      <div className="relative overflow-hidden">
        {/* Main carousel container */}
        <div className="flex justify-center items-end py-8 min-h-[400px]">
          {visibleTestimonials.map((testimonial) => {
            const isCenter = testimonial.position === 'center';
            const isLeft = testimonial.position === 'left';

            return (
              <div
                key={`${testimonial.id}-${currentIndex}`}
                className={`flex-shrink-0 mx-3 transition-all duration-700 ease-in-out transform ${isCenter
                  ? 'w-96 scale-100 translate-y-0 z-30 opacity-100'
                  : isLeft
                    ? 'w-80 scale-90 translate-y-4 -translate-x-2 z-10 opacity-75'
                    : 'w-80 scale-90 translate-y-4 translate-x-2 z-10 opacity-75'
                  }`}
                style={{
                  filter: isCenter ? 'none' : 'blur(0.5px)',
                }}
              >
                <div className={`bg-[#F5F4F0] rounded-2xl shadow-lg border border-gray-100 transition-all duration-700 ${isCenter
                  ? 'p-8 h-auto hover:shadow-2xl shadow-xl'
                  : 'p-6 h-80 hover:shadow-lg'
                  }`}>
                  {/* Header with avatar and info */}
                  <div className={`flex items-center mb-4 ${isCenter ? 'mb-6' : 'mb-4'}`}>
                    <div className={`bg-gradient-to-br rounded-full flex items-center justify-center text-[#999999] font-semibold mr-4 ${isCenter ? 'w-14 h-14 text-lg' : 'w-10 h-10 text-sm'
                      }`}>
                      {React.cloneElement(testimonial.avatar, {
                        size: isCenter ? 40 : 30,
                        className: "text-current -mt-4"
                      })}
                    </div>
                    <div className='w-full'>
                      <h3 className={`font-semibold text-gray-900 ${isCenter ? 'text-lg' : 'text-base'}`}>
                        {testimonial.name}
                      </h3>
                      <div className="flex justify-between">
                        <p className={`text-gray-600 ${isCenter ? 'text-sm' : 'text-xs'}`}>
                          {testimonial.role}
                        </p>
                        <div className={`flex items-center ml-10 ${isCenter ? 'mb-6' : 'mb-4'}`}>
                          {renderStars(testimonial.rating, isCenter)}
                        </div>
                      </div>
                    </div>
                  </div>



                  <p className={`text-gray-700 leading-relaxed ${isCenter ? 'text-base' : 'text-sm'
                    }`}>
                    {isCenter ? testimonial.text : testimonial.text.substring(0, 120) + '...'}
                  </p>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center items-center mt-8 space-x-6">
        {/* Left arrow */}
        <button
          onClick={prevSlide}
          className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 hover:border-blue-200 transition-all duration-300 border border-gray-200 group"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
        </button>

        {/* Dot indicators */}
        <div className="flex space-x-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentIndex
                ? 'bg-[#867D7D] scale-125'
                : 'bg-[#7B7272] hover:scale-110'
                }`}
            />
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={nextSlide}
          className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 hover:border-blue-200 transition-all duration-300 border border-gray-200 group"
        >
          <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;