'use client';
import { useRouter } from 'next/navigation';
import WalletDetails from './wallet-details';
import SetWallet from './set-wallet';
const WalletOverview = () => {
    const router = useRouter();

    // --- Simulate that payment gateway is setup or not ---
    const isPaymentGatewaySetup = true
    return (
        <>
            <div className="font-bold text-xl text-[#281202] mt-10 mb-10">
                <h1>Wallet Overview</h1>
            </div>


            {
                isPaymentGatewaySetup ?

                    // --- DISPLAYED WHEN PAYMENT GATEWAY IS SETUP ---
                    <WalletDetails />
                    :
                    // --- DISPLAYED WHEN PAYMENT GATEWAY IS NOT SETUP ---

                    <SetWallet />
            }

        </>
    )
}

export default WalletOverview