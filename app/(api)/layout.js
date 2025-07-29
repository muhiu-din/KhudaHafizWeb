import AuthFooter from "./auth/components/AuthFooter"
import AuthNav from "./auth/components/AuthNav"

const AuthLayout = ({ children }) => {
    return (
        <div>
            <AuthNav/>
            {children}
            <AuthFooter/>
        </div>
    )
}

export default AuthLayout