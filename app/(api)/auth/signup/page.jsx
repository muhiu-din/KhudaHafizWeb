import Link from "next/link"

const Signup = () => {
    return (
        <div className="rounded-xl p-4 bg-[#F5F4F0] shadow-2xl min-h-3/5 flex mt-10">
            <div className="flex w-full flex-row-reverse">
                {/* Left side with image */}
                <div className="w-1/2 flex justify-center items-center p-8">
                    <img
                        src="/auth-icons/image 28.png"
                        alt="Signup illustration"
                        className="max-w-full h-auto object-contain"
                    />
                </div>

                <div className="w-1/2 flex flex-col p-8">
                    <div className="w-full rounded-lg p-8">
                        <h1 className="text-center text-4xl font-bold text-[#473203] mb-6">Get early Access</h1>

                        {/* First & Last Name */}
                        <div className="flex gap-4 mb-4">
                            <div className="flex flex-col w-1/2">
                                <label htmlFor="firstName" className="text-black mb-1">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="John"
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white 
                    focus:outline-none focus:ring-2 focus:ring-[#6E5011] focus:border-transparent"
                                />
                            </div>
                            <div className="flex flex-col w-1/2">
                                <label htmlFor="lastName" className="text-black mb-1">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Doe"
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white 
                    focus:outline-none focus:ring-2 focus:ring-[#6E5011] focus:border-transparent"
                                />
                            </div>
                        </div>

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

                        {/* Password */}
                        <div className="flex flex-col mb-4">
                            <label htmlFor="password" className="text-black mb-1">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white 
                focus:outline-none focus:ring-2 focus:ring-[#6E5011] focus:border-transparent"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div className="flex flex-col mb-4">
                            <label htmlFor="confirmPassword" className="text-black mb-1">Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white 
                focus:outline-none focus:ring-2 focus:ring-[#6E5011] focus:border-transparent"
                            />

                        </div>

                        {/* Signup Button */}
                        <button className="w-full bg-[#281202] text-white py-2 rounded-md hover:bg-[#372111] transition-colors">
                            Signup
                        </button>

                        {/* OR Divider */}
                        <div className="flex items-center my-4">
                            <hr className="flex-grow border-t border-gray-300" />
                            <span className="mx-4 text-gray-500 text-sm">OR</span>
                            <hr className="flex-grow border-t border-gray-300" />
                        </div>

                        {/* Google Auth + Redirect */}
                        <div className="flex flex-col gap-4 mt-6">
                            <button className="flex items-center justify-center gap-3 w-full py-3 border border-gray-300 bg-white rounded-md shadow-sm hover:bg-gray-100 transition cursor-pointer">
                                <img src="https://img.icons8.com/?size=25&id=17949&format=png&color=000000" alt="" />
                                <span className="text-gray-950 font-medium">Continue with Google</span>
                            </button>

                            <p className="text-center text-gray-600">
                                Already have an account?{" "}
                                <Link href="/auth/login" className="font-semibold text-[#6d4f29] hover:underline">
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signup
