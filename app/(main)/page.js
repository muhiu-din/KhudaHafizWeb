export default function Home() {
  return (
    <section className="relative bg-black text-white px-6 py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between relative z-10">
        
        {/* Hero Text Section */}
        <div className="max-w-2xl text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            In Your Time of Loss, We help <br />
            you say <span className="text-[#F5F5F5]">“Khuda Hafiz”</span>
          </h1>
          <button className="mt-8 bg-[#7B5A13] text-white font-bold px-10 py-4 rounded-md hover:bg-[#6a4d11] transition">
            Join Now!
          </button>
        </div>

        {/* Hero Image Section */}
        <div className="mt-10 md:mt-0 relative">
          <img
            src="https://i.imgur.com/7YJ3HVP.png"
            alt="Hero Logo"
            className="w-36 md:w-64 opacity-90"
          />
        </div>
      </div>
    </section>
  );
}
