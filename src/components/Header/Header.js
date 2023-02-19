import React, { useEffect, useState, useRef } from "react";
import "./Header.scss";
import Logo from "../Logo/Logo";
import HeaderLink from "./HeaderLink/HeaderLink";
import { colors } from "../../utils/constants.js";

function Header() {
    const [coordinates, setCoordinates] = useState({});
    const headerRef = useRef();

    useEffect(() => {

        function handleScroll() {
            // const header = document.querySelector(".header");
            if (window.scrollY > headerRef.current.getBoundingClientRect().top) {
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

    function getCoordinates(e) {
        if (e.target.classList.contains("header__link")) {
            setCoordinates({
                width: e.target.getBoundingClientRect().width,
                left: e.target.getBoundingClientRect().left,
                top:
                    e.target.getBoundingClientRect().top +
                    e.target.getBoundingClientRect().height -
                    e.currentTarget.getBoundingClientRect().top,
                borderColor: colors[Math.floor(Math.random() * colors.length)],
            });
        }
    }

    return (
        <header
            id="header"
            ref={headerRef}
            className="header"
            onMouseOver={getCoordinates}
        >
            <nav className="header__container">
                <ul className="header__grid">
                    <li>
                        <Logo />
                    </li>
                    <li>
                        <HeaderLink text="Продукция" title="products" />
                    </li>
                    <li>
                        <HeaderLink text="Новости" title="news" />
                    </li>
                    <li>
                        <HeaderLink text="Партнеры" title="partners" />
                    </li>
                    <li>
                        <HeaderLink text="Контакты" title="contacts" />
                    </li>
                    <li>
                        <HeaderLink text="О нас" title="about us" />
                    </li>
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
