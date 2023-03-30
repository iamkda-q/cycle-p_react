import React, { useRef } from "react";
import { navigation__link } from "../Navigation.module.scss";

function NavigationLink({ text, title, anchorName, setAnchor, link }) {
    const navigationLinkRef = useRef(null);

    /* Получение координат якоря */
    function getCoordinates() {
        const anchorTarget = document.getElementById(anchorName)
            ? document.getElementById(anchorName)
            : null;
        const { top: topAnchor } = anchorTarget
            ? anchorTarget.getBoundingClientRect()
            : { top: 0 };
        return topAnchor;
    }

    // useEffect(() => {
    //     setAnchorTarget(document.getElementById(anchorName));
    // }, [anchorName]);

    /*     useEffect(() => { 
        const [topAnchor] = getCoordinates();
        setAnchor(topAnchor);
    }, [pathname]); */

    const handleClick = (e) => {
        e.preventDefault();
        const topAnchor = getCoordinates();
        setAnchor(topAnchor);
    };

    return (
        <a
            ref={navigationLinkRef}
            href={`#${anchorName}`}
            title={title}
            className={navigation__link}
            onClick={handleClick}
        >
            {text}
        </a>
    );
}

export default React.memo(NavigationLink);
