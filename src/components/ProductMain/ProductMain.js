import React, { useEffect, useState } from "react";
import {
    productMain,
    productMain__number,
    productMain__number_right,
    productMain__number_left,
    productMain__container,
} from "./ProductMain.module.scss";
import ProductMainInfo from "./Info/ProductMainInfo";
import ProductMainImg from "./Img/ProductMainImg";

function ProductMain({ name, shortD, img, number, link }) {
    const [is899, set899] = useState(false);
    useEffect(() => {
        if (+document.documentElement.clientWidth > 899) {
            set899(true);
        } else {
            set899(false);
        }
    }, []);

    return (
        <div className={productMain}>
            <div
                className={`${productMain__number} ${
                    number % 2 && is899
                        ? productMain__number_right
                        : productMain__number_left
                }`}
            >
                {number}
            </div>
            <div className={productMain__container}>
                {number % 2 && is899 ? (
                    <>
                        <ProductMainInfo
                            titleText={name}
                            subtitleText={shortD}
                            link={link}
                        />
                        <ProductMainImg image={img} />
                    </>
                ) : (
                    <>
                        <ProductMainImg image={img} />
                        <ProductMainInfo
                            titleText={name}
                            subtitleText={shortD}
                            link={link}
                        />
                    </>
                )}
            </div>
        </div>
    );
}

export default ProductMain;
