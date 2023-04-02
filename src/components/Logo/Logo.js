import React from "react";
import Image from "next/image";
// import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

import { logo, logo__img } from "./Logo.module.scss";

import train from "../../assets/images/train4.jpg";

function Logo({ nonbasicImgPath }) {
    return (
        <Link href="/" className={logo}>
            <Image
                width="10"
                height="10"
                className={logo__img}
                src={`${process.env.exportStatic ? nonbasicImgPath ? nonbasicImgPath : "." : ""}/train4.jpg`}/* {train} */
                alt="mini train"
            />
            Цикл Плюс
        </Link>
    );
}

export default React.memo(Logo);
