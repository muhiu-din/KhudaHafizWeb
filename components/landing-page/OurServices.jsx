import { services } from './services';
// Section styles should not be touched, it just works. 
const OurServices = () => {
  return (
    <section className="relative w-screen left-1/2 -translate-x-1/2 bg-[#f5f4f0] mx-auto mt-10 px-5 py-30 overflow-hidden">
    
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        {/* Squiggle Squiggle wali line */}
        <svg
          className="relative block w-full h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="
      M0,0 
      V10 
      Q300,130 600,40 
      T1200,40 
      V0 
      Z"
            fill="white"
          />
        </svg>


      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl h-10 font-bold text-[#281202]">Our Services</h2>
          <p className="text-lg font-normal text-[#281202] max-w-2xl mx-auto mt-2">
            From compassionate funeral services to empowering social organizations with technology, we're building a comprehensive platform for positive impact.
          </p>
          <div className="w-16 h-1 mx-auto mt-4"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map(service => (
            <div
              key={service.id}
              className="relative rounded-lg overflow-hidden shadow-md group hover:shadow-xl transition-all duration-300"
            >
              {/* Background Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-52 object-cover"
              />

              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

              {/* Top Icons and Tag */}
              <div className="absolute top-3 left-3 flex items-center gap-2">
                {/* Service Icon */}
                <div className="w-10 h-10   rounded-full flex items-center justify-center">
                  <img src={service.icon} alt="icon" className="w-10 h-10" />
                </div>
              </div>

              <div className="absolute top-3 right-3">
                {service.tag && (
                  <span className="bg-white/90 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {service.tag}
                  </span>
                )}
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-lg font-semibold leading-tight">{service.title}</h3>
                <p className="text-sm mt-1 opacity-90">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="
            M0,0 
            V10 
            Q300,130 600,40 
            T1200,40 
            V0 
            Z"
            fill="white"
          />
        </svg>

      </div>
    </section>
  );
};

export default OurServices;
