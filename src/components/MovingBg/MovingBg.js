import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { movingBg, movingBg__background } from "./MovingBg.module.scss";

function MovingBg({ bgImage }) {
    const productViewRef = useRef();
    const [productViewHeight, setProductViewHeight] = useState("200px");
    const movingBgRef = useRef();

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
            if (productViewRef.current && movingBgRef.current) {
                const productViewPosition =
                    productViewRef.current.getBoundingClientRect().top;
                const movingBgRefHeight =
                    movingBgRef.current.getBoundingClientRect().height;
                const clientHeight = document.documentElement.clientHeight;
                if (productViewPosition < clientHeight) {
                    const relativeMove =
                        (clientHeight - productViewPosition) /
                        (clientHeight + parseInt(productViewHeight));
                    setImgTopOffset(
                        relativeMove *
                            (parseInt(productViewHeight) - movingBgRefHeight)
                    );
                }
            }
        }
        window.addEventListener("scroll", bgScroll);
        return () => {
            window.removeEventListener("scroll", bgScroll);
        };
    }, []);

    return (
        <div
            className={movingBg}
            ref={productViewRef}
            style={{ height: productViewHeight }}
        >
            <Image
                ref={movingBgRef}
                alt="Фоновое фото меню"
                src={bgImage}
                loading="eager"
                // quality={100}
                className={movingBg__background}
                style={{ bottom: imgTopOffset }}
            />
        </div>
    );
}

export default MovingBg;
