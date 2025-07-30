import Link from "next/link"


const Phone = () => {
  return (
    <div className="flex justify-center items-center mt-20 pb-26 relative">
      <div className="bg-[#F5F4F0] w-2/3 p-4 rounded-lg shadow-xl pb-16 mb-10">

        <form>
          <div className="flex justify-center items-center font-semibold text-2xl mb-8 pt-10">
            <h1>Enter current Phone Number</h1>
          </div>

          <div className="flex flex-col items-center gap-y-10">
            <div>
              <p className="mb-2">Enter new Phone Number:</p>
              <input type="email" className="bg-white p-2 rounded-lg w-96 outline-none" />
            </div>

            <div>
              <p className="mb-2">Enter new password:</p>
              <input type="email" className="bg-white p-2 rounded-lg w-96 outline-none" />
            </div>

            <div>
              <p className="mb-2">Confirm new password:</p>
              <input type="email" className="bg-white p-2 rounded-lg w-96 outline-none" />
            </div>

            <div className="mt-6">
              <button type="submit" 
                className="bg-black text-white pl-8 pr-8 pt-2 pb-2 rounded-lg cursor-pointer">
                Change
              </button>
            </div>

          </div>
        </form>
      </div>

      <div className="absolute right-20 bottom-10">
        <Link href="/settings">
          <button className="bg-black text-white pl-8 pr-8 pt-2 pb-2 rounded-lg cursor-pointer">Back</button>
        </Link>
      </div>
    </div >
  )
}

export default Phone
