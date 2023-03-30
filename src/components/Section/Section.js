import React from "react";
import {
    section,
    section_grey,
    section__container,
    section__title,
    section_hiddenOverflow
} from "./Section.module.scss";

function Section({ anchorName, title, isGrey, isHiddenOvf, children}) {
    return (
        <section
            className={`${section}${isGrey ? ` ${section_grey}` : ""}${isHiddenOvf ? ` ${section_hiddenOverflow}` : ""}`}
            id={anchorName}
        >
            <div className={section__container}>
                <h2 className={section__title}>{title}</h2>
                {children}
            </div>
        </section>
    );
}

export default Section;
