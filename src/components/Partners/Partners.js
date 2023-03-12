import React from "react";
import Section from "../Section/Section";
import Partner from "./Partner/Partner";
import "./Partners.scss";

import vectorLogo from "../../assets/images/vectorLogo.png";
import zteoLogo from "../../assets/images/zteoLogo3.png";

function Partners({ anchorName }) {
    return (
        <Section anchorName={anchorName} title="Наши партнеры" isGrey={true}>
            {
                <ul className="partners">
                    <Partner logo={vectorLogo} name="НПФ «ВЕКТОР»" />
                    <Partner
                        logo={zteoLogo}
                        name="ЗАО «ПТФК»ЗТЭО» Завод транспортного электрооборудования"
                    />
                </ul>
            }
        </Section>
    );
}

export default Partners;
