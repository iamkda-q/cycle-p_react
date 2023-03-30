import React, { useState, useRef, useEffect } from "react";

import Header from "../../src/components/Header/Header";
import Product from "../../src/components/Product/Product";
import Documentation from "../../src/components/Documentation/Documentation";
import Navigation from "../../src/components/Navigation/Navigation.js";
import Footer from "../../src/components/Footer/Footer";

import { getAllPostIds, getPostData } from "../../src/utils/constants";

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export default function ProductsPage({ postData }) {
    return (
        <>
            <Navigation />
            <Header
                anchorName="header"
                title={postData.name}
                subtitle={postData.shortD}
                page="products"
            />
            <Product name={postData.name} shortD={postData.shortD} img={postData.img}
            />
            <Documentation />
            <Footer />
        </>
    );
}
