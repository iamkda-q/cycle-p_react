import React from "react";

import { app } from "../../src/components/App/App.module.scss";
import Header from "../../src/components/Header/Header";
import Product from "../../src/components/Product/Product";
import Documentation from "../../src/components/Documentation/Documentation";
import TechnicalData from "../../src/components/TechnicalData/TechnicalData";
import NavBack from "../../src/components/NavBack/NavBack.js";
import Footer from "../../src/components/Footer/Footer";

import { getAllPostIds, getPostData } from "../../src/utils/routingFunctions";
import { headerSlides } from "../../src/utils/constants";

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
        <div className={app}>
            <NavBack />
            <Header
                anchorName="header"
                title={postData.name}
                subtitle={postData.shortD}
                page="products"
                bgImages={postData.headerBg}
            />
            <Product fullD={postData.fullD} img={postData.img.img} />
            {postData.parameters ? (
                <TechnicalData data={postData.parameters} isGrey={true} />
            ) : null}
            {postData.documents ? (
                <Documentation
                    data={postData.documents}
                    isGrey={postData.parameters ? false : true}
                />
            ) : null}
            <Footer
                isGrey={
                    (postData.parameters && postData.documents) ||
                    (!postData.parameters && !postData.documents)
                        ? true
                        : false
                }
            />
        </div>
    );
}
