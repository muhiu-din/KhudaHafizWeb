"use client";
import { useState } from "react";
import { Eye, EyeOff, KeyRound } from "lucide-react";

const ChangePassword = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="w-full max-w-xl p-10 rounded-2xl bg-[#f9f7f3] shadow-lg">
                <h1 className="text-center text-3xl font-bold text-black mb-8 flex items-center justify-center gap-3">
                    <KeyRound size={30} className="text-black scale-x-[-1] rotate-316 "  />
                    <span>Change Password</span>
                </h1>

                {/* Password 1 */}
                <div className="flex flex-col mb-6 relative">
                    <label htmlFor="password" className="text-black mb-2 font-medium">Enter new password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="********"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white 
                        focus:outline-none focus:ring-2 focus:ring-[#6E5011] focus:border-transparent pr-12"
                    />
                    <div
                        className="absolute right-4 top-14 transform -translate-y-1/2 cursor-pointer text-gray-500"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </div>
                </div>

                {/* Password 2 */}
                <div className="flex flex-col mb-8 relative">
                    <label htmlFor="confirmPassword" className="text-black mb-2 font-medium">Confirm new password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="********"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white 
                        focus:outline-none focus:ring-2 focus:ring-[#6E5011] focus:border-transparent pr-12"
                    />
                    <div
                        className="absolute right-4 top-14 transform -translate-y-1/2 cursor-pointer text-gray-500"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </div>
                </div>
                {/* Button */}
                <button className="w-50 bg-black text-white py-3 rounded-xl font-semibold text-lg hover:bg-[#1a1a1a] transition-colors block mx-auto">
                    Change
                </button>

            </div>
        </div>
    );
};

export default ChangePassword;
