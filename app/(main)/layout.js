import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"

export default function Home({children}){
return (
    <>
        <Navbar/>
        {children}
        <Footer/>
    </>
)
}