import React from "react";
import { Link } from "react-router-dom";
import "../ProductMain.scss";

function ProductMainInfo({ titleText, subtitleText, handleClick }) {
    return (
        <div className="productMain__info">
            <h1 className="productMain__title">
                <Link to="/products" onClick={handleClick}>{titleText}</Link>
            </h1>
            <h3 className="productMain__subtitle">{subtitleText}</h3>
        </div>
    );
}

export default ProductMainInfo;
