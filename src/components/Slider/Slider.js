import "./Slider.scss";
import { backgrounds, timerBg } from "../../utils/constants.js";
import { useEffect, useState } from "react";

function Slider({ anchorName }) {
    const [bg1, setBg1] = useState(backgrounds[0]);
    const [bg2, setBg2] = useState(backgrounds[-1]);
    const [bgOpacity, setOpacity] = useState(1);

/*     function handleClick(e) {
        e.preventDefault();

        window.scrollBy({
            top: top,
            behavior: "smooth",
        });
    } */

    useEffect(() => {
        function changeOpacity() {
            setOpacity((prev) => (prev === 1 ? 0 : 1));
        }
        function changeBg(opacity) {
            if (!opacity) {
                setBg1((prevBg) =>
                    backgrounds.indexOf(prevBg) + 2 > backgrounds.length - 1
                        ? backgrounds.indexOf(prevBg) === backgrounds.length - 1
                            ? backgrounds[1]
                            : backgrounds[0]
                        : backgrounds[backgrounds.indexOf(prevBg) + 2]
                );
            } else {
                setBg2((prevBg) =>
                    backgrounds.indexOf(prevBg) + 2 > backgrounds.length - 1
                        ? backgrounds.indexOf(prevBg) === backgrounds.length - 1
                            ? backgrounds[1]
                            : backgrounds[0]
                        : backgrounds[backgrounds.indexOf(prevBg) + 2]
                );
            }
        }
        async function change(opacity) {
            await changeBg(opacity);
            changeOpacity();
        }

        const timerId = setInterval(() => change(bgOpacity), timerBg);
        return () => clearInterval(timerId);
    }, [bgOpacity, bg1, bg2]);

    return (
        <section
            className="slider"
            id={anchorName} /* style={{ backgroundImage: `url(${bg}` }} */
        >
            <div
                className="slider__slide"
                style={{
                    opacity: `${bgOpacity}`,
                    backgroundImage: `url(${bg1}`,
                }}
            ></div>
            <div
                className="slider__slide"
                style={{
                    opacity: `${+!bgOpacity}`,
                    backgroundImage: `url(${bg2}`,
                }}
            ></div>
            <div className="slider__container">
                <div className="slider__info">
                    <h1 className="slider__title">
                        Научно-производственное предприятие "Цикл&nbsp;Плюс"
                    </h1>
                    <h3 className="slider__subtitle">
                        Наше предприятие занимается разработкой и производством преобразовательной техники.
                    </h3>
                    {/* <a className="slider__button" href="#projects" >К продукции</a> */}
                </div>
            </div>
        </section>
    );
}

export default Slider;
