import Link from "next/link"


const Phone = () => {
  return (
    <div className="flex justify-center items-center mt-20 pb-26 relative text-[#281202]">
      <div className="bg-[#F5F4F0] w-2/3 p-4 rounded-lg shadow-xl pb-16 mb-10">

        <form>
          <div className="flex items-center justify-center pt-10 mb-8 text-2xl font-semibold">
            <h1>Enter current Phone Number</h1>
          </div>

          <div className="flex flex-col items-center gap-y-10">
            <div>
              <p className="mb-2">Enter new Phone Number:</p>
              <input type="email" className="p-2 bg-white rounded-lg outline-none w-96" />
            </div>

            <div>
              <p className="mb-2">Enter new password:</p>
              <input type="email" className="p-2 bg-white rounded-lg outline-none w-96" />
            </div>

            <div>
              <p className="mb-2">Confirm new password:</p>
              <input type="email" className="p-2 bg-white rounded-lg outline-none w-96" />
            </div>

            <div className="mt-6">
              <button type="submit" 
                className="pt-2 pb-2 pl-8 pr-8 text-white bg-black rounded-lg cursor-pointer">
                Change
              </button>
            </div>

          </div>
        </form>
      </div>

      <div className="absolute right-20 bottom-10">
        <Link href="/settings">
          <button className="pt-2 pb-2 pl-8 pr-8 text-white bg-black rounded-lg cursor-pointer">Back</button>
        </Link>
      </div>
    </div >
  )
}

export default Phone
