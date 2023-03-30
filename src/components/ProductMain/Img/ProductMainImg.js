import React from "react";
import Image from "next/image";
import { productMain__figure } from "../ProductMain.module.scss";

function ProductMainImg({ image }) {
    return (
        <Image
            src={image}
            quality={100}
            alt="Фото продукта"
            className={productMain__figure}
        />
    );
}

export default ProductMainImg;
