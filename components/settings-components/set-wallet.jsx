
const SetWallet = () => {
  return (
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
  )
}

export default SetWallet
