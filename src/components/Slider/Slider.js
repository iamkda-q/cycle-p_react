import { useEffect, useState } from "react";
import { slide, figure } from "./Slider.module.scss";
import Image from "next/image";

function Slider({ slidesArr, changeTime, children }) {
    const [bg1, setBg1] = useState(slidesArr[0]);
    const [bg2, setBg2] = useState(slidesArr[slidesArr.length - 1]);
    const [bgOpacity, setOpacity] = useState(1);

    useEffect(() => {
        function changeOpacity() {
            setOpacity((prev) => (prev === 1 ? 0 : 1));
        }
        function changeBg(opacity) {
            if (!slidesArr.length || slidesArr.length === 1) return
            const lastSlide = slidesArr.length - 1;
            if (!opacity) {
                setBg1((prevBg) =>
                    slidesArr.indexOf(prevBg) + 2 > lastSlide
                        ? slidesArr.indexOf(prevBg) === lastSlide
                            ? slidesArr[1]
                            : slidesArr[0]
                        : slidesArr[slidesArr.indexOf(prevBg) + 2]
                );
            } else {
                setBg2((prevBg) =>
                    slidesArr.indexOf(prevBg) + 2 > lastSlide
                        ? slidesArr.indexOf(prevBg) === lastSlide
                            ? slidesArr[1]
                            : slidesArr[0]
                        : slidesArr[slidesArr.indexOf(prevBg) + 2]
                );
            }
        }
        async function change(opacity) {
            if (!slidesArr.length || slidesArr.length === 1) return
            await changeBg(opacity);
            changeOpacity();
        }

        const timerId = setInterval(() => change(bgOpacity), changeTime);
        return () => clearInterval(timerId);
    }, [bgOpacity, bg1, bg2]);

    return (
        <>
            <div
                className={slide}
                style={{
                    opacity: `${bgOpacity}`,
                }}
            >
                <Image
                    src={bg1}
                    loading="eager"
                    alt="Background 1"
                    className={figure}
                    priority
                />
            </div>
            <div
                className={slide}
                style={{
                    opacity: `${+!bgOpacity}`,
                }}
            >
                <Image
                    src={bg2}
                    loading="eager"
                    alt="Background 2"
                    className={figure}
                    priority
                />
            </div>
            {children}
        </>
    );
}

export default Slider;
