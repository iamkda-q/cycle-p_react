import "./Slider.scss";
import { backgrounds, timerBg } from "../../utils/constants.js";
import { useEffect, useState } from "react";

function Slider() {
  const [bg1, setBg1] = useState(backgrounds[0]);
  const [bg2, setBg2] = useState(backgrounds[-1]);
  const [bgOpacity, setOpacity] = useState(1);

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
    <section className="slider" /* style={{ backgroundImage: `url(${bg}` }} */>
      <div
        className="slider__slide"
        style={{ opacity: `${bgOpacity}`, backgroundImage: `url(${bg1}` }}
      ></div>
      <div
        className="slider__slide"
        style={{ opacity: `${+!bgOpacity}`, backgroundImage: `url(${bg2}` }}
      ></div>
      <div className="slider__container">
                <div className="slider__info">
                    <h2 className="slider__title">
                        Научнопроизводственное предприятие "Цикл Плюс"
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
