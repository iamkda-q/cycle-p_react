import React, { useEffect, useState } from "react";
import { contacts } from "./Contacts.module.scss";

import MyMap from "../MyMap/MyMap";
import ContactsBanner from "../ContactsBanner/ContactsBanner";

const Contacts = ({ anchorName, openForm }) => {
    const [isMap, setMap] = useState(true);
    useEffect(() => {
        if (+document.documentElement.clientWidth > 700) {
            setMap(true);
        } else {
            setMap(false);
        }
    }, [])
    return (
        <section className={contacts} id={anchorName}>
            {isMap ? <MyMap /> : null}
            <ContactsBanner handleClick={openForm} />
        </section>
    );
};

export default Contacts;
