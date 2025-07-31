// app/transactions/page.js
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// --- MOCK DATA ---
// Instead of Firebase, we'll use this static array of transactions for now.
// When you're ready for a database, you can replace this with a fetch call.
const mockTransactions = [
  {
    id: 'tx1',
    number: 1,
    date: '27-06-2025',
    time: '10:30 AM',
    customerName: 'Mr. Ali',
    packageName: 'Basic Package',
    amount: 125000,
    paymentMethod: 'Easypaisa',
    location: 'Rawalpindi',
    status: 'Paid',
  },
  {
    id: 'tx2',
    number: 2,
    date: '28-06-2025',
    time: '01:30 PM',
    customerName: 'Muhammad Zunair',
    packageName: 'Basic Package',
    amount: 125000,
    paymentMethod: 'Sadapay',
    location: 'Rawalpindi',
    status: 'Paid',
  },
  {
    id: 'tx3',
    number: 3,
    date: '30-06-2025',
    time: '02:00 PM',
    customerName: 'Muhammad Kashif',
    packageName: 'Premium Package',
    amount: 175000,
    paymentMethod: 'Easypaisa',
    location: 'Rawalpindi',
    status: 'Paid',
  },
  {
    id: 'tx4',
    number: 4,
    date: '07-07-2025',
    time: '08:15 AM',
    customerName: 'Ms. Namra',
    packageName: 'Standard Package',
    amount: 165000,
    paymentMethod: 'Jazzcash',
    location: 'Rawalpindi',
    status: 'Paid',
  },
  {
    id: 'tx5',
    number: 5,
    date: '24-07-2025',
    time: '09:50 AM',
    customerName: 'Mr. Naveed Iqbal',
    packageName: 'Basic Package',
    amount: 125000,
    paymentMethod: 'Cash',
    location: 'Rawalpindi',
    status: 'Pending',
  },
];
// --- END OF MOCK DATA ---


const TransactionHistoryPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Simulate fetching data by setting it from our mock array
    setTransactions(mockTransactions);
    setLoading(false);
  }, []); // The empty array means this effect runs only once

  return (
    <div className="bg-[#f0f0f0] min-h-screen font-geist p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-black">Transaction History</h1>
        
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-gray-200 text-sm text-gray-600">
                  <th className="p-4 font-semibold">#</th>
                  <th className="p-4 font-semibold">Date & Time</th>
                  <th className="p-4 font-semibold">Customer Name</th>
                  <th className="p-4 font-semibold">Package Type</th>
                  <th className="p-4 font-semibold">Amount (Rs)</th>
                  <th className="p-4 font-semibold">Payment Method</th>
                  <th className="p-4 font-semibold">Location</th>
                  <th className="p-4 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="8" className="text-center p-8">Loading History...</td>
                  </tr>
                ) : transactions.length > 0 ? (
                  transactions.map((tx) => (
                    <tr key={tx.id} className="border-b border-gray-100 text-sm">
                      <td className="p-4 font-semibold text-gray-800">{tx.number}</td>
                      <td className="p-4 text-gray-700">
                        <div>{tx.date}</div>
                        <div className="text-xs text-gray-500">{tx.time}</div>
                      </td>
                      <td className="p-4 text-gray-700">{tx.customerName}</td>
                      <td className="p-4 text-gray-700">{tx.packageName}</td>
                      <td className="p-4 text-gray-700">{tx.amount.toLocaleString()}</td>
                      <td className="p-4 text-gray-700">{tx.paymentMethod}</td>
                      <td className="p-4 text-gray-700">{tx.location}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${tx.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                          {tx.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center p-8">No transactions found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center mt-8">
            <button
        onClick={() => router.back()}
        className="px-12 py-3 rounded-lg bg-black text-white font-bold hover:bg-gray-800"
      >
        Back
      </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistoryPage;
