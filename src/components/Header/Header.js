import React, { useEffect, useState, useRef } from "react";
import "./Header.scss";
import Logo from "../Logo/Logo";
import HeaderLink from "./HeaderLink/HeaderLink";
import tran from "../../assets/images/transistor.png";
import { colors } from "../../utils/constants.js";

function Header() {
    const [coordinates, setCoordinates] = useState({});
    const headerRef = useRef();

    // function getYInfo() {
    //     const posY = window.scrollY;
    //     let activeLink;
    //     if (
    //         posY > document.getElementById("main").getBoundingClientRect().top
    //     ) {
    //         if (
    //             posY >
    //             document.getElementById("products").getBoundingClientRect().top
    //         ) {
    //             activeLink = document.querySelector("[href='#products']");
    //         } else {
    //             activeLink = document.querySelector("[href='#main']");
    //         }
    //         setCoordinates({
    //             width: activeLink.getBoundingClientRect().width,
    //             left: activeLink.getBoundingClientRect().left,
    //             top:
    //                 activeLink.getBoundingClientRect().top +
    //                 activeLink.getBoundingClientRect().height -
    //                 headerRef.current.getBoundingClientRect().top,
    //             borderColor: colors[Math.floor(Math.random() * colors.length)],
    //         });
    //     }
    // }

    useEffect(() => {
        function handleScroll() {
            const posY = window.scrollY;

            if (posY > headerRef.current.getBoundingClientRect().top) {
                headerRef.current.classList.add("header_sticky");
            } else {
                headerRef.current.classList.remove("header_sticky");
            }
            // getYInfo();
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // function handleMouseOver(e) {
    //     if (e.target.classList.contains("header__link")) {
    //         const mouseOverCoord = e.target.getBoundingClientRect();
    //         setCoordinates({
    //             width: mouseOverCoord.width,
    //             left: mouseOverCoord.left,
    //             top:
    //                 mouseOverCoord.top +
    //                 mouseOverCoord.height -
    //                 headerRef.current.getBoundingClientRect().top,
    //             borderColor: colors[Math.floor(Math.random() * colors.length)],
    //         });
    //     }
    // }

    // function handleMouseOut(e) {
    //     const posY = window.scrollY;
    //     const mouseOutCoord = e.target.getBoundingClientRect();
    //     setCoordinates({
    //         width: mouseOverCoord.width,
    //         left: mouseOverCoord.left,
    //         top:
    //             mouseOverCoord.top +
    //             mouseOverCoord.height -
    //             headerRef.current.getBoundingClientRect().top,
    //         borderColor: colors[Math.floor(Math.random() * colors.length)],
    //     });
    // }

    return (
        <header
            id="header"
            ref={headerRef}
            className="header"
            // onMouseOver={handleMouseOver}
            // onMouseOut={getYInfo}
        >
            <nav className="header__container">
                <ul className="header__grid">
                    {/*                     <li>
                        <img src={tran}style={{width: "50px", height:"50px", objectFit: "contain"}}/>
                    </li> */}
                    <li>
                        <Logo />
                    </li>
                    <HeaderLink
                        text="Главная"
                        title="main"
                        anchorName="main"
                        stickyHeader={headerRef}
                        currentCoordinates={coordinates}
                        handleMouse={setCoordinates}
                    />
                    <HeaderLink
                        text="Продукция"
                        title="products"
                        anchorName="products"
                        stickyHeader={headerRef}
                        currentCoordinates={coordinates}
                        handleMouse={setCoordinates}
                    />
                    <HeaderLink
                        text="О нас"
                        title="about"
                        anchorName="about"
                        stickyHeader={headerRef}
                        currentCoordinates={coordinates}
                        handleMouse={setCoordinates}
                    />
                    <HeaderLink
                        text="Партнеры"
                        title="partners"
                        anchorName="partners"
                        stickyHeader={headerRef}
                        currentCoordinates={coordinates}
                        handleMouse={setCoordinates}
                    />
                    <HeaderLink
                        text="Контакты"
                        title="contacts"
                        anchorName="contacts"
                        stickyHeader={headerRef}
                        currentCoordinates={coordinates}
                        handleMouse={setCoordinates}
                    />
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
