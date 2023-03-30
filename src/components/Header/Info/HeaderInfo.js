import React from "react";
import { header__info, header__title, header__subtitle} from "../Header.module.scss";

function HeaderInfo({ title, subtitle, page }) {
    return (
        <div className={`${header__info}${page ? ` ${header__info}_${page}` : ""}`}>
            <h1 className={`${header__title}${page ? ` ${header__title}_${page}` : ""}`}>{title}</h1>
            <h3 className={`${header__subtitle}${page ? ` ${header__subtitle}_${page}` : ""}`}>{subtitle}</h3>
        </div>
    );
}

export default HeaderInfo;
