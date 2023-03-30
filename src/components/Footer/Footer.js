import React from "react";

import {
    footer,
    footer_grey,
    footer__container,
    footer__info,
    numbers
} from "./Footer.module.scss";

function Footer({ isGrey }) {
    return (
        <footer
            id="footer"
            className={`${footer}${isGrey ? ` ${footer_grey}` : ""}`}
        >
            <div className={footer__container}>
                <h3 className={footer__info}>ООО НПП "Цикл Плюс"</h3>
                <address className={footer__info}>
                    © <span className={numbers}>1991-2023</span>
                </address>
            </div>
        </footer>
    );
}

export default Footer;
