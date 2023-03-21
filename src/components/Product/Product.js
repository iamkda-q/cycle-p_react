import React from "react";
import "./Product.scss";
import ProductInfo from "./Info/ProductInfo";
import ProductImg from "./Img/ProductImg";

function Product({ name, shortD, img, number }) {
    return (
        <div className="product">
            <div
                className={`product__number product__number_${
                    (number % 2) && (+document.documentElement.clientWidth > 899) ? "right" : "left"
                }`}
            >
                {number}
            </div>
            <div className="product__container">
                {(number % 2) && (+document.documentElement.clientWidth > 899) ? (
                    <>
                        <ProductInfo titleText={name} subtitleText={shortD} />
                        <ProductImg image={img} />
                    </>
                ) : (
                    <>
                        <ProductImg image={img} />
                        <ProductInfo titleText={name} subtitleText={shortD} />
                    </>
                )}
            </div>
        </div>
    );
}

export default Product;
