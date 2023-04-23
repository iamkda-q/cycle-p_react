import React, { useState, useEffect } from "react";

import {
    footer,
    footer_grey,
    footer__container,
    footer__info,
} from "./Footer.module.scss";

import Logo from "../Logo/Logo";

function Footer({ isGrey }) {
    const [is499, set499] = useState(false);
    useEffect(() => {
        if (+document.documentElement.clientWidth < 499) {
            set499(true);
        } else {
            set499(false);
        }
    }, []);

    return (
        <footer
            id="footer"
            className={`${footer}${isGrey ? ` ${footer_grey}` : ""}`}
        >
            {is499 ? "" : <Logo />}
            <div className={footer__container}>
                <h3 className={footer__info}>ООО НПП "Цикл Плюс"</h3>
                <address className={footer__info}>© 1991-2023</address>
            </div>
            {is499 ? "" : <Logo />}
        </footer>
    );
}

export default Footer;
