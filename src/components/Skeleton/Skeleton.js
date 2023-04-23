import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
    skeleton,
    skeleton__number,
    skeleton__number_right,
    skeleton__number_left,
    skeleton__container,
} from "./Skeleton.module.scss";
import SkeletonInfo from "./Info/SkeletonInfo";
import SkeletonImg from "./Img/SkeletonImg";

function Skeleton({ name, shortD, img, number, link }) {
    const [is899, set899] = useState(false);
    const [isActive, setActive] = useState(false);
    useEffect(() => {
        if (+document.documentElement.clientWidth > 899) {
            set899(true);
        } else {
            set899(false);
        }
    }, []);

    return (
        <Link
            href={link}
            className={skeleton}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
        >
            <div
                className={`${skeleton__number} ${
                    number % 2 && is899
                        ? skeleton__number_left
                        : skeleton__number_left
                }`}
            >
                {number}
            </div>
            <div className={skeleton__container}>
                <>
                    <SkeletonInfo
                        titleText={name}
                        subtitleText={shortD}
                        active={isActive}
                    />
                    <SkeletonImg image={img} />
                </>
                {/* {number % 2 && is899 ? (
                    <>
                        <SkeletonInfo
                            titleText={name}
                            subtitleText={description}
                            link={link}
                        />
                        <SkeletonImg image={img} />
                    </>
                ) : (
                    <>
                        <SkeletonImg image={img} />
                        <SkeletonInfo
                            titleText={name}
                            subtitleText={description}
                            link={link}
                        />
                    </>
                )} */}
            </div>
        </Link>
    );
}

export default Skeleton;
