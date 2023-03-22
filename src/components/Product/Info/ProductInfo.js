import React from "react";
import { Link } from "react-router-dom";
import "../Product.scss";

function ProductInfo({ titleText, subtitleText }) {
    return (
        <div className="product__info">
            <h1 className="product__title">
                <Link to="/product">{titleText}</Link>
            </h1>
            <h3 className="product__subtitle">{subtitleText}</h3>
        </div>
    );
}

export default ProductInfo;
