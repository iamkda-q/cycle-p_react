import React from "react";
import "../Header.scss";

function HeaderInfo({ title, subtitle, page }) {
    return (
        <div className={`header__info${page ? ` header__info_${page}` : ""}`}>
            <h1 className={`header__title${page ? ` header__title_${page}` : ""}`}>{title}</h1>
            <h3 className={`header__subtitle${page ? ` header__subtitle_${page}` : ""}`}>{subtitle}</h3>
        </div>
    );
}

export default HeaderInfo;
