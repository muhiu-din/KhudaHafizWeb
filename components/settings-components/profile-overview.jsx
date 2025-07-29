const ProfileOverview = () => {
    return <>
        <div className="font-bold text-xl text-[#281202] mt-10 mb-10">
            <h1>Profile Overview</h1>
        </div>

        <div className="flex relative">
            <form>
                <div className="mb-10">
                    <div className="mb-3 ml-1 text-[#281202]">
                        <label htmlFor="name">Name</label>
                    </div>

                    <input type="text" placeholder="Name" id="name"
                        className="bg-white text-black p-2 rounded-lg w-64 outline-none" />

                    <button className="bg-black text-white ml-5 cursor-pointer
                            rounded-lg pl-5 pr-5 pt-1 pb-1 font-semibold text-sm">Edit</button>
                </div>

                <div className="mb-10 ">
                    <div className="mb-3 ml-1 text-[#281202]">
                        <label htmlFor="email">Email</label>
                    </div>

                    <input type="email" placeholder="Email" id="email"
                        className="bg-white text-black p-2 rounded-lg w-64 outline-none" />
                </div>

                <div className="mb-10">
                    <div className="mb-3 ml-1 text-[#281202]">
                        <label htmlFor="phone">Phone Number</label>
                    </div>

                    <input type="email" placeholder="Phone Number" id="phone"
                        className="bg-white text-black p-2 rounded-lg w-64 outline-none" />
                </div>

                <div>
                    <div className="mb-3 ml-1">
                        <label htmlFor="address">Address</label>
                    </div>

                    <textarea id="address" cols="30" rows="2"
                        className="bg-white text-black p-2 rounded-lg ">

                    </textarea>

                    <button className="bg-black text-white ml-5 cursor-pointer
                            rounded-lg pl-5 pr-5 pt-1 pb-1 font-semibold text-sm -translate-y-6">Edit</button>
                </div>



            </form>

            <div className="absolute right-10">
                <div className="font-bold text-xl text-[#281202] flex justify-center">
                    <h1>Profile Photo</h1>
                </div>
                <img src="default-profile-pic/default-profile-pic.jpg" alt=""
                    className="rounded-full w-40"
                />

                <div className="flex justify-center">
                    <button
                        className="bg-black text-white ml-5 mt-5 cursor-pointer
                                rounded-lg pl-5 pr-5 pt-1 pb-1 font-semibold text-sm">Edit</button>
                </div>

            </div>
        </div>

    </>
}

export default ProfileOverview;