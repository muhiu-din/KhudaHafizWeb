import Link from "next/link"

const DeleteAccount = () => {
    return (
        <div className="ml-40 mt-20 mb-20 text-[#281202]">
            <div>
                <div className="mb-10 text-2xl font-semibold">
                    <h1>
                        Delete Account
                    </h1>
                </div>

                <div>
                    <p className="mb-16">
                        We are really sorry to see you go.
                        Are you sure you want to delete your account? <br />
                        Once you confirm, your data will be gone.</p>

                    <ul className="flex flex-col font-semibold gap-y-7">
                        <li>
                            <input type="radio" className="mr-3 cursor-pointer" name="reason" />
                            I am no longer using my account
                        </li>

                        <li>
                            <input type="radio" className="mr-3 cursor-pointer" name="reason" />
                            The Service is too expensive
                        </li>

                        <li>
                            <input type="radio" className="mr-3 cursor-pointer" name="reason" />
                            I want to change my phone number
                        </li>
                        <li>
                            <input type="radio" className="mr-3 cursor-pointer" name="reason" />
                            I don't understand how to use
                        </li>
                        <li>
                            <input type="radio" className="mr-3" name="reason" />
                            Khuda Hafiz is not available in my city
                        </li>
                        <li>
                            <input type="radio" className="mr-3 cursor-pointer" name="reason" />
                            Other
                        </li>
                    </ul>
                </div>
            </div>

            <div className="grid grid-cols-2 mt-20">
                <div className="">
                    <Link href="/settings">
                        <button 
                            className="pt-2 pb-2 pl-3 pr-3 ml-5 font-semibold text-white bg-black rounded-md w-30"
                        >
                            Back
                        </button>
                    </Link>

                    
                </div>

                <div className="flex justify-end mr-20">

                    <Link href="/settings/deleteAccount/confirm">
                        <button 
                            className="bg-[#F3073A] text-white pl-5 pr-5 pt-2 pb-2 rounded-md ml-5 font-semibold cursor-pointer"
                            >
                            Delete Account
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DeleteAccount
