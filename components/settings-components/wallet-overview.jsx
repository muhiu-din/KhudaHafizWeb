'use client';
import { useRouter } from 'next/navigation';
const WalletOverview = () => {
    const router = useRouter();

    // --- Simulate that payment gateway is setup or not ---
    const isPaymentGatewaySetup = false
    return (<>
        <div className="font-bold text-xl text-[#281202] mt-10 mb-10">
            <h1>Wallet Overview</h1>
        </div>


        {
            isPaymentGatewaySetup ?

                //  Displayed when payment gateway is not setup

                <div className="grid grid-cols-3 gap-x-5 gap-y-5">
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

                :



                <div className='flex justify-end relative'>
                    <div className='flex flex-col gap-4 absolute left-10 bottom-10'>
                        <h1 
                          className='font-semibold text-xl mb-10'
                        >Why Connect to your wallet?</h1>
                        <p>
                            &rarr; To make Payments
                        </p>

                        <p>
                            &rarr; Track Balance
                        </p>

                        <p>
                            &rarr; and View transaction History
                        </p>
                    </div>
                    <div>
                        <div className='font-semibold text-lg flex justify-center mb-10'>
                            <h1>Click To Connect To Wallet</h1>
                        </div>

                        <div className='grid grid-cols-2 gap-4'>
                            <div className='flex justify-end'>
                                <img src="payment-gateway-logos/easypaisa.png" className='rounded-full w-52 shadow-lg' />
                            </div>

                            <div>
                                <img src="payment-gateway-logos/jazzcash.png" className='rounded-full w-52 shadow-lg' />
                            </div>

                            <div className='flex justify-end'>
                                <img src="payment-gateway-logos/sadapay.png" className='rounded-full w-52 shadow-lg' />
                            </div>

                            <div>
                                <img src="payment-gateway-logos/bank.png" className='rounded-full w-52 shadow-lg' />
                            </div>
                        </div>
                    </div>

                    
                </div>



        }






    </>
    )
}

export default WalletOverview