import React from "react";
import "../ProductMain.scss";

function ProductMainImg({image}) {
    return (
        <img
            src={image}
            alt="Автоматический регулятор дозатора насоса"
            className="product__figure"
        />
    );
}

export default ProductMainImg;
