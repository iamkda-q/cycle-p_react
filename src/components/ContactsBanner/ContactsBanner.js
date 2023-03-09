import React from "react";
import "./ContactsBanner.scss";

const ContactsBanner = () => {
    return (
        <div className="banner">
            <h2 className="banner__title">Контакты</h2>
            <p className="banner__part banner__part_address" title="">
                111396, г. Москва, ул. Фрязевская д.4 стр.3
            </p>
            <p className="banner__part banner__part_email" title="">
                info@cycle-p.ru
            </p>
            <p className="banner__part banner__part_phone" title="">
                <span className="numbers">+7-495-301-44-98</span>
            </p>
                    <button className="banner__button" >Связаться с нами</button>

        </div>
    );
};

export default ContactsBanner;