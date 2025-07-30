"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-dotted border-gray-400 pb-2 mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-4 px-2 font-medium flex justify-between items-center"
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>

      <div
        className={`px-4 text-gray-700 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <p className="pb-2">{answer}</p>
      </div>
    </div>
  );
};

const Accordion = ({ data }) => {
  return (
    <>
      <div className="text-4xl text-center font-bold my-6">
        Khuda Hafiz FAQs
      </div>
      <div className="text-center text-2xl text-[#190A02] font-bold mt-20 mb-10">
        Do yo any questions? Your Answer might be below!
      </div>
      <div className="max-w-6xl mx-auto bg-[#F2F2F2] shadow-bg-gray-400 rounded-xl mt-10 p-4">
        {data.map((item, index) => (
          <AccordionItem key={index} {...item} />
        ))}
      </div>
      <div className="items-center justify-center my-6 flex gap-2"><span>NEED TO GET IN TOUCH ?</span>
        <Link href={"/redirect"} className="uppercase px-4 py-2 border rounded-md">Contact us Now</Link>
      </div>
    </>
  );
};

export default Accordion;
 