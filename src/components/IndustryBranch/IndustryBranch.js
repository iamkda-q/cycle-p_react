import React, { useEffect, useState } from "react";
import {
    industryBranch,
    industryBranch__number,
    industryBranch__number_right,
    industryBranch__number_left,
    industryBranch__container,
} from "./IndustryBranch.module.scss";
import IndustryBranchInfo from "./Info/IndustryBranchInfo";
import IndustryBranchImg from "./Img/IndustryBranchImg";

function IndustryBranch({ name, shortD, img, number, link }) {
    const [is899, set899] = useState(false);
    useEffect(() => {
        if (+document.documentElement.clientWidth > 899) {
            set899(true);
        } else {
            set899(false);
        }
    }, []);

    return (
        <div className={industryBranch}>
            <div
                className={`${industryBranch__number} ${
                    number % 2 && is899
                        ? industryBranch__number_right
                        : industryBranch__number_left
                }`}
            >
                {number}
            </div>
            <div className={industryBranch__container}>
                {number % 2 && is899 ? (
                    <>
                        <IndustryBranchInfo
                            titleText={name}
                            subtitleText={shortD}
                            link={link}
                        />
                        <IndustryBranchImg image={img} />
                    </>
                ) : (
                    <>
                        <IndustryBranchImg image={img} />
                        <IndustryBranchInfo
                            titleText={name}
                            subtitleText={shortD}
                            link={link}
                        />
                    </>
                )}
            </div>
        </div>
    );
}

export default IndustryBranch;
