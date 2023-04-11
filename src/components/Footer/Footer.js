import React from "react";

import {
    footer,
    footer_grey,
    footer__container,
    footer__info
} from "./Footer.module.scss";

import Logo from "../Logo/Logo";

function Footer({ isGrey }) {
    return (
        <footer
            id="footer"
            className={`${footer}${isGrey ? ` ${footer_grey}` : ""}`}
        >
            <Logo />
            <div className={footer__container}>
                <h3 className={footer__info}>ООО НПП "Цикл Плюс"</h3>
                <address className={footer__info}>
                    © 1991-2023
                </address>
            </div>
            <Logo />
        </footer>
    );
}

export default Footer;
