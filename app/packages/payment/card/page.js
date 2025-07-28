// app/packages/payment/card/page.js
'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

// A small SVG icon for the credit card
const CardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
    <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2H4zm0 2h12v1H4V6z" />
  </svg>
);

const CardPaymentPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cvv: '',
    cardName: '',
    expiry: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({ ...prev, [name]: value }));
  };

  // ***** THIS FUNCTION IS UPDATED *****
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Card Details Submitted:', cardDetails);
    
    // Get the original order details from the URL to pass them back
    const name = searchParams.get('name');
    const price = searchParams.get('price');
    const items = searchParams.get('items');

    // Redirect back to the payment page, adding a parameter to indicate card details were added
    router.push(`/packages/payment?name=${name}&price=${price}&items=${items}&paymentMethod=card`);
  };

  return (
    <div className="bg-[#FFF9F3] min-h-screen flex items-center justify-center font-[Outfit] p-4">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-2xl font-bold text-center mb-2 text-black">Add Card Details</h1>
        <div className="w-full flex justify-center mb-8">
            <div className="w-1/4 border-b-2 border-dotted border-gray-300"></div>
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card Number Field */}
            <div>
              <label htmlFor="cardNumber" className="block text-sm font-semibold text-gray-700 mb-1">Card Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <CardIcon />
                </div>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={cardDetails.cardNumber}
                  onChange={handleInputChange}
                  placeholder="1234 0000 0000 0000"
                  required
                  className="text-black w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8A6A2F]"
                />
              </div>
            </div>

            {/* CVV Field */}
            <div>
              <label htmlFor="cvv" className="block text-sm font-semibold text-gray-700 mb-1">CVV</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={cardDetails.cvv}
                onChange={handleInputChange}
                placeholder="123"
                required
                className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8A6A2F]"
              />
            </div>

            {/* Name on Card Field */}
            <div>
              <label htmlFor="cardName" className="block text-sm font-semibold text-gray-700 mb-1">Name on card</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={cardDetails.cardName}
                onChange={handleInputChange}
                placeholder="Hanan Iqbal"
                required
                className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8A6A2F]"
              />
            </div>

            {/* Expiry Field */}
            <div>
              <label htmlFor="expiry" className="block text-sm font-semibold text-gray-700 mb-1">Expiry</label>
              <input
                type="text"
                id="expiry"
                name="expiry"
                value={cardDetails.expiry}
                onChange={handleInputChange}
                placeholder="09/27"
                required
                className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8A6A2F]"
              />
            </div>
          </div>

          <div className="text-center pt-4">
            <button type="submit" className="px-12 py-3 rounded-lg bg-black text-white font-bold hover:bg-gray-800">
              Done
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardPaymentPage;
