const Works = () => {
  return (
    <section className="relative w-full max-w-6xl mx-auto my-24 px-5 py-20">
      <div className="text-center mb-20 px-5">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-[#281202] mb-4">How it works</h2>
        <p className="text-lg font-normal text-[#281202] max-w-2xl mx-auto">
          From compassionate funeral services to empowering social organizations with technology, we're building a comprehensive platform for positive impact.
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-20">
        {/* Step 1 */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 mb-4 bg-[#f4f4f4] rounded-full flex items-center justify-center shadow-md">
            <img src="/auth-icons/acc.png" alt="Sign Up Icon" className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-bold text-[#281202] my-4">Sign Up</h3>
          <p className="text-sm font-medium text-[#281202] mt-1">Create Your Account</p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 mb-4 bg-[#f4f4f4] rounded-full flex items-center justify-center shadow-md">
            <img src="/auth-icons/tick.png" alt="Package Icon" className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-bold text-[#281202] my-4">Select a Package</h3>
          <p className="text-sm font-medium text-[#281202] mt-1">Choose flexible service options</p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 mb-4 bg-[#f4f4f4] rounded-full flex items-center justify-center shadow-md">
            <img src="/auth-icons/i3.png" alt="Wallet Icon" className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-bold text-[#281202] my-4">Create Wallet & Pay</h3>
          <p className="text-sm font-medium text-[#281202] mt-1">Create your account</p>
        </div>
      </div>

      {/* Quote */}
      <div className="text-center px-6">
        <p className="text-3xl font-bold text-[#281202] leading-relaxed">
          "Khuda Hafiz is where compassion meets innovation honoring every farewell with grace, dignity, and cultural care."
        </p>
      </div>
    </section>
  );
};

export default Works;
