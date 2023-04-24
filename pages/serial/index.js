import React from "react";
import { app } from "../../src/components/App/App.module.scss";

import { headerSlides, company } from "../../src/utils/constants";

import NavBack from "../../src/components/NavBack/NavBack.js";
import Header from "../../src/components/Header/Header";
import Branches from "../../src/components/Branches/Branches";
import Footer from "../../src/components/Footer/Footer";

export default function App() {
    return (
        <div className={app}>
            <NavBack
                hrefData={[
                    { name: "На главную", href: "/" },
                ]}
            />
            <Header
                anchorName="header"
                title="Готовые решения для разных отраслей промышленности"
                bgImages={headerSlides}
            />
            <Branches anchorName="branches" />
            <Footer isGrey={true} />
        </div>
    );
}
