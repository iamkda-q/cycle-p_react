import React from "react";
import { app } from "../../src/components/App/App.module.scss";

import { headerSlides, company } from "../../src/utils/constants";

import Header from "../../src/components/Header/Header";
import Branches from "../../src/components/Branches/Branches";
import Footer from "../../src/components/Footer/Footer";

export default function App() {
    return (
        <div className={app}>
            <Header
                anchorName="header"
                title="Серийная продукция"
                subtitle={company.mission}
                bgImages={headerSlides}
            />
            <Branches anchorName="branches" />
            <Footer isGrey={true} />
        </div>
    );
}
