import React from "react";
import Image from "next/image";
import { skeleton__figure } from "../Skeleton.module.scss";

function SkeletonImg({ image }) {
    return (
        <Image
            src={image.img}
            quality={100}
            loading="eager"
            alt="Фото продукта"
            className={skeleton__figure}
            style={image.props || ""}
        />
    );
}

export default SkeletonImg;
