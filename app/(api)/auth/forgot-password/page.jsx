import Link from "next/link"

const ForgotPassword = () => {
    return (
        <div className="rounded-xl p-4 bg-[#F5F4F0] shadow-2xl min-h-3/5 flex mt-10">
            <div className="flex w-full flex-row-reverse">
                {/* Left side with image */}
                <div className="w-1/2 flex justify-center items-center p-8 bg-[#49350a] rounded-xl">                   
                 <img
                    src="/auth-icons/resetP.png"
                    alt="Forgot Password illustration"
                    className="max-w-full h-auto object-contain"
                />
                </div>

                <div className="w-1/2 flex items-center justify-center p-8">
    <div className="w-full max-w-md rounded-lg p-8">
        <h1 className="text-center text-4xl font-bold text-[#473203] mb-6">
            Forgot Password
        </h1>

        {/* Email */}
        <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-black mb-1">Email</label>
            <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white 
                focus:outline-none focus:ring-2 focus:ring-[#6E5011] focus:border-transparent"
            />
        </div>

        {/* Button */}
        <button className="w-full bg-[#281202] text-white py-2 rounded-md hover:bg-[#372111] transition-colors">
            Check Your Email
        </button>
    </div>
</div>


            </div>
        </div>
    )
}

export default ForgotPassword
