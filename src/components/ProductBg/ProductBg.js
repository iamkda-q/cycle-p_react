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
    useEffect(() => {
        // window.addEventListener("scroll", bgScroll);
        console.log("монтирование");
        return () => {
            // window.removeEventListener("scroll", bgScroll);
        };
    }, []);

    return (
        <div
            className={productBg}
            ref={productViewRef}
            style={{ height: productViewHeight }}
        >
            {" "}
            <Image
                ref={productBgRef}
                alt="Фоновое фото меню"
                src={bgImage}
                quality={100}
                className={productBg__background}
                style={{ bottom: imgTopOffset }}
            />
        </div>
    );
}

export default ProductBg;
