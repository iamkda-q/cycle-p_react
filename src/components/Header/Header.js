import React from "react";
import { /* headerSlides, */ timerBg } from "../../utils/constants";
import  { header } from "./Header.module.scss";
import Slider from "../Slider/Slider";
import HeaderInfo from "./Info/HeaderInfo";

function Header({ anchorName, title, subtitle, page, bgImages }) {
    return (
        <header className={header} id={anchorName || null}>
            <Slider slidesArr={bgImages} changeTime={timerBg}>
                <HeaderInfo title={title} subtitle={subtitle} page={page} />
            </Slider>
        </header>
    );
}

export default Header;
