import AccountOverview from "@/components/settings-components/account-overview"
import Preferences from "@/components/settings-components/preferences"
import ProfileOverview from "@/components/settings-components/profile-overview"
import WalletOverview from "@/components/settings-components/wallet-overview"

const Settings = () => {
    return <>
        <div className="flex justify-center items-center mt-5 w-full text-[#281202]">

            <div className="w-full">
            
                <div className="font-bold text-3xl flex justify-center text-[#281202] ">
                    <h1>Settings</h1>
                </div>

                <div className="flex justify-center w-full">
                    <div className="bg-[#F5F4F0] p-10 rounded-lg mt-10 mb-20 shadow-xl w-4/5" >
                        <div className="flex  items-center justify-center gap-x-30
                        font-semibold bg-[#7b5a13] text-white pl-6 pr-6 pt-2 pb-2
                        rounded-3xl">
                            <h1>Profile</h1>
                            <h1>Wallet</h1>
                            <h1>Account</h1>
                            <h1>Preferences</h1>
                        </div>

                        <ProfileOverview />
                        <WalletOverview />
                        <AccountOverview />
                        <Preferences />
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default Settings 