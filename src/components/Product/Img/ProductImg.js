import React from "react";
import "../Product.scss";

function ProductImg({image}) {
    return (
        <img
            src={image}
            alt="Автоматический регулятор дозатора насоса"
            className="product__figure"
        />
    );
}

export default ProductImg;
