import React from "react";
import Section from "../Section/Section";
import Document from "./Document/Document";
import { iconsGreed } from "./Documentation.module.scss";

function Documentation({ anchorName, data }) {
    return (
        <Section anchorName={anchorName} title="Документация" isGrey={true}>
            {
                <ul className={iconsGreed}>
                    {data
                        ? data.map((document, i) => (
                              <Document key={i} {...document} />
                          ))
                        : null}
                </ul>
            }
        </Section>
    );
}

export default Documentation;
