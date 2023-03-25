import "./Slider.scss";
import { useEffect, useState } from "react";

function Slider({ slidesArr, changeTime, children}) {
    const [bg1, setBg1] = useState(slidesArr[0]);
    const [bg2, setBg2] = useState(slidesArr[-1]);
    const [bgOpacity, setOpacity] = useState(1);

    useEffect(() => {
        function changeOpacity() {
            setOpacity((prev) => (prev === 1 ? 0 : 1));
        }
        function changeBg(opacity) {
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
            await changeBg(opacity);
            changeOpacity();
        }

        const timerId = setInterval(() => change(bgOpacity), changeTime);
        return () => clearInterval(timerId);
    }, [bgOpacity, bg1, bg2]);

    return (
        <>
            <div
                className="slide"
                style={{
                    opacity: `${bgOpacity}`,
                    backgroundImage: `url(${bg1}`,
                }}
            ></div>
            <div
                className="slide"
                style={{
                    opacity: `${+!bgOpacity}`,
                    backgroundImage: `url(${bg2}`,
                }}
            ></div>
            {children}
        </>
    );
}

export default Slider;
