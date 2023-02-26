import React from "react";
import "./Products.scss";
import ProductBg from "../ProductBg/ProductBg";
import Product from "../Product/Product";

import { productsBase, backgrounds } from "../../utils/constants.js";
import bgProductOne from "../../assets/images/bg1.jpg";
import bgProductSec from "../../assets/images/bg2.jpg";

function Products({ anchorName }) {
    return (
        <section className="products" id={`${anchorName}`}>
            <ul>
                {productsBase
                    ? productsBase.map((product, i) => (
                          <li key={product.id}>
                              <Product {...product} number={i + 1} />
                              <ProductBg bgImage={backgrounds[i]} />
                          </li>
                      ))
                    : null}
            </ul>
        </section>
    );
}

export default Products;
