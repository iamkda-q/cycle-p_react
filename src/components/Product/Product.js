import React from "react";
import productStyles, { product__description} from "./Product.module.scss";
import Section from "../Section/Section";
import Gallery from "../Gallery/Gallery";
import Image from "next/image";

function Product({ name, shortD, fullD, img, product }) {
    return (
        <Section title="О преобразователе" isHiddenOvf={true}>
            <div className={productStyles.product}>
                <div>
                    {fullD && fullD.length!=0 ? fullD.map(article => (<h3 className={product__description}>{article}</h3>)) : "Информация обновляется"}

                </div>
                <Gallery />
            </div>
        </Section>
    );
}

export default Product;
