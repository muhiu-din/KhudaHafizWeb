// app/packages/page.js
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const servicesData = [
  { name: 'Kafan', price: 4000 },
  { name: 'Grave', price: 40000 },
  { name: 'Catering', price: 120000 },
  { name: 'Flowers', price: 1000 },
  { name: 'Tombstone', price: 10000 },
];

const PackagesPage = () => {
  const [selectedServices, setSelectedServices] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);
  const router = useRouter();

  // ***** FIX #1: This function now accepts an 'items' array *****
  const handleProceedToPayment = (name, price, items) => {
    // We convert the list of items into a special string to safely pass it in the URL
    const itemsString = encodeURIComponent(JSON.stringify(items));
    // And we add it to the URL
    router.push(`/packages/payment?name=${encodeURIComponent(name)}&price=${price}&items=${itemsString}`);
  };

  const handleServiceChange = (event) => {
    const { name, checked } = event.target;
    setSelectedServices(prevSelected => ({
      ...prevSelected,
      [name]: checked,
    }));
  };

  useEffect(() => {
    const newTotal = servicesData.reduce((accumulator, service) => {
      if (selectedServices[service.name]) {
        return accumulator + service.price;
      }
      return accumulator;
    }, 0);
    setTotalAmount(newTotal);
  }, [selectedServices]);

  return (
    <div className="font-[Outfit] bg-[#FFF9F3]">
      <section className="px-6 md:px-24 pt-12 md:pt-24 pb-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Choose Your Package</h2>
        <p className="text-[#6B4E2E] mb-10">
          Choose from compassionate service packages that take care of every detail during difficult times.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ***** FIX #2: The buttons now pass the list of items ***** */}
          
          {/* Basic Package */}
          <div className="bg-[#8A6A2F] text-white rounded-xl p-6 shadow-lg flex flex-col justify-between h-full">
            <div>
              <h3 className="text-2xl font-bold mb-2">Basic Package</h3>
              <p className="text-xl font-bold mb-4">Rs 125,000</p>
              <ul className="text-left space-y-2 mb-6">
                <li>✔ Kafan - Rs. 4,000</li>
                <li>✔ Flowers - Rs. 1,000</li>
                <li>✔ Catering - Rs. 120,000</li>
              </ul>
            </div>
            <button 
              onClick={() => handleProceedToPayment(
                'Basic Package', 
                125000, 
                [{name: 'Kafan', price: 4000}, {name: 'Flowers', price: 1000}, {name: 'Catering', price: 120000}]
              )} 
              className="bg-black text-white px-6 py-2 rounded-md mt-auto">
              Buy Now
            </button>
          </div>

          {/* Standard Package */}
          <div className="bg-[#8A6A2F] text-white rounded-xl p-6 shadow-lg flex flex-col justify-between h-full">
            <div>
              <h3 className="text-2xl font-bold mb-2">Standard Package</h3>
              <p className="text-xl font-bold mb-4">Rs 165,000</p>
              <ul className="text-left space-y-2 mb-6">
                <li>✔ Kafan - Rs. 4,000</li>
                <li>✔ Grave - Rs. 40,000</li>
                <li>✔ Flowers - Rs. 1,000</li>
                <li>✔ Catering - Rs. 120,000</li>
              </ul>
            </div>
            <button 
              onClick={() => handleProceedToPayment(
                'Standard Package', 
                165000, 
                [{name: 'Kafan', price: 4000}, {name: 'Grave', price: 40000}, {name: 'Flowers', price: 1000}, {name: 'Catering', price: 120000}]
              )} 
              className="bg-black text-white px-6 py-2 rounded-md mt-auto">
              Buy Now
            </button>
          </div>

          {/* Premium Package */}
          <div className="bg-[#8A6A2F] text-white rounded-xl p-6 shadow-lg flex flex-col justify-between h-full">
            <div>
              <h3 className="text-2xl font-bold mb-2">Premium Package</h3>
              <p className="text-xl font-bold mb-4">Rs 175,000</p>
              <ul className="text-left space-y-2 mb-6">
                <li>✔ Kafan - Rs. 4,000</li>
                <li>✔ Grave - Rs. 40,000</li>
                <li>✔ Flowers - Rs. 1,000</li>
                <li>✔ Catering - Rs. 120,000</li>
                <li>✔ Tombstone - Rs. 10,000</li>
              </ul>
            </div>
            <button 
              onClick={() => handleProceedToPayment(
                'Premium Package', 
                175000, 
                [{name: 'Kafan', price: 4000}, {name: 'Grave', price: 40000}, {name: 'Flowers', price: 1000}, {name: 'Catering', price: 120000}, {name: 'Tombstone', price: 10000}]
              )} 
              className="bg-black text-white px-6 py-2 rounded-md mt-auto">
              Buy Now
            </button>
          </div>
        </div>
      </section>

      <div className="text-center pb-10">
        <span className="text-lg font-semibold text-gray-500">OR</span>
      </div>

      <section className="px-6 md:px-24 pb-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-black">Make Your Own package</h2>
        <p className="text-[#6B4E2E] mb-10">
          Build a personalized package with the services that matter most to you.
        </p>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-black">Services</h3>
            <h3 className="text-2xl font-bold text-black">Prices</h3>
          </div>
          <div className="space-y-6">
            {servicesData.map((service) => (
              <div key={service.name} className="flex justify-between items-center">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={service.name}
                    name={service.name}
                    checked={!!selectedServices[service.name]}
                    onChange={handleServiceChange}
                    className="h-6 w-6 rounded-full border-gray-400 text-[#8A6A2F] focus:ring-[#8A6A2F] cursor-pointer"
                  />
                  <label htmlFor={service.name} className="ml-4 text-lg text-gray-700 cursor-pointer">{service.name}</label>
                </div>
                <span className="text-lg font-medium text-gray-900">
                  Rs {service.price.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
          <hr className="my-8 border-gray-200" />
          <div className="flex justify-between items-center mb-10">
            <span className="text-xl font-bold text-black">Total Amount:</span>
            <span className="text-xl font-bold text-black">
              Rs {totalAmount.toLocaleString()}
            </span>
          </div>
          <div className="text-center">
            {/* Confirm Package Button */}
            <button 
              onClick={() => {
                // First, we find out which items were selected
                const selectedItems = servicesData.filter(service => selectedServices[service.name]);
                // Then we pass them to our function
                handleProceedToPayment('Custom Package', totalAmount, selectedItems);
              }}
              className="bg-black text-white font-bold px-8 py-3 rounded-lg">
              Confirm package
            </button>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="bg-black text-white font-bold px-8 py-3 rounded-lg inline-block">
            Back
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PackagesPage;
