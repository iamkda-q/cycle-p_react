import React from "react";
import { partner, partner__icon, partner__text } from "./Partner.module.scss";
import Image from "next/image";

function Partner({ name, logo }) {
    return (
        <li className={partner}>
            <Image src={logo} alt="" loading="eager" className={partner__icon} />
            <p className={partner__text}>{name}</p>
        </li>
    );
}

export default Partner;
