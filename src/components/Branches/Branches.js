import React from "react";
import { branches } from "./Branches.module.scss";
import MovingBg from "../MovingBg/MovingBg";
import Skeleton from "../Skeleton/Skeleton";

import { branchesBase } from "../../utils/productsBase/productBase";

function Branches({ anchorName }) {
    return (
        <section className={branches} id={`${anchorName}`}>
            <ul>
                {branchesBase
                    ? Object.keys(branchesBase).map((key, i) => (
                          <li key={key} style={{ listStyle: "none" }}>
                              <Skeleton
                                  {...branchesBase[key]}
                                  number={i + 1}
                                  link={`/serial/${key}`}
                              />
                              <MovingBg bgImage={branchesBase[key]["bg"]} />
                          </li>
                      ))
                    : null}
            </ul>
        </section>
    );
}

export default Branches;
