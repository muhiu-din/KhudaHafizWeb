import Link from "next/link"
import { CgProfile } from "react-icons/cg";
import { RiDeleteBin5Fill } from "react-icons/ri";



const ConfirmDelete = () => {
    return (
        <div className="flex  items-center justify-center mt-20 pb-26 relative text-[#281202]">
            <div className="bg-[#F5F4F0] w-2/3 p-4 rounded-lg shadow-xl pb-16 mb-10">

                <form>
                    <div className="flex justify-around">
                        <div className="flex items-center justify-center w-20 h-20 mt-5 border-4 rounded-full">
                            <RiDeleteBin5Fill className="w-12 h-12" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center pt-10 mb-8">
                        <h1 className="mb-5 text-2xl font-semibold">Delete Profile?</h1>
                        <p>Deleting your profile will remove all data</p>
                    </div>
                    
                    <div className="flex justify-center mb-10">
                        <CgProfile className="w-30 h-30"/>
                    </div>

                    <div className="flex flex-col items-center gap-y-10">
                        <div>
                            <p className="mb-2">Enter Current Password</p>
                            <input type="email" className="p-2 bg-white rounded-lg outline-none w-96" />
                        </div>

                        <div className="font-semibold ">
                            You can stop the deletion process by returning
                            <div className="flex justify-center">
                                to Home page
                            </div>

                        </div>



                        <div className="mt-6">
                            <button type="submit"
                                className="bg-[#F3073A] text-white pl-5 pr-5 pt-2 pb-2
                font-semibold rounded-lg cursor-pointer mb-3">
                                Delete Account
                            </button>

                            <div>
                                <Link href="/settings" >

                                    <button
                                        className="pt-1 pb-1 text-black border-2 rounded-md cursor-pointer pl-13 pr-13"
                                    >Cancel
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div>

                        </div>

                    </div>
                </form>
            </div>

            <div className="absolute right-20 bottom-10">
                <button className="pt-2 pb-2 pl-8 pr-8 text-white bg-black rounded-lg cursor-pointer">Back</button>

            </div>
        </div >
    )
}

export default ConfirmDelete
