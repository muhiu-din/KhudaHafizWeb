export default function Home() {
  return (
    <div>
      <img src="/landing-page/assets/background-cover.png" className="absolute w-full -z-10 top-0 left-0" alt="" />
      <section className="relative px-6 py-20 overflow-hidden">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between relative z-10">
          {/* Hero Text Section */}
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
    </div>
  );
}
