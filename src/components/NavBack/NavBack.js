import React from "react";
import {
    navigation,
    navigation_sticky,
    navigation__container,
    navigation__grid,
    navigation__link
} from "../Navigation/Navigation.module.scss";
import Logo from "../Logo/Logo";
import Link from "next/link";

function NavBack() {
    return (
        <div
            className={`${navigation} ${navigation_sticky}`}
            id="navigation"
        >
            <nav className={navigation__container}>
                <ul className={navigation__grid}>
                    <li>
                        <Logo name={true}/>
                    </li>
                    <li>
                        <Link href="/" title="Назад на главную" className={navigation__link}>
                            Назад на главную
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBack;
