import React from "react";
import "./Section.scss";

function Section({ anchorName, title, isGrey, children }) {
    return (
        <section
            className={`section ${isGrey ? "section_grey" : ""}`}
            id={anchorName}
        >
            <div className="section__container">
                <h2 className="section__title">{title}</h2>
                {children}
            </div>
        </section>
    );
}

export default Section;
