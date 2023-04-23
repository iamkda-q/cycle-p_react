import React from "react";
import productStyles, { product__description, product__img } from "./Product.module.scss";
import Section from "../Section/Section";
import Image from "next/image";

function Product({ fullD, img }) {
    return (
        <Section title="О преобразователе" isHiddenOvf={true}>
            <div className={productStyles.product}>
                <div>
                    {fullD && fullD.length != 0
                        ? fullD.map((article, i) => (
                              <h3 key={i} className={product__description}>
                                  {article}
                              </h3>
                          ))
                        : "Информация обновляется"}
                </div>
                <Image className={product__img} src={img} alt="Фото преобразователя"/>
            </div>
        </Section>
    );
}

export default Product;
