import Link from "next/link";
const AuthNav = () => {
  return (
    <div className="bg-[#6E5011] py-2 px-10 mt-5 mx-auto rounded-full flex justify-between">
      <div className="flex items-center gap-2">
        <img src="/auth-icons/navLogo.png" alt="Khuda Hafiz Logo" />
        <Link href="/">
          <span className="font-semibold text-white text-xl cursor-pointer">
            Khuda Hafiz
          </span>
        </Link>
      </div>
      <div>
        <img src="/auth-icons/Chat.png" alt="" />
      </div>
    </div>
  )
}

export default AuthNav