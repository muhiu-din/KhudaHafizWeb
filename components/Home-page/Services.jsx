
import { MoveRight } from "lucide-react"

const Services = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-white font-inter mx-20">
      {/* Top Section: Heading + Button */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 gap-10">
        <div className="md:max-w-3xl">
          <h2 className="text-4xl font-bold text-[#3F2204] mb-4">Services Offered</h2>
          <p className="text-[#190A02] text-[17px] leading-relaxed">
            Compassionate, customizable funeral services designed to meet your cultural, religious, and personal needs.
          </p>
        </div>
        <button className="mt-4 md:mt-0 bg-black text-white px-6 py-3 font-medium rounded-md hover:bg-gray-800 transition flex items-center text-[15px]">
          Explore <MoveRight className="ml-2 w-4" />
        </button>
      </div>

      {/* Service Items */}
      <div className="space-y-16">
        {/* Item 1 */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="md:w-1/2 px-2">
            <h3 className="text-2xl font-semibold text-[#3F2204] mb-3">Shroud (Kaffan)</h3>
            <p className="text-[#190A02] text-[16px] leading-[1.7]">
              We provide high-quality Islamic burial shrouds for men, women and children. Choose from standard, customized, or donation-based kaffans.
            </p>
          </div>
          <div className="w-80 h-80 bg-[#F5F4F0] rounded-full flex items-center justify-center">
            <img src="/home-page/assets/shroud.png" className="w-64 h-64 object-contain" alt="Shroud" />
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-12">
          <div className="md:w-1/2 px-2">
            <h3 className="text-2xl font-semibold text-[#3F2204] mb-3">Grave Arrangements</h3>
            <p className="text-[#190A02] text-[16px] leading-[1.7]">
              We assist in grave selection, purchasing, and digging to ensure a smooth burial process. Our service includes reserved plots, immediate arrangements, and coordination with cemeteries, providing peace of mind in difficult times.
            </p>
          </div>
          <div className="w-80 h-80 bg-[#F5F4F0] rounded-full flex items-center justify-center">
            <img src="/home-page/assets/grave.png" className="w-64 h-64 object-contain" alt="Grave" />
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 px-2">
            <h3 className="text-2xl font-semibold text-[#3F2204] mb-3">Emotional Support</h3>
            <p className="text-[#190A02] text-[16px] leading-[1.7]">
              We connect grieving families with professional therapists for counseling and emotional support, helping them navigate loss with care and compassion.
            </p>
          </div>
          <div className="w-80 h-80 bg-[#F5F5F5] rounded-full flex items-center justify-center">
            <img src="/home-page/assets/enjoy.png" className="w-64 h-64 object-contain" alt="Emotional Support" />
          </div>
        </div>

        {/* Item 4 */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <div className="md:w-1/2 px-2">
            <h3 className="text-2xl font-semibold text-[#3F2204] mb-3">Catering Arrangements</h3>
            <p className="text-[#190A02] text-[16px] leading-[1.7]">
              We provide meal arrangements for condolence gatherings, offering hassle-free catering with respectful service to support grieving families.
            </p>
          </div>
          <div className="w-80 h-80 bg-[#F5F5F5] rounded-full flex items-center justify-center">
            <img src="/home-page/assets/chef.png" className="w-64 h-64 object-contain" alt="Catering" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
