import React from "react";
import "./Document.scss";

import pdf from "../../../assets/images/pdf.png";

function Document({ name, document }) {
    return (
        <li className="document">
            <img src={pdf} alt="" className="partner__icon" />
            <p className="document__text">{name}</p>
        </li>
    ); 
}

export default Document;
