import Accordion from "@/components/landing-page/Accordian";
import TestimonialCarousel from "@/components/landing-page/TestimonialsCarousel";
import OurServices from "@/components/landing-page/OurServices"
import Notify from "@/components/landing-page/Notify"
import Works from "@/components/landing-page/Works";
import { faqs } from "@/components/landing-page/contants";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <img src="/landing-page/assets/background-cover.png" className="absolute w-full h-full object-cover -z-10 top-0 left-0" alt="" />
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between relative z-10 px-6 py-20 min-h-[60vh]">
          <div className="max-w-2xl text-left">
            <h1 className="text-3xl text-white md:text-5xl font-bold leading-tight">
              In Your Time of Loss, We help <br />
              you say <span className="text-[#F5F5F5]">“Khuda Hafiz”</span>
            </h1>
            <button className="mt-8 bg-[#7B5A13] text-white font-bold px-10 py-2 rounded-md hover:bg-[#6a4d11] transition">
              Join Now!
            </button>
          </div>
        </div>
      </section>

      {/* Other Components - now they will control their own background and width */}
      <Notify/>
      <OurServices/>
      <Works/>
      <TestimonialCarousel/>
      <Accordion data={faqs} />
    </div>
  );
}
