import React, { useRef, useState, useEffect } from "react";
import { colors } from "../../../utils/constants.js";

function HeaderLink({
    text,
    title,
    anchorName,
    active,
    stickyHeader,
    currentCoordinates,
    handleMouse,
}) {
    const [anchorTarget, setAnchorTarget] = useState(null);
    
    const [prevCoordinates, setPrevCoordinates] = useState(null);
    const headerLinkRef = useRef();

    useEffect(() => {
        setAnchorTarget(document.getElementById(anchorName));
    }, [anchorName]);

    useEffect(() => {
        function handleScroll() {
            const { top, bottom } = anchorTarget ? anchorTarget.getBoundingClientRect() : document.getElementById(anchorName).getBoundingClientRect();
            if (
                bottom > stickyHeader.current.getBoundingClientRect().height &&
                top <= stickyHeader.current.getBoundingClientRect().height
            ) {
                const rect = headerLinkRef.current.getBoundingClientRect();
                handleMouse({
                    width: rect.width,
                    left: rect.left,
                    top:
                        rect.top +
                        rect.height -
                        stickyHeader.current.getBoundingClientRect().top,
                    borderColor: colors[Math.floor(Math.random() * colors.length)],
                });
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClick = (event) => {
        event.preventDefault();
        event.target.classList.add("header__link_active");
        const { top } = anchorTarget.getBoundingClientRect();
        window.scrollBy({
            top:
                top -
                (stickyHeader
                    ? stickyHeader.current.getBoundingClientRect().height
                    : 0),
            behavior: "smooth",
        });
    };

    function handleMouseOver(e) {
        setPrevCoordinates(currentCoordinates);
        const rect = e.target.getBoundingClientRect();
        handleMouse({
            width: rect.width,
            left: rect.left,
            top:
                rect.top +
                rect.height -
                stickyHeader.current.getBoundingClientRect().top,
            borderColor: colors[Math.floor(Math.random() * colors.length)],
        });
    }

    function handleMouseOut(e) {
        if (e.target.classList.contains("header__link_active")) {
            e.target.classList.remove("header__link_active");
            return;
        }
        const { top, bottom } = anchorTarget.getBoundingClientRect();
        if (
            bottom > stickyHeader.current.getBoundingClientRect().height &&
            top <= stickyHeader.current.getBoundingClientRect().height
        ) {
            const rect = e.target.getBoundingClientRect();
            handleMouse({
                width: rect.width,
                left: rect.left,
                top:
                    rect.top +
                    rect.height -
                    stickyHeader.current.getBoundingClientRect().top,
                borderColor: colors[Math.floor(Math.random() * colors.length)],
            });
        } else {
            handleMouse(prevCoordinates);
        }
    }

    return (
        <li>
            <a
                ref={headerLinkRef}
                href={`#${anchorName}`}
                title={title}
                className={`header__link`}
                onClick={handleClick}
                // onMouseOver={handleMouseOver}
                // onMouseOut={handleMouseOut}
            >
                {text}
            </a>
        </li>
    );
}

export default HeaderLink;
