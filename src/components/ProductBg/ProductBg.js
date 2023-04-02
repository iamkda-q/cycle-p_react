import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { productBg, productBg__background } from "./ProductBg.module.scss";

function ProductBg({ bgImage }) {
    const productViewRef = useRef();
    const [productViewHeight, setProductViewHeight] = useState("200px");
    const productBgRef = useRef();

    useEffect(() => {
        if (+document.documentElement.clientWidth > 899) {
            setProductViewHeight("200px");
        } else {
            setProductViewHeight("120px");
        }
    }, []);

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
    }, [productViewHeight]);

    return (
        <div
            className={productBg}
            ref={productViewRef}
            style={{ height: productViewHeight }}
        >
            <Image
                ref={productBgRef}
                alt="Фоновое фото меню"
                src={bgImage}
                loading="eager"
                // quality={100}
                className={productBg__background}
                style={{ bottom: imgTopOffset }}
            />
        </div>
    );
}

export default ProductBg;
