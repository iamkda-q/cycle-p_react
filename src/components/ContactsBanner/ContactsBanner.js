import React from "react";
import {
    banner,
    banner__title,
    banner__container,
    banner__part_address,
    banner__part,
    banner__part_email,
    banner__part_phone,
    banner__button,
} from "./ContactsBanner.module.scss";

const ContactsBanner = ({ handleClick }) => {
    return (
        <div className={banner}>
            <h2 className={banner__title}>Контакты</h2>
            <div className={banner__container}>
                <p
                    className={`${banner__part} ${banner__part_address}`}
                    title=""
                >
                    111396, г. Москва, ул. Фрязевская д.4 стр.3
                </p>
                <p className={`${banner__part} ${banner__part_email}`} title="">
                    info@cycle-p.ru
                </p>
                <p className={`${banner__part} ${banner__part_phone}`} title="">
                    <span className="numbers">+7-495-301-44-98</span>
                </p>
                <button className={banner__button} onClick={handleClick}>
                    Связаться с нами
                </button>
            </div>
        </div>
    );
};

export default ContactsBanner;
