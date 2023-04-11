import React from "react";
import Image from "next/image";
import { industryBranch__figure } from "../IndustryBranch.module.scss";

function IndustryBranchImg({ image }) {
    return (
        <Image
            src={image}
            quality={100}
            loading="eager"
            alt="Фото продукта"
            className={industryBranch__figure}
        />
    );
}

export default IndustryBranchImg;
