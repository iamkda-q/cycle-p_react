import React from "react";
import Section from "../Section/Section";
import Partner from "./Partner/Partner";
import { iconsGreed } from "./Partners.module.scss";

import vectorLogo from "../../../public/logo/vectorLogo.png";
import zteoLogo from "../../../public/logo/zteoLogo.png";
import spmLogo from "../../../public/logo/spmLogo.png";
import mpeiLogo from "../../../public/logo/mpeiLogo.png";
import yauzaLogo from "../../../public/logo/yauzaLogo.jpg";

function Partners({ anchorName }) {
    return (
        <Section anchorName={anchorName} title="Наши партнеры" isGrey={true}>
            {
                <ul className={iconsGreed}>
                    <Partner logo={vectorLogo} name="НПФ «ВЕКТОР»" />
                    <Partner
                        logo={zteoLogo}
                        name="ЗАО «ПТФК»ЗТЭО» Завод транспортного электрооборудования"
                    />
                    <Partner
                        logo={mpeiLogo}
                        name="Московский энергетический институт"
                    />
                    <Partner
                        logo={spmLogo}
                        name="«Специальные проекты машиностроения»"
                    />
                    <Partner
                        logo={yauzaLogo}
                        name="«ЯузаМоторс-М»"
                    />
                </ul>
            }
        </Section>
    );
}

export default Partners;
