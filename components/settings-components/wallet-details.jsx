

const WalletDetails = () => {
    return (

        <div className="grid grid-cols-3 gap-x-5 gap-y-5 text-[#281202]">
            <div className="flex justify-end items-center">
                Wallet Status:
                <input type="text" value={"Connected"} disabled
                    className="ml-5 bg-white text-black p-2 text-center rounded-lg w-34 outline-none
border-2 border-slate-300"/>
            </div>

            <div className="flex justify-end items-center">
                Wallet Name:
                <input type="text" value={"Easy Paisa"} disabled
                    className="ml-5 bg-white text-black p-2 text-center rounded-lg w-34 outline-none
border-2 border-slate-300"/>
            </div>

            <div className="flex justify-end items-center">
                Linked To:
                <input type="text" value={"Email/Number"} disabled
                    className="ml-5 bg-white text-black p-2 text-center rounded-lg w-34 outline-none
border-2 border-slate-300"/>
            </div>

            <div className="flex justify-end items-center">
                Wallet ID:
                <input type="text" value={"XXXXXXX"} disabled
                    className="ml-5 bg-white text-black p-2 text-center rounded-lg w-34 outline-none
border-2 border-slate-300"/>
            </div>

            <div className="flex justify-end items-center">
                Current Balance:
                <input type="text" value={"PKR: 0.00"} disabled
                    className="ml-5 bg-white text-black p-2 text-center rounded-lg w-34 outline-none
border-2 border-slate-300"/>
            </div>

            <div className="flex justify-end items-center">
                Transaction History:

                <button onClick={() => router.push('/transactions')} className="bg-black text-white pt-2 pb-2 pr-3 pl-3 w-30 rounded-md ml-5">View</button>
            </div>

            <div className="flex justify-center items-center mt-10">
                <button className="bg-black text-white pt-2 pb-2 pr-3 pl-3 w-30 rounded-md ml-5">Add Funds</button>
            </div>

            <div className="flex justify-center items-center mt-10">
                <button className="bg-black text-white pt-2 pb-2 pr-3 pl-3 w-30 rounded-md ml-5">Withdraw</button>
            </div>

            <div className="flex justify-center items-center mt-10">
                <button className="bg-black text-white pt-2 pb-2 pr-3 pl-3 w-30 rounded-md ml-5">Disconnect</button>
            </div>
        </div>
    )
}

export default WalletDetails
