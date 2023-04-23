import React from "react";
import { products, products__separator} from "./Products.module.scss";
import Skeleton from "../Skeleton/Skeleton";
// import MovingBg from "../MovingBg/MovingBg";
// import { mainBgs } from "../../utils/constants.js";


function Products({ base }) {
    return (
        <section className={products}>
            <ul>
                {base
                    ? Object.keys(base).map((key, i) => (
                          <li key={key} style={{ listStyle: "none" }}>
                              <Skeleton
                                  {...base[key]}
                                  number={i + 1}
                                  link={`/products/${key}`}
                              />
                              <div className={products__separator}></div>
                              {/* <MovingBg bgImage={mainBgs[i]} /> */}
                          </li>
                      ))
                    : null}
            </ul>
        </section>
    );
}

export default Products;
