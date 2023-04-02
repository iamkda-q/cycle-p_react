import React from "react";
import Image from "next/image";
import docStyles, {
    document__icon,
    document__text,
} from "./Document.module.scss";

import pdf from "../../../assets/images/pdf.png";

function Document({ name, document }) {
    return (
        <li className={docStyles.document}>
            <Image src={pdf} alt="" loading="eager" className={document__icon} />
            <p className={document__text}>{name}</p>
        </li>
    );
}

export default Document;
