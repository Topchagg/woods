import { Link } from "react-router-dom"

const PhoneNumb = () => {
    return (
        <div className="phone-info-wrapper main-text flex-container">
            <div className="logo-wrapper">
                <img src="phone.svg" alt="" />
            </div>
            <Link><div className="main-text phone-numb ml-text">+420 000 000 000</div></Link>
        </div>
    )
}

export default PhoneNumb