import React from "react";

function HeaderLink({ text, title }) {
    return (
        <a
            href="#production"
            title={title}
            className={`header__link`}
        >
            {text}
        </a>
    );
}

export default HeaderLink;
