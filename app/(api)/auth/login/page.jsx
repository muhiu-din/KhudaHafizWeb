import Link from "next/link"

const Login = () => {
    return (
        <div className="rounded-xl p-4 bg-[#F5F4F0] shadow-2xl min-h-3/5 flex mt-10">
            <div className="flex w-full">
                {/* Left side with image - 50% width */}
                <div className="w-1/2 flex justify-center items-center p-8">
                    <img
                        src="/auth-icons/image 28.png"
                        alt="Login illustration"
                        className="max-w-full h-auto object-contain"
                    />
                </div>

                {/* Right side with login form - 50% width */}
                <div className="w-1/2 flex flex-col p-8">
                    <div className="w-full rounded-lg p-8">
                        <h1 className="text-center text-4xl font-bold text-[#6E5011] mb-6">Login</h1>

                        <div className="flex flex-col mb-4">
                            <label htmlFor="email" className="text-black mb-1">Email</label>
                            <input
                                type="email"
                                className="px-4 py-2 rounded-md border border-gray-300 bg-white w-full 
                                focus:outline-none focus:ring-2 focus:ring-[#6E5011] focus:border-transparent"
                                name="email"
                                placeholder="example@gmail.com"
                            />
                        </div>

                        <div className="flex flex-col mb-4">
                            <label htmlFor="password" className="text-black mb-1">Password</label>
                            <input
                                type="password"
                                className="px-4 py-2 rounded-md border border-gray-300 bg-white w-full 
                                focus:outline-none focus:ring-2 focus:ring-[#6E5011] focus:border-transparent"
                                name="password"
                                placeholder="Enter your password"
                            />
                            <Link className="text-blue-700 my-2 font-semibold" href={"/auth/forgot-password"}>Forgot Password?</Link>
                        </div>

                        <button className="w-full bg-[#281202] text-white py-2 rounded-md hover:bg-[#372111] transition-colors">
                            Login
                        </button>
                        <div className="flex items-center my-2">
                            <hr className="flex-grow border-t border-gray-300" />
                            <span className="mx-4 text-gray-500 text-sm">OR</span>
                            <hr className="flex-grow border-t border-gray-300" />
                        </div>
                        <div className="flex flex-col gap-4 mt-6">
                            {/* Google Button */}
                            <button className="flex items-center justify-center gap-3 w-full py-3 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-100 transition cursor-pointer">
                                <img src="https://img.icons8.com/?size=25&id=17949&format=png&color=000000" alt="" />
                                <span className="text-gray-950 font-medium">Continue with Google</span>
                            </button>

                            <p className="text-center text-gray-600">
                                Don't have an account?{" "}
                                <a href="/auth/signup" className="font-semibold text-[#6d4f29] hover:underline">
                                    Sign up
                                </a>
                            </p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login