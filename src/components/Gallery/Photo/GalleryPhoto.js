import React from "react";
import Image from "next/image";
import { gallery__label, gallery__figure } from "../Gallery.module.scss";

const GalleryPhoto = ({ id, onChange, value, name, figure }) => {
    return (
        <>
            <input
                id={id}
                onChange={onChange}
                type="radio"
                checked={value === id}
                name={name}
            />
            <label htmlFor={id} className={gallery__label}>
                <Image src={figure} alt="" className={gallery__figure} />
            </label>
        </>
    );
};

export default GalleryPhoto;
