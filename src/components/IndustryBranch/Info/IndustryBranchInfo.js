import React from "react";
import Link from "next/link";
import {
    industryBranch__info,
    industryBranch__title,
    industryBranch__subtitle,
} from "../IndustryBranch.module.scss";

function IndustryBranchInfo({ titleText, subtitleText, link }) {
    return (
        <div className={industryBranch__info}>
            <h2 className={industryBranch__title}>
                <Link href={`/products/${link}`}>{titleText}</Link>
            </h2>
            <h3 className={industryBranch__subtitle}>{subtitleText}</h3>
        </div>
    );
}

export default IndustryBranchInfo;
