import React, { useEffect, useState, useRef } from "react";
import { menu } from "../../utils/constants";
import {
    navigation,
    navigation_sticky,
    navigation__container,
    navigation__grid,
} from "./Navigation.module.scss";
import Logo from "../Logo/Logo";
import NavigationLink from "./Link/NavigationLink";

function Navigation() {
    const navRef = useRef();
    const [currentAnchor, setAnchor] = useState(null);
    // const [isFontLoad, setFontLoad] = useState(false);

    // useEffect(() => {
    //     document.fonts.ready.then(() => {
    //         setFontLoad(true);
    //     });
    // }, []);

    useEffect(() => {
        const navHeight = navRef.current.getBoundingClientRect().height;
        window.scrollBy({
            top:
                (currentAnchor ? currentAnchor : navHeight) -
                navRef.current.getBoundingClientRect().height,
            behavior: "smooth",
        });
    }, [currentAnchor]);

    return (
        <div
            className={`${navigation} ${navigation_sticky}`}
            id="navigation"
            ref={navRef}
        >
            <nav className={navigation__container}>
                <ul className={navigation__grid}>
                    <li>
                        <Logo name={true} />
                    </li>
                    {menu
                        ? menu.map((menuItem) => (
                              <li key={menuItem.id}>
                                  <NavigationLink
                                      {...menuItem}
                                      title={menuItem.anchorName}
                                      stickyNavigation={navRef}
                                      setAnchor={setAnchor}
                                      link={"/"}
                                  />

                                  {}
                              </li>
                          ))
                        : null}
                </ul>
            </nav>
            {/* <span
                className="navigation__under"
                style={{
                    transform: "none",
                    ...coordinates,
                }}
            ></span> */}
        </div>
    );
}

export default Navigation;
