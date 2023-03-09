import React from "react";
import Logo from "../Logo/Logo";

import "./Footer.scss";

function Footer() {
    return (
        <footer id="footer" className="footer">
            {/* <div className="footer__container"> */}
                <h3 className="footer__info">ООО НПП Цикл Плюс</h3>
                <address className="footer__info">
                    © <span className="numbers">1991-2023</span>
                </address>
            {/* </div> */}
        </footer>
    );
}

export default Footer;
