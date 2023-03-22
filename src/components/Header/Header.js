import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { menu } from "../../utils/constants";
import "./Header.scss";
import Logo from "../Logo/Logo";
import HeaderLink from "./HeaderLink/HeaderLink";

function Header() {
    const [coordinates, setCoordinates] = useState({});
    const headerRef = useRef();
    const [isActive, setActive] = useState(false);
    const [isFontLoad, setFontLoad] = useState(false);

    useEffect(() => {
        document.fonts.ready.then(() => {
            setFontLoad(true);
        });
    }, []);

    /* Липкий header при скролле */
    useEffect(() => {
        function handleScroll() {
            const posY = window.scrollY;

            if (posY > headerRef.current.getBoundingClientRect().top) {
                headerRef.current.classList.add("header_sticky");
            } else {
                headerRef.current.classList.remove("header_sticky");
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header id="header" ref={headerRef} className="header">
            <nav className="header__container">
                <ul className="header__grid">
                    <li>
                        <Logo />
                    </li>
                    {menu
                        ? menu.map((menuItem, i) => (
                              <li key={menuItem.id}>
                                  <HeaderLink
                                      {...menuItem}
                                      title={menuItem.anchorName}
                                      stickyHeader={headerRef}
                                      active={isActive}
                                      setActive={setActive}
                                      handleMouse={setCoordinates}
                                      isExtreme={
                                          i === 0
                                              ? "first"
                                              : i === menu.length - 1
                                              ? "last"
                                              : undefined
                                      }
                                      isFontLoad={isFontLoad}
                                  />

                                  {}
                              </li>
                          ))
                        : null}
                </ul>
            </nav>
            <span
                className="header__under"
                style={{
                    transform: "none",
                    ...coordinates,
                }}
            ></span>
        </header>
    );
}

export default Header;
