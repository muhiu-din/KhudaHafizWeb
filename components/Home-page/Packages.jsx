
import { MoveRight } from "lucide-react"
import { Check } from "lucide-react"

export default function Packages() {
  return (
    <section className="py-16 px-6 mx-10 md:px-20 bg-white font-inter relative overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-16 text-[#3F2204]">Packages Offered</h2>

      <div className="flex flex-col lg:flex-row justify-between items-start ">
        {/* Left Side: Paragraph + Button */}
        <div className="flex flex-col max-w-xl">
          <p className="text-justify text-[#190A02] text-[18px] leading-[1.54] font-light mb-6">
            We offer thoughtfully designed packages to suit different needs and budgets. Whether it's a basic service or a complete funeral arrangement, each package includes respectful care, cultural sensitivity, and dedicated support.
          </p>
          <button className="bg-black text-white px-5 py-2 font-semibold rounded-md hover:bg-gray-800 transition flex items-center w-fit">
            Explore <MoveRight className="ml-2 w-4" />
          </button>
        </div>

        {/* Right Side: Packages */}
        <div className="relative w-full  lg:w-[600px] h-[320px] mt-10 lg:mt-0">
          {/* Basic Package */}
          <div className="absolute top-0 left-0 bg-[#7D6229] text-white p-5 rounded-xl w-72 shadow-lg ">
            <h3 className="text-xl font-bold mb-1 text-center">Basic Package</h3>
            <p className="text-lg font-bold mb-2 text-center">Rs 125,000</p>
            <div className="text-sm mb-1 flex items-center">
              <Check className="w-4 h-4 mr-1" /> Includes
            </div>
            <ul className="text-sm list-disc ml-5 space-y-1">
              <li>Kafan - Rs. 4,000</li>
              <li>Flowers - Rs. 1,000</li>
              <li>Catering - Rs. 120,000</li>
            </ul>
          </div>

          {/* Standard Package */}
          <div className="absolute pl-16 top-10 right-0 bg-[#7D6229] text-white p-5 rounded-xl w-[300px] shadow-lg">
            <h3 className="text-xl font-bold mb-1 text-center">Standard Package</h3>
            <p className="text-lg font-bold mb-2 text-center">Rs 165,000</p>
            <div className="text-sm mb-1 flex items-center">
              <Check className="w-4 h-4 mr-1" /> Includes
            </div>
            <ul className="text-sm list-disc ml-5 space-y-1">
              <li>Kafan - Rs. 4,000</li>
              <li>Grave - Rs. 40,000</li>
              <li>Flowers - Rs. 1,000</li>
              <li>Catering - Rs. 120,000</li>
            </ul>
          </div>

          {/* Premium Package (center, overlaps others) */}
          <div className="absolute top-30 left-1/2 -translate-x-1/2 bg-[#7D6229] text-white p-5 rounded-xl w-72 shadow-2xl z-10">
            <h3 className="text-xl font-bold mb-1 text-center">Premium Package</h3>
            <p className="text-lg font-bold mb-2 text-center">Rs 175,000</p>
            <div className="text-sm mb-1 flex items-center">
              <Check className="w-4 h-4 mr-1" /> Includes
            </div>
            <ul className="text-sm list-disc ml-5 space-y-1">
              <li>Kafan - Rs. 4,000</li>
              <li>Grave - Rs. 40,000</li>
              <li>Flowers - Rs. 1,000</li>
              <li>Catering - Rs. 120,000</li>
              <li>Tombstone - Rs. 10,000</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
