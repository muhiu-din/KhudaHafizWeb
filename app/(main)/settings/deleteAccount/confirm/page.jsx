import Link from "next/link"

const ConfirmDelete = () => {
    return (
        <div className="flex justify-center items-center mt-20 pb-26 relative text-[#281202]">
            <div className="bg-[#F5F4F0] w-2/3 p-4 rounded-lg shadow-xl pb-16 mb-10">

                <form>
                    <div className="flex flex-col items-center justify-center  mb-8 pt-10">
                        <h1 className="font-semibold text-2xl mb-5">Delete Profile</h1>
                        <p>Deleting your profile will remove all data</p>
                    </div>

                    <div className="flex flex-col items-center gap-y-10">
                        <div>
                            <p className="mb-2">Enter Current Password</p>
                            <input type="email" className="bg-white p-2 rounded-lg w-96 outline-none" />
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
                                        className="text-black border-2  pl-13 pr-13 pt-1 pb-1 rounded-md cursor-pointer"
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
                <button className="bg-black text-white pl-8 pr-8 pt-2 pb-2 rounded-lg cursor-pointer">Back</button>

            </div>
        </div >
    )
}

export default ConfirmDelete
