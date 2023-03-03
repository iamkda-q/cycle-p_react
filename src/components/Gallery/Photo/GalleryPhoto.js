import React from "react";
import "../Gallery.scss";

const GalleryPhoto = ({ id, onChange, value, name, figure, styles }) => {
    return (
        <>
            <input
                id={id}
                onChange={onChange}
                type="radio"
                checked={value === id}
                name={name}
            />
            <label htmlFor={id} className="gallery__label" style={styles}>
                <img src={figure} alt="" className="gallery__figure"/>
            </label>
        </>
    );
};

export default GalleryPhoto;
