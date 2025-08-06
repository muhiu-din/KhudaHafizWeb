import React from 'react';
import { MessageCircleWarning } from 'lucide-react';

const data = [
  {
    title: "FAQs",
    desc: "Need clarity? We’re here to help.",
    icon: ""
  },
  {
    title: "Contact Us",
    desc: "We're here to support you in every step.",
    icon: "/help-page/mdi_phone.png",
  },
  {
    title: "Technical Support",
    desc: "Need help with technical problems?",
    icon: "/help-page/Group.png",
  },
  {
    title: "Account Issues",
    desc: "Trouble logging in or accessing your account?",
    icon: "/help-page/Vector.png",
  },
  {
    title: "Payment Help",
    desc: "Questions about billing and payments?",
    icon: "/help-page/cardPay.png",
  },
];

const HelpPage = () => {
  return (
    <section className="w-full px-4 md:px-20 py-12 flex flex-col items-center font-sans">
      {/* Top Illustration */}
      <div className="w-[512px] h-[auto] flex justify-center">
        <img
          src="/help-page/illustration.png"
          alt="Support illustration"
          className="w-full object-contain"
        />
      </div>

      {/* Heading */}
      <h2 className="text-[32px] md:text-[36px] font-bold text-[#281202] mt-10 text-center">
        How can we help you?
      </h2>

      {/* Paragraph */}
      <p className="text-[#190A02] text-center mt-4  leading-relaxed">
        We've provided a comprehensive FAQ section to address the most common questions and concerns. From account <br /> setup  to troubleshooting, you'll find detailed answers to help you navigate our platform with ease.
      </p>

      {/* Grid Cards */}
      <div className="mt-12 flex flex-wrap justify-center gap-14 max-w-6xl">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-[335px] h-[220px] bg-[#F5F4F0] rounded-xl shadow-xl shadow-gray-400 flex flex-col items-center justify-center p-6 text-center transition-transform hover:scale-105 duration-300"
          >
            {item.icon && (
              <img src={item.icon} alt={item.title} className="w-8 h-8 mb-4" />
            )}
            <h3 className="text-[#190A02] font-semibold text-lg mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-[#190A02] w-[200px]">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-24 flex flex-col gap-10 items-center w-full mb-20">
        <button className="bg-black text-white px-8 py-3 rounded-md text-sm font-semibold hover:opacity-90 transition">
          Send us a Message
        </button>
        <button className="bg-black text-white px-8 py-3 rounded-md text-sm font-semibold hover:opacity-90 transition">
          Start Chat
        </button>
      </div>
    </section>
  );
};

export default HelpPage;
