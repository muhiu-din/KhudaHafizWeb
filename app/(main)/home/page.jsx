// 'use client'

// import React from 'react'
// import Packages from '@/components/Home-page/Packages'
// import Services from '@/components/home-page/Services'
// import Feature from '@/components/home-page/Feature'

// export default function HomePage() {
//   return (
//     <>
//       {/* Hero Section */}
//       <div className="relative w-full min-h-[516px] overflow-hidden">
//         {/* Background wrapper - behind navbar */}
//         <div className="absolute top-0 left-0 w-full h-[516px] flex z-[-10]">
//           {/* Left side - Text */}
//           <div className="w-1/2 bg-[#281202] text-white px-6 md:px-20 py-16 flex flex-col justify-center">
//             <h1 className="text-4xl font-bold leading-snug mb-4">
//               Graceful Goodbyes,<br />Simplified with Technology
//             </h1>
//             <p className="text-lg font-light">
//               Khuda Hafiz is Pakistan's first digital funeral platform,<br />
//               offering dignified and compassionate care.
//             </p>
//           </div>

//           {/* Right side - Cropped Image */}
//           <div className="w-1/2 overflow-hidden relative">
//             <img
//               src="/home-page/assets/home-hero.png"
//               alt="Khuda Hafiz"
//               className="absolute top-0 left-0 object-cover  w-[100%] "
//               style={{
//                 clipPath: 'inset(0px 200px 200px 0px)', // Top Right Bottom Left
//               }}
//             />
//           </div>
//         </div>

//         {/* Push content below hero */}
//         <div className="h-[516px]" />
//       </div>

//       {/* White section after Hero */}
//       <section className="bg-white text-black text-center py-12 px-6 md:px-20">
//         <h2 className="text-2xl font-bold mb-2">Welcome to Khuda Hafiz!</h2>
//         <p className="text-base">
//           We understand your fears, your hopes, and your prayers. <br />
//           Khuda Hafiz is built on compassion, for you, by those who care.
//         </p>
//       </section>

//       {/* Separator line */}
//       <div className='w-screen h-px bg-gray-300 relative left-1/2 -translate-x-1/2' />

//       {/* Other sections */}
//       <Packages />
//       <div className='w-screen h-px bg-gray-300 relative left-1/2 -translate-x-1/2' />
//       <Services />
//       <div className='w-screen h-px bg-gray-300 relative left-1/2 -translate-x-1/2' />
//       <Feature />
//       <div className='w-screen h-px bg-gray-300 relative left-1/2 -translate-x-1/2' />
//     </>
//   )
// }


'use client'

import React from 'react'
import Link from 'next/link' // 1. Imported the Link component
import Packages from '@/components/Home-page/Packages'
import Services from '@/components/home-page/Services'
import Feature from '@/components/home-page/Feature'
import { MessageCircle } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full -z-10 top-[-100px] flex">
        {/* Left side - Content */}
        <div className="w-1/2 bg-[#190B00] py-10 gap-20 text-white px-6 md:px-20 flex justify-center">
          <div className='flex flex-col justify-center gap-10 mt-24'>
            <h1 className="text-5xl font-bold leading-snug px-10">
              Graceful Goodbyes,<br />Simplified with Technology
            </h1>
            <p className="text-lg font-light absolute bottom-10 left-30">
              Khuda Hafiz is Pakistan's first digital funeral platform,offering <br />
              dignified and compassionate care.
            </p>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="w-1/2">
          <img
            src="/home-page/assets/home-hero1.png"
            alt="Khuda Hafiz"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* White section after Hero */}
      <section className="bg-white text-[#281202] text-center py-12 px-6 md:px-20">
        <h2 className="text-4xl font-bold mb-12">Welcome to Khuda Hafiz!</h2>
        <h3 className="text-3xl font-bold horizontal-line">
          We understand your fears, your hopes, and your prayers. <br />
          Khuda Hafiz is built on compassion, for you, by those who care.
        </h3>
        
        {/* 2. Wrapped the entire feedback div in a Link component */}
        <Link href="/feedback">
          <div className='flex justify-center fixed bottom-6 right-6 flex-col items-center gap-2 z-10 cursor-pointer group'>
            <div
              className="bg-white p-4 rounded-full shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
              title="Send Feedback"
            >
              <img
                src="/home-page/assets/Popular.png"
                alt="Feedback"
                className="w-8 h-8"
              />
            </div>
            <h3 className='text-[#704116] font-semibold transition-colors group-hover:text-[#281202]'>Feedback?</h3>
          </div>
        </Link>

      </section>


      {/* Other sections */}
      <Packages />
      <Services />
      <Feature />
    </>
  )
}
