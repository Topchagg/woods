
import '../styles/sections/headerLayout.css'

const Header = () => {
    return (
        <header className='header'>
            <div className="logo-wrapper">
                <img className='header-logo' src="logo.png" alt="" />
            </div>
            <div className="nav-bar">
                <div className="nav-item">Gallery</div>
                <div className="nav-item">Price for services</div>
                <div className="nav-item">About us</div>
                <div className="nav-item">Contact</div>
            </div>
        </header>
    )
}

export default Header