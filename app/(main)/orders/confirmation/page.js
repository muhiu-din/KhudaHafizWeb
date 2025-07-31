// app/orders/confirmation/page.js
'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

// Green checkmark icon
const CheckIcon = () => (
  <svg className="w-16 h-16 mx-auto text-white bg-green-500 rounded-full p-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

const OrderConfirmationPage = () => {
  const searchParams = useSearchParams();
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  useEffect(() => {
    // Read all the details from the URL
    const name = searchParams.get('name') || 'N/A';
    const price = searchParams.get('price') || 0;
    const itemsParam = searchParams.get('items');
    const items = itemsParam ? JSON.parse(decodeURIComponent(itemsParam)) : [];
    const orderNumber = searchParams.get('orderNumber') || 'N/A';
    const date = searchParams.get('date') || 'N/A';
    const paymentMethod = searchParams.get('paymentMethod') || 'N/A';

    setConfirmedOrder({ name, price, items, orderNumber, date, paymentMethod });
  }, [searchParams]);

  // Show a loading state while details are being read from the URL
  if (!confirmedOrder) {
    return (
      <div className="bg-[#FFF9F3] min-h-screen flex items-center justify-center text-black">
        <p>Loading Confirmation...</p>
      </div>
    );
  }

  return (
    <div className="bg-[#FFF9F3] min-h-screen flex items-center justify-center font-geist p-4 md:p-8">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <div className="text-center">
          <CheckIcon />
          <h1 className="text-3xl font-bold text-center mt-6 mb-2 text-black">Your order has been Confirmed</h1>
          <p className="text-gray-600 mb-8">Thank you! Your payment has been processed successfully.</p>
        </div>

        <h2 className="text-xl font-bold text-center mb-4 text-black">Order Summary</h2>

        {/* Order Details Section */}
        <div className="grid grid-cols-3 gap-4 text-center mb-6">
          <div>
            <p className="text-sm text-gray-500 mb-1">Date</p>
            <p className="font-semibold text-black">{confirmedOrder.date}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Order Number</p>
            <p className="font-semibold text-black">{confirmedOrder.orderNumber}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Payment Method</p>
            <p className="font-semibold text-black">{confirmedOrder.paymentMethod}</p>
          </div>
        </div>

        <hr className="my-6 border-gray-200" />

        {/* Package Breakdown Section */}
        <div>
          <div className="flex justify-between items-baseline mb-4 text-black">
            <h3 className="text-lg font-bold">{confirmedOrder.name}</h3>
            <p className="text-lg font-bold">Rs. {Number(confirmedOrder.price).toLocaleString()}</p>
          </div>
          <div className="space-y-2 text-gray-600">
            {confirmedOrder.items.map((item, index) => (
              <div key={index} className="flex justify-between">
                <span>{item.name}</span>
                <span>Rs. {item.price.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Link href="/" className="px-12 py-3 rounded-lg bg-black text-white font-bold hover:bg-gray-800">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
