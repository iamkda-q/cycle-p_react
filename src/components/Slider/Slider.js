import "./Slider.scss";
import { backgrounds } from "../../utils/constants.js";
import { useEffect, useState } from "react";

function Slider() {
    const [bg, setBg] = useState(backgrounds[0]);

    useEffect(() => {
        function changeBg() {
            setBg((prevBg) =>
                backgrounds.indexOf(prevBg) === backgrounds.length - 1
                    ? backgrounds[0]
                    : backgrounds[backgrounds.indexOf(prevBg) + 1]
            );
        }
        const timerId = setInterval(() => changeBg(), 8000);

        return () => clearInterval(timerId);
    }, []);

    return (
        <section className="slider" style={{ backgroundImage: `url(${bg}` }}>
            <div className="slider__container">
                <div className="slider__info">
                    <h2 className="slider__title">
                        Not only people need a house
                    </h2>
                    <h3 className="slider__subtitle">
                        We offer to give a chance to a little and nice puppy
                        with an extremely wide and open heart. He or she will
                        love you more than anybody else in the world, you will
                        see!
                    </h3>
                </div>
            </div>
        </section>
    );
}

export default Slider;
