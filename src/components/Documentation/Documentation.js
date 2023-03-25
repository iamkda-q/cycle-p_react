import React from "react";
import Section from "../Section/Section";
import Document from "./Document/Document";
import "./Documentation.scss";


function Documentation({ anchorName }) {
    return (
        <Section anchorName={anchorName} title="Документация" isGrey={true}>
            {
                <ul className="iconsGreed">
                    <Document document={""} name="Руководство по эксплуатации" />
                    <Document document={""}
                        name="Руководство по эксплуатации с комметариями режиссёра"
                    />
                </ul>
            }
        </Section>
    );
}

export default Documentation;
