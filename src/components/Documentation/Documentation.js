import React from "react";
import Section from "../Section/Section";
import Document from "./Document/Document";
import { iconsGreed } from "./Documentation.module.scss";

function Documentation({ anchorName, documentsData }) {
    return (
        <Section anchorName={anchorName} title="Документация" isGrey={true}>
            {
                <ul className={iconsGreed}>
                    {documentsData
                        ? documentsData.map((documentData) => (
                              <Document {...documentData} />
                          ))
                        : null}
                </ul>
            }
        </Section>
    );
}

export default Documentation;
