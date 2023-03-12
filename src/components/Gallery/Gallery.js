import React, { useEffect, useState, useRef } from "react";
import "./Gallery.scss";

import { aboutFigures } from "../../utils/constants.js";
import GalleryPhoto from "./Photo/GalleryPhoto";

function Gallery() {
    const [value, setValue] = useState(null);
    const galleryRef = useRef();

    useEffect(() => {
        changeValue();
    }, []);

    /* Не знать, как сделать без квериСелектора */
    function changeValue(e) {
        const id = e ? e.target.id : galleryRef.current.firstElementChild.id;
        setValue(id);
        const labels = document.querySelectorAll(".gallery__label");
        let counter = 0;
        for (const label of labels) {
            if (label.htmlFor !== id) {
                label.style.setProperty(
                    "width",
                    `${100 / (aboutFigures.length - 1)}%`
                );
                label.style.setProperty(
                    "left",
                    `${(100 / (aboutFigures.length - 1)) * counter}%`
                );
                counter += 1;
            } else {
                label.style.setProperty("width", "100%");
                label.style.setProperty("left", "0");
            }
        }
    }

    return (
        <div className="gallery">
            <div className="gallery__wrapper" ref={galleryRef}>
                {aboutFigures
                    ? aboutFigures.map((figure, i) => (
                          <GalleryPhoto
                              key={figure.id}
                              id={`galleryPhoto${i}`}
                              onChange={changeValue}
                              name="gallery"
                              value={value}
                              figure={figure.src}
                          />
                      ))
                    : null}
            </div>
        </div>
    );
}

export default Gallery;
