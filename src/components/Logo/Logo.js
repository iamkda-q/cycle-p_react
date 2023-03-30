import React from "react";
import Image from "next/image";
import Link from "next/link";

import {logo, logo__img} from "./Logo.module.scss";

import train from "../../assets/images/train4.jpg"

function Logo() {
    return (
        <Link href="/" className={logo}>
            <Image className={logo__img} src={train} alt="mini train"/>
            Цикл Плюс
        </Link>
    );
}

export default React.memo(Logo);
