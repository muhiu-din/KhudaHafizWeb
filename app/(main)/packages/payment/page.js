// app/packages/payment/page.js
'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';

// A small SVG icon for the wallet
const WalletIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
);

// ***** BUG FIX Part 1: The modal now accepts an `onMethodSelect` function *****
const PaymentModal = ({ onClose, router, orderDetails, onMethodSelect }) => {
  const [paymentMethod, setPaymentMethod] = useState('wallet');

  const handleProceed = () => {
    if (paymentMethod === 'card') {
      // If card is selected, redirect to the card page.
      const { name, price, items } = orderDetails;
      const itemsString = encodeURIComponent(JSON.stringify(items));
      router.push(`/packages/payment/card?name=${encodeURIComponent(name)}&price=${price}&items=${itemsString}`);
    } else {
      // If wallet is selected, call the function from the parent to update the state.
      onMethodSelect('Online Wallet');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
      <div className="bg-white p-8 rounded-2xl relative max-w-md w-full shadow-2xl">
        <button onClick={onClose} className="absolute top-3 right-5 text-gray-400 hover:text-gray-800 text-4xl font-light" aria-label="Close modal">
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-6 text-black text-center">Select Payment Method</h2>
        <div className="space-y-4 mb-8">
          <label htmlFor="wallet" className={`flex items-center p-4 border-2 rounded-lg cursor-pointer ${paymentMethod === 'wallet' ? 'border-[#8A6A2F] bg-[#FFF9F3]' : 'border-gray-200'}`}>
            <input type="radio" id="wallet" name="paymentMethod" value="wallet" checked={paymentMethod === 'wallet'} onChange={() => setPaymentMethod('wallet')} className="h-4 w-4 text-[#8A6A2F] focus:ring-[#8A6A2F]"/>
            <span className="ml-3 font-semibold text-black">Online Wallet</span>
          </label>
          <label htmlFor="card" className={`flex items-center p-4 border-2 rounded-lg cursor-pointer ${paymentMethod === 'card' ? 'border-[#8A6A2F] bg-[#FFF9F3]' : 'border-gray-200'}`}>
            <input type="radio" id="card" name="paymentMethod" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} className="h-4 w-4 text-[#8A6A2F] focus:ring-[#8A6A2F]"/>
            <span className="ml-3 font-semibold text-black">Card Payment</span>
          </label>
        </div>
        <button onClick={handleProceed} className="w-full px-4 py-3 rounded-lg bg-black text-white font-bold hover:bg-gray-800">
          {paymentMethod === 'card' ? 'Proceed to Card Payment' : 'Confirm Selection'}
        </button>
      </div>
    </div>
  );
};

const LoadingModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
        <div className="bg-white p-10 rounded-2xl shadow-2xl flex flex-col items-center max-w-sm w-full">
             <p className="text-xl font-semibold text-gray-700 mb-4 text-center">
                Please wait while your payment is being processed
            </p>
            <h3 className="text-4xl font-bold text-[#8A6A2F] animate-pulse">
                Loading • • •
            </h3>
        </div>
    </div>
);


const OrderDetailsPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [orderDetails, setOrderDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('Online Wallet');
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const name = searchParams.get('name') || 'N/A';
    const price = searchParams.get('price') || 0;
    const itemsParam = searchParams.get('items');
    const items = itemsParam ? JSON.parse(decodeURIComponent(itemsParam)) : [];
    const orderNumber = Math.floor(1000000 + Math.random() * 9000000);
    const date = new Date().toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    setOrderDetails({ name, price, items, orderNumber, date });

    const paymentMethodParam = searchParams.get('paymentMethod');
    if (paymentMethodParam === 'card') {
      setSelectedPaymentMethod('Card Payment');
    }
  }, [searchParams]);

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      const { name, price, items, orderNumber, date } = orderDetails;
      const itemsString = encodeURIComponent(JSON.stringify(items));
      router.push(
        `/orders/confirmation?name=${encodeURIComponent(name)}&price=${price}&items=${itemsString}&orderNumber=${orderNumber}&date=${encodeURIComponent(date)}&paymentMethod=${encodeURIComponent(selectedPaymentMethod)}`
      );
    }, 2000);
  };

  // ***** BUG FIX Part 2: This function updates the state and closes the modal *****
  const handleMethodSelection = (method) => {
    setSelectedPaymentMethod(method);
    setIsModalOpen(false);
  };

  if (!orderDetails) {
    return (
      <div className="bg-[#FFF9F3] min-h-screen flex items-center justify-center text-black">
        <p>Loading Order Details...</p>
      </div>
    );
  }

  return (
    <div className="relative bg-[#FFF9F3] min-h-screen flex items-center justify-center font-[Outfit] p-4 md:p-8">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-3xl font-bold text-center mb-8 text-black">Order Details</h1>
        <div className="grid grid-cols-3 gap-4 text-center mb-6">
          <div>
            <p className="text-sm text-gray-500 mb-1">Date</p>
            <p className="font-semibold text-black">{orderDetails.date}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Order Number</p>
            <p className="font-semibold text-black">{orderDetails.orderNumber}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Payment Method</p>
            <button onClick={() => setIsModalOpen(true)} className="font-semibold text-black cursor-pointer hover:opacity-75">
              {selectedPaymentMethod} <WalletIcon />
            </button>
          </div>
        </div>
        <hr className="my-6 border-gray-200" />
        <div>
          <div className="flex justify-between items-baseline mb-4 text-black">
            <h2 className="text-xl font-bold text-black">{orderDetails.name}</h2>
            <p className="text-xl font-bold text-black">Rs. {Number(orderDetails.price).toLocaleString()}</p>
          </div>
          <div className="space-y-2 text-black">
            {orderDetails.items.map((item, index) => (
              <div key={index} className="flex justify-between text-black">
                <span>{item.name}</span>
                <span>Rs. {item.price.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-8 border-gray-200 text-black" />
        <div className="text-center text-black">
            <p className="font-semibold mb-2 text-black">Proceed to Payment</p>
            <p className="text-sm mb-8 text-black">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                You will be redirected to your wallet to complete payment.
            </p>
            <div className="flex justify-center items-center space-x-4">
                <Link href="/packages" className="px-10 py-3 rounded-lg border border-gray-300 bg-white text-gray-800 font-bold hover:bg-gray-50">
                    Cancel
                </Link>
                <button onClick={handlePay} className="px-10 py-3 rounded-lg bg-black text-white font-bold hover:bg-gray-800">
                    Pay
                </button>
            </div>
        </div>
      </div>
      
      {/* ***** BUG FIX Part 3: Pass the new function to the modal ***** */}
      {isModalOpen && <PaymentModal 
        onClose={() => setIsModalOpen(false)} 
        router={router} 
        orderDetails={orderDetails}
        onMethodSelect={handleMethodSelection} 
      />}
      
      {isProcessing && <LoadingModal />}
    </div>
  );
};

export default OrderDetailsPage;
