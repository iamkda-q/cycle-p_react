import React from "react";
import { products } from "./Products.module.scss";
import ProductBg from "../ProductBg/ProductBg";
import ProductMain from "../ProductMain/ProductMain";

import { productsBase, mainBgs } from "../../utils/constants.js";

function Products({ anchorName }) {
    return (
        <section className={products} id={`${anchorName}`}>
            <ul>
                {productsBase
                    ? Object.keys(productsBase).map((key, i) => (
                          <li key={key} style={{listStyle: "none"}}>
                              <ProductMain
                                  {...productsBase[key]}
                                  number={i + 1}
                                  link={key}
                              />
                              <ProductBg bgImage={mainBgs[i]} />
                          </li>
                      ))
                    : null}
            </ul>
        </section>
    );
}

export default Products;
