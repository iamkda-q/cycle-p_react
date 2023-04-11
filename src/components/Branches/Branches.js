import React from "react";
import { branches } from "./Branches.module.scss";
import MovingBg from "../MovingBg/MovingBg";
import IndustryBranch from "../IndustryBranch/IndustryBranch";

import { productsBase, mainBgs } from "../../utils/constants.js";

function Branches({ anchorName }) {
    return (
        <section className={branches} id={`${anchorName}`}>
            <ul>
                {productsBase
                    ? Object.keys(productsBase).map((key, i) => (
                          <li key={key} style={{listStyle: "none"}}>
                              <IndustryBranch
                                  {...productsBase[key]}
                                  number={i + 1}
                                  link={key}
                              />
                              <MovingBg bgImage={mainBgs[i]} />
                          </li>
                      ))
                    : null}
            </ul>
        </section>
    );
}

export default Branches;
