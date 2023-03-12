import React from "react";
import "./Partner.scss";

function Partner({ name, logo }) {
    return (
        <li className="partner">
            <img src={logo} alt="" className="partner__icon" />
            <p className="partner__icon-text">{name}</p>
        </li>
    ); 
}

export default Partner;
