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

function NavBack({hrefData}) {
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
                    {hrefData ? hrefData.map((item, i) => (
                        <li key={i}>
                        <Link href={item.href} title={item.name} className={navigation__link}>
                            {item.name}
                        </Link>
                    </li>
                    )) : null}
                    
                </ul>
            </nav>
        </div>
    );
}

export default NavBack;
