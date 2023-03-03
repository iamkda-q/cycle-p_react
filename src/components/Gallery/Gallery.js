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
