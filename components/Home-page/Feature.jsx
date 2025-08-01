const features = [
  {
    title: "Easy to use",
    desc: "A simple, intuitive platform designed for everyone, no tech skills needed.",
    img:"/home-page/assets/Easy.png",
  },
  {
    title: "Culturally Aware",
    desc: "Respectful of all faiths and traditions, ensuring every farewell is meaningful and personal.",
    img:"/home-page/assets/eid.png",
  },
  {
    title: "Community-Centric",
    desc: "Built to support not just individuals, but also NGOs and communities working for the greater good.",
    img:"/home-page/assets/People.png",
  },
  {
    title: "Secure Digital Payments",
    desc: "Seamless and encrypted online wallet system for safe, hassle-free transactions.",
    img:"/home-page/assets/Card.png",
  },
]

const Feature = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50 mx-20">
      <h2 className="text-3xl font-bold text-center mb-20">Why Khuda Hafiz?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        {features.map((item, idx) => (
          <div key={idx} className="hover:scale-105 transition-transform duration-300 ease-in-out">
            <div  className="bg-[#F5F4F0] p-6 rounded-lg shadow-xl shadow-gray-400 relative">
            <div className="w-20 h-20  bg-[#F5F4F0] rounded-full absolute top-[-30px] left-10  ">
              <img src={item.img} alt={item.title} className="w-18 h-18 mx-auto items-center" />
            </div>
            <h3 className="text-xl font-semibold text-[#281202] mb-2 mt-8">{item.title}</h3>
            <p className="text-[#190A02] w-10/12">{item.desc}</p>
          </div>
          </div>
          
        ))}
      </div>
    </section>
  )
}

export default Feature
