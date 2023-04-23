import React from "react";

import { app } from "../../src/components/App/App.module.scss";
import Header from "../../src/components/Header/Header";
import Products from "../../src/components/Products/Products";
import NavBack from "../../src/components/NavBack/NavBack.js";
import Footer from "../../src/components/Footer/Footer";

import {
    getSerialIds,
    getSerialPostData,
} from "../../src/utils/routingFunctions";

export async function getStaticPaths() {
    const paths = getSerialIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = getSerialPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export default function SerailPage({ postData }) {
    return (
        <div className={app}>
            <NavBack />
            <Header
                anchorName="header"
                title={postData.name}
                // subtitle={postData.shortD}
                page="serial"
                bgImages={postData.headerBg}
            />
            <Products base={postData.products} />
            <Footer />
        </div>
    );
}
