import React from "react";
import "./Products.scss";
import ProductBg from "../ProductBg/ProductBg";
import ProductMain from "../ProductMain/ProductMain";

import { productsBase, mainBgs } from "../../utils/constants.js";

function Products({ anchorName, setProductInfo}) {

    return (
        <section className="products" id={`${anchorName}`}>
            <ul>
                {productsBase
                    ? productsBase.map((product, i) => (
                          <li key={product.id}>
                              <ProductMain {...{...product}} number={i + 1} product={product} setProductInfo={setProductInfo}/>
                              <ProductBg bgImage={mainBgs[i]} />
                          </li>
                      ))
                    : null}
            </ul>
        </section>
    );
}

export default Products;
