import AuthFooter from "./auth/components/AuthFooter"
import AuthNav from "./auth/components/AuthNav"

const AuthLayout = ({ children }) => {
    return (
        <div className="w-full max-w-screen-lg mx-auto px-4">
            <AuthNav />
            {children}
            <AuthFooter />
        </div>

    )
}

export default AuthLayout