"use client";

import { useState } from "react";

const Notify = () => {
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <section className="relative w-full max-w-5xl mx-auto mt-25 mb-12 px-5 py-20">
      <div className="text-center mb-12 px-5">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-[#281202]">Compassionate Services in Times of Need</h2>
        <p className="text-lg font-normal text-[#281202] max-w-2xl mx-auto mt-2">
          Khuda Hafiz is Pakistan's first digital platform providing compassionate funeral services and tech support for social good. Bringing dignity, innovation, and care to life's most difficult moments.
        </p>

        {/* Email Notify Section */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="E-mail"
            className="w-full sm:w-auto flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black-500"
          />
          <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-900 transition duration-300">
            Notify Me
          </button>
        </div>
      </div>

{/* Feedback Floating Button */}
<div className="fixed bottom-6 right-6 flex flex-col items-center z-50">
  <button
    onClick={() => setShowFeedback(true)}
    className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-xl transition-all duration-300"
  >
    <img src="/auth-icons/feedback.png" alt="Feedback Icon" className="w-10 h-10 object-contain" />
  </button>
  <span className="mt-2 text-sm font-medium text-[#281202]">Feedback?</span>
</div>



      {/* Optional Feedback Modal (basic example) */}
      {showFeedback && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl">
            <h3 className="text-lg font-bold mb-4 text-[#281202]">Send us your feedback</h3>
            <textarea
              className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#281202]"
              rows="4"
              placeholder="Share your thoughts..."
            />
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={() => setShowFeedback(false)}
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-[#281202] text-white rounded hover:bg-[#3c1a07]">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Notify;
