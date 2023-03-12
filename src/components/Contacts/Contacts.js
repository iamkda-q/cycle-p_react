import React from "react";
import "./Contacts.scss";

import MyMap from "../MyMap/MyMap";
import ContactsBanner from "../ContactsBanner/ContactsBanner";

const Contacts = ({ anchorName, openForm }) => {
    return (
        <section className="contacts" id={anchorName}>
            <MyMap />
            <ContactsBanner handleClick={openForm}/>
        </section>
    );
};

export default Contacts;
