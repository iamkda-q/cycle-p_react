import { Link } from "react-router-dom";
import "./Logo.scss";
import train from "../../assets/images/train4.jpg"

function Logo() {
    return (
        <Link to="/" className="logo">
            <img className="logo__img" src={train} alt="mini train"/>
            Цикл Плюс
        </Link>
    );
}

export default Logo;
