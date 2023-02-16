import { Link } from "react-router-dom";
import "./Logo.scss";

function Logo() {
    return (
        <Link to="/" className="logo">
            ЦИКЛ ПЛЮС
              {/*   <img
                    src={logo}
                    alt="Логотип предприятия"
                    className="logo"
                /> */}
        </Link>
    );
}

export default Logo;
