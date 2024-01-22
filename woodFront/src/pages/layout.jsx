import { Outlet } from "react-router-dom"

import Footer from "../sections/footerLayout"
import Header from "../sections/headerLayout"


const Layout = () => {
    return (
        <>
            <div className="section default-background">
                <Header/>
            </div>
                <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout