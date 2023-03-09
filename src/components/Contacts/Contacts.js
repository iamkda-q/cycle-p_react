import React from "react";
import "./Contacts.scss";

import MyMap from "../MyMap/MyMap";
import ContactsBanner from "../ContactsBanner/ContactsBanner";

const Contacts = ({ anchorName }) => {
    return (
        <section className="contacts" id={anchorName}>
            <MyMap />
            <ContactsBanner />
        </section>
    );
};

export default Contacts;
