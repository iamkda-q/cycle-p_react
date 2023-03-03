import React, { useEffect, useState, useRef } from "react";
import "./Gallery.scss";
import "./Formaa";

import { backgrounds as aboutFigures } from "../../utils/constants.js";
import GalleryPhoto from "./Photo/GalleryPhoto";
import Formaa from "./Formaa";

function Gallery() {
    const [value, setValue] = useState(null);
    const galleryRef = useRef();

    useEffect(() => {
        setValue(galleryRef.current.firstElementChild.id);
    },[]);

    function changeValue(e) {
        setValue(e.target.id);
    }

    // const els = document.querySelectorAll("[type='radio']");
    // for (const el of els)
    //     el.addEventListener("input", (e) => reorder(e.target, els));
    // reorder(els[0], els);

    // function reorder(targetEl, els) {
    //     const nItems = els.length;
    //     let processedUncheck = 0;
    //     for (const el of els) {
    //         const containerEl = el.nextElementSibling;
    //         if (el === targetEl) {
    //             //checked radio
    //             containerEl.style.setProperty("--w", "100%");
    //             containerEl.style.setProperty("--l", "0");
    //         } else {
    //             //unchecked radios
    //             containerEl.style.setProperty("--w", `${100 / (nItems - 1)}%`);
    //             containerEl.style.setProperty(
    //                 "--l",
    //                 `${(processedUncheck * 100) / (nItems - 1)}%`
    //             );
    //             processedUncheck += 1;
    //         }
    //     }
    // }

    return (
        <div className="gallery">
            <div className="gallery__wrapper" ref={galleryRef}>
            {aboutFigures
                ? aboutFigures.map((figure, i, arr) => (
                        
                      <GalleryPhoto
                          id={`galleryPhoto${i}`}
                          name="gallery"
                          onChange={changeValue}
                          value={value}
                          figure={figure}
                          styles={{
                              left:
                                  value === `galleryPhoto${i}`
                                      ? 0
                                      : `${(100 / arr.length) * i}%`,
                              width:
                                  value === `galleryPhoto${i}`
                                      ? "100%"
                                      : `${100 / arr.length}%`,
                          }}
                      />
                  ))
                : null}
            </div>
        </div>
    );
}

export default Gallery;
