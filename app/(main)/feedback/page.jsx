'use client';

import { React, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Interactive Star Rating Component ---
const StarRating = ({ rating, setRating, isInteractive = true }) => {
  return (
    <div className={`flex space-x-1 ${isInteractive ? 'justify-center' : ''}`}>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <motion.svg
            key={index}
            onClick={() => isInteractive && setRating(starValue)}
            whileHover={isInteractive ? { scale: 1.2, y: -5 } : {}}
            whileTap={isInteractive ? { scale: 0.9 } : {}}
            className={`w-8 h-8 ${isInteractive ? 'cursor-pointer' : ''}`}
            viewBox="0 0 24 24"
            fill={starValue <= rating ? "#FFC107" : "#E0E0E0"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </motion.svg>
        );
      })}
    </div>
  );
};


// --- Feedback Card Component ---
const FeedbackCard = () => {
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
      rating: rating,
    });
    alert("Thank you for your feedback!");
    e.target.reset();
    setRating(0);
  };

  return (
    <motion.div
      className="w-full max-w-4xl p-6 sm:p-12 md:p-16 flex flex-col items-center"
      style={{
        backgroundColor: '#F5F4F0',
        boxShadow: '0px 10px 40px 0px #00000040',
        borderRadius: '50px',
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="w-full max-w-lg mb-8">
        <img src="/feedback/card.png" alt="Feedback illustration" className="w-full h-auto object-contain" />
      </div>
      <div className="text-center w-full max-w-xl mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-[#281202] mb-4">Got Feedback? We're All Ears!</h2>
        <p className="text-base md:text-lg text-gray-600">Whether it's praise, a bug, or an idea. We are listening. Drop your thoughts below.</p>
      </div>
      <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Name</label>
          <input type="text" id="name" name="name" required className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#704116] focus:border-transparent transition text-lg" />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Email</label>
          <input type="email" id="email" name="email" required className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#704116] focus:border-transparent transition text-lg" />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Message</label>
          <textarea id="message" name="message" rows="5" required className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#704116] focus:border-transparent transition text-lg"></textarea>
        </div>
        <div className="pt-6 pb-4">
            <StarRating rating={rating} setRating={setRating} />
        </div>
        <div className="flex justify-center pt-6">
            <motion.button type="submit" className="w-[250px] h-[75px] bg-[#281202] text-white text-xl font-bold rounded-xl flex items-center justify-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Submit
            </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

// --- Testimonials Section ---
const testimonialsData = [
    { name: "Abdullah", role: "Customer", rating: 5, text: "Losing a loved one is never easy, but Khuda Hafiz made sure we didn’t feel alone. They were there at every step, from washing and shrouding our mother with dignity to arranging a beautiful and respectful Janazah prayer. The team was always available, kind, and deeply understanding of our emotions and religious needs. We couldn’t have asked for a better experience during such a painful time." },
    { name: "Aitazaz", role: "Customer", rating: 5, text: "A genuinely professional and compassionate service. The team handled every detail with the utmost respect and efficiency. It felt like they were family, not just a service. They made a very difficult time much more manageable." },
    { name: "Fatima", role: "NGO Partner", rating: 5, text: "As an NGO, partnering with Khuda Hafiz has been a blessing. Their tech support and digital platform have streamlined our processes, allowing us to serve more families in need with dignity and care. Truly a social impact organization." },
    { name: "Bilal", role: "Customer", rating: 4, text: "The online portal was incredibly helpful for coordinating with family members who were out of the city. Everything was handled professionally. A much-needed service in Pakistan." },
    { name: "Sana Ahmed", role: "Customer", rating: 5, text: "From the first call to the final prayer, everything was handled perfectly. It relieved so much stress and allowed us to focus on grieving. I am incredibly grateful for their support." },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
    };

    const slideVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
    };

    return (
        <section className="w-full flex justify-center py-24 px-4">
            <div className="w-full max-w-[1200px] flex flex-col items-center">
                <h2 className="text-4xl font-bold text-[#281202] mb-16">Testimonials</h2>
                <div className="relative w-full flex items-center justify-center min-h-[450px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            className="w-full max-w-[411px] h-auto md:h-[423px] bg-white rounded-xl shadow-lg p-8 flex flex-col"
                            variants={slideVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <img src="/feedback/avatar.jpg" alt="avatar" className="w-12 h-12 rounded-full" />
                                <div>
                                    <h3 className="text-xl font-bold text-[#281202]">{testimonialsData[currentIndex].name}</h3>
                                    <p className="text-sm text-gray-500">{testimonialsData[currentIndex].role}</p>
                                </div>
                                <div className="ml-auto">
                                    <StarRating rating={testimonialsData[currentIndex].rating} isInteractive={false} />
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed">"{testimonialsData[currentIndex].text}"</p>
                        </motion.div>
                    </AnimatePresence>
                </div>
                
                {/* --- UPDATED: Indicators and Arrows Below --- */}
                <div className="flex items-center justify-center space-x-4 mt-8">
                    <motion.button onClick={handlePrev} className="p-2 rounded-full hover:bg-gray-200" whileTap={{ scale: 0.9 }}>
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </motion.button>
                    
                    <div className="flex justify-center space-x-2">
                        {testimonialsData.map((_, index) => (
                            <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-[#281202]' : 'bg-gray-300'}`}></button>
                        ))}
                    </div>

                    <motion.button onClick={handleNext} className="p-2 rounded-full hover:bg-gray-200" whileTap={{ scale: 0.9 }}>
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </motion.button>
                </div>
            </div>
        </section>
    );
};


// --- Main Page Component ---
const FeedbackPage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center py-16 sm:py-24 px-4">
      <motion.h1 
        className="text-4xl sm:text-5xl font-bold text-[#281202] mb-12 sm:mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Feedback
      </motion.h1>
      <FeedbackCard />
      <Testimonials />
    </div>
  );
};

export default FeedbackPage;
