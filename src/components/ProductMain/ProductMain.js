import React, { useEffect } from "react";
import "./ProductMain.scss";
import ProductMainInfo from "./Info/ProductMainInfo";
import ProductMainImg from "./Img/ProductMainImg";

function ProductMain({ name, shortD, img, number, product, setProductInfo }) {

    // useEffect(() => {
    //     console.log("Эпроскроллили");
    //     document.documentElement.scrollTo({
    //         top: 0,
    //         behavior: "smooth",
    //     });
    // }, []);

    function handleClick() {
        setProductInfo(product);
    }

    return (
        <div className="productMain">
            <div
                className={`productMain__number productMain__number_${
                    number % 2 && +document.documentElement.clientWidth > 899
                        ? "right"
                        : "left"
                }`}
            >
                {number}
            </div>
            <div className="productMain__container">
                {number % 2 && +document.documentElement.clientWidth > 899 ? (
                    <>
                        <ProductMainInfo titleText={name} subtitleText={shortD} handleClick={handleClick}/>
                        <ProductMainImg image={img} />
                    </>
                ) : (
                    <>
                        <ProductMainImg image={img} />
                        <ProductMainInfo titleText={name} subtitleText={shortD} handleClick={handleClick}/>
                    </>
                )}
            </div>
        </div>
    );
}

export default ProductMain;
