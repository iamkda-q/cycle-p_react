import React from "react";
import Image from "next/image";
import docStyles, {
    document__icon,
    document__text,
} from "./Document.module.scss";

import pdfIcon from "../../../../public/pdf.png";

function Document({ name, path }) {
    return (
        <li>
            <a
                href={process.env.exportStatic ? `/cycle-dep${path}` : path}
                className={docStyles.document}
                target="_blank"
            >
                <Image
                    src={pdfIcon}
                    alt=""
                    loading="eager"
                    className={document__icon}
                />
                <p className={document__text}>{name}</p>
                {}
            </a>
        </li>
    );
}

export default Document;
