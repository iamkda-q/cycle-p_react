import React, { useEffect, useState, useRef } from "react";
import "./ProductBg.scss";

function ProductBg({bgImage}) {
    const productViewRef = useRef();
    const productViewHeight = "200px";
    const productBgRef = useRef();
    
    const [imgTopOffset, setImgTopOffset] = useState(0);

    useEffect(() => {
        function bgScroll() {
            const productViewPosition =
                productViewRef.current.getBoundingClientRect().top;
            const productBgRefHeight =
                productBgRef.current.getBoundingClientRect().height;
            const clientHeight = document.documentElement.clientHeight;
            if (productViewPosition < clientHeight) {
                const relativeMove =
                    (clientHeight - productViewPosition) /
                    (clientHeight + parseInt(productViewHeight));
                setImgTopOffset(
                    relativeMove *
                        (parseInt(productViewHeight) - productBgRefHeight)
                );
            }
        }

        window.addEventListener("scroll", bgScroll);

        return () => {
            window.removeEventListener("scroll", bgScroll);
        };
    }, []);

    return (
        <div
            className="productBg"
            ref={productViewRef}
            style={{ height: productViewHeight }}
        >
            <img
                src={bgImage}
                className="productBg__background"
                ref={productBgRef}
                style={{ bottom: imgTopOffset }}
                alt="Фоновое фото 1"
            />
        </div>
    );
}

export default ProductBg;
