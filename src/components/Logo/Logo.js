import React from "react";
import Image from "next/image";
import Link from "next/link";

import { logo, logo__img } from "./Logo.module.scss";

import logoImg from "../../../public/logo/logo.png";

function Logo( {name}) {
    return (
        <Link href="/" className={logo}>
            <Image
                width="10"
                height="10"
                className={logo__img}
                src={logoImg}
                alt="logo"
            />
            <h4 style={{marginLeft: name ? "20px" : "0"}}>{name ? `ЦИКЛ ПЛЮС` : ""}</h4>
        </Link>
    );
}

export default React.memo(Logo);
