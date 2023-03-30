import React from "react";
import Link from "next/link";
import {
    productMain__info,
    productMain__title,
    productMain__subtitle,
} from "../ProductMain.module.scss";

function ProductMainInfo({ titleText, subtitleText, link }) {
    return (
        <div className={productMain__info}>
            <h2 className={productMain__title}>
                <Link href={`/products/${link}`}>{titleText}</Link>
            </h2>
            <h3 className={productMain__subtitle}>{subtitleText}</h3>
        </div>
    );
}

export default ProductMainInfo;
