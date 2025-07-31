'use client';

import React, { useState } from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaLink,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaCheckCircle,
  FaCopy,
} from 'react-icons/fa';

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const messageText = "Your message has been submitted successfully!";

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setCopySuccess(false);
    e.target.reset();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(messageText);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white text-[#2b190f] px-4 py-10 space-y-16">
      
      {/* Hero Section */}
      <section className="text-center space-y-3">
        <h1 className="text-3xl font-bold">Get in Touch</h1>
        <p className="text-gray-600">
          Have questions about our services or want to learn more about partnering with us?<br />
          We’d love to hear from you.
        </p>
      </section>

      {/* Form + Illustration Section */}
      <section className="max-w-6xl mx-auto bg-[#f6f3ef] rounded-xl shadow p-8 flex flex-col md:flex-row gap-10 items-center">
        
        {/* Contact Form */}
        <div className="w-full md:w-2/3 space-y-5">
          <h2 className="text-2xl font-bold">Stay Connected</h2>
          <p className="text-gray-600">We are here for you! How we can help?</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" className="w-full border p-3 rounded" required />
            <input type="email" placeholder="Email" className="w-full border p-3 rounded" required />
            <input type="tel" placeholder="Phone Number" className="w-full border p-3 rounded" required />
            <textarea rows="4" placeholder="Message" className="w-full border p-3 rounded" required></textarea>
            <button type="submit" className="bg-black text-white px-6 py-2 rounded">Submit</button>
          </form>

          {submitted && (
            <div className="mt-6 bg-green-100 border border-green-400 text-green-900 px-6 py-5 rounded-xl shadow space-y-4">
              <div className="flex items-center space-x-3">
                <FaCheckCircle className="text-green-600 text-2xl" />
                <span className="text-base font-semibold">{messageText}</span>
              </div>

              <p className="text-sm text-gray-700 font-medium">
                Help others by sharing this platform with your friends & family ❤️
              </p>

              <div className="flex justify-between items-center flex-wrap gap-2">
                <span className="text-sm text-gray-600 italic">Message: {messageText}</span>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 bg-[#7B5A13] hover:bg-[#6a4e10] text-white px-4 py-1 rounded-full text-sm transition duration-200"
                >
                  <FaCopy />
                  <span>{copySuccess ? "Copied!" : "Copy Message"}</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Illustration + Info */}
        <div className="w-full md:w-1/3 flex flex-col items-center space-y-4 text-sm text-center">
          <img src="/contactpage.png" alt="Contact Us" className="w-40 h-40 object-contain mx-auto" />
          <div className="space-y-2 text-left">
            <div className="flex items-center gap-2"><FaPhone /> <span>Helpline 0800-786-786</span></div>
            <div className="flex items-center gap-2"><FaEnvelope /> <span>khudahafiz.co@gmail.com</span></div>
            <div className="flex items-center gap-2"><FaLink /> <span>partnerships@khudahafiz.com</span></div>
          </div>
        </div>
      </section>

      {/* Platform Note */}
      <div className="bg-[#f6f3ef] p-4 rounded text-center text-sm max-w-4xl mx-auto">
        <strong>Note:</strong> While our full platform is still in development, we're already helping organizations with tech solutions. Reach out to learn more!
      </div>

      {/* Help Others Section */}
      <section className="text-center space-y-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold">Help Others by Sharing!</h2>
        <p className="text-gray-600">Your simple act of sharing can bring comfort and hope to someone facing loss.</p>

        <h3 className="font-semibold text-lg">Your Message can guide someone towards peace and healing.</h3>
        
        <div className="bg-[#f6f3ef] border rounded p-4 font-medium text-md">
          Khuda Hafiz helped me find peace during loss. Share it to help someone in need!
        </div>
        

        {/* Social Buttons */}
        <div className="flex justify-center gap-3 text-white text-xl mt-4">
          <a href="#"><FaLinkedin className="bg-[#0077b5] p-2 rounded w-10 h-10" /></a>
          <a href="#"><FaWhatsapp className="bg-[#25D366] p-2 rounded w-10 h-10" /></a>
          <a href="#"><FaFacebook className="bg-[#3b5998] p-2 rounded w-10 h-10" /></a>
          <a href="#"><FaTwitter className="bg-[#000000] p-2 rounded w-10 h-10" /></a>
        </div>

        <p className="text-sm text-gray-500">Thank you for helping others find peace and guidance.</p>
      </section>
    </div>
  );
}
