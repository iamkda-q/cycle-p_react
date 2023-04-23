import React from "react";
import {
    skeleton__info,
    skeleton__title,
    skeleton__title_active,
    skeleton__subtitle,
} from "../Skeleton.module.scss";

function SkeletonInfo({ titleText, subtitleText, active }) {
    return (
        <div className={skeleton__info}>
            <h2 className={`${skeleton__title} ${active ? skeleton__title_active : ""}`}>{titleText}</h2>
            <h3 className={skeleton__subtitle}>{subtitleText}</h3>
        </div>
    );
}

export default SkeletonInfo;
