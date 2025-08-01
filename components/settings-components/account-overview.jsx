import Link from 'next/link'

const AccountOverview = () => {
  return (
    <>
      <div className="font-bold text-xl text-[#281202] mt-10 mb-10">
        <h1>Account Overview</h1>
      </div>

      <div className='grid grid-cols-2 gap-x-12 gap-y-5'>
        <div className='flex justify-end'>
          <div>
            <div className='ml-1'>
              Email
            </div>
            <input type="email" value={"randomperson@email.com"}
              className=" bg-white text-black p-2 text-center rounded-lg outline-none
            border-2 border-slate-300 w-64"/>

            <Link href='/settings/email'>
              <button 
                className='bg-black text-white pl-3 pr-3 pt-2 pb-2 rounded-md ml-5 w-30 cursor-pointer'
                >Change</button>
            </Link>
          </div>
        </div>

        <div className='flex justify-end'>
          <div>
            <div className='ml-1'>
              Phone Number
            </div>
            <input type="text" value={"+92 3213123"}
              className=" bg-white text-black p-2 text-center rounded-lg outline-none
              border-2 border-slate-300 w-64"/>

            <Link href="/settings/phone">
              <button className='bg-black text-white pl-3 pr-3 pt-2 pb-2 rounded-md ml-5 w-30 cursor-pointer'>Change</button>
            </Link>
          </div>
        </div>

        <div className='flex justify-end items-center'>
          <div className='ml-1'>
            Password
          </div>

          <Link href="/settings/password">
            <button className='bg-black text-white pl-3 pr-3 pt-2 pb-2 rounded-md ml-5 w-30 cursor-pointer'>Change</button>
          </Link>
        </div>

        <div className='flex justify-end items-center'>
          <div className='ml-1'>
            Delete Account
          </div>

            <Link href="/settings/deleteAccount">
              <button className='bg-[#F3073A] text-white pl-3 pr-3 pt-2 pb-2 rounded-md ml-5 w-30 cursor-pointer'>Delete</button>
            </Link>
        </div>
      </div>
    </>

  )
}

export default AccountOverview
