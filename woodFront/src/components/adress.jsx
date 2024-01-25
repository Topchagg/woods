import { Link } from "react-router-dom"

const Adress = () => {
    return (
        <div className="location-info-wrapper flex-container">
            <div className="logo-wrapper">
                <img src="geo.svg" alt="" />
             </div>
            <Link><div className="main-text ml-text">Na Plzeňce 1166/0<br/> 150 00</div></Link>
        </div>
    )
}

export default Adress