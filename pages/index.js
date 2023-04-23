import React, { useState, useRef, useEffect } from "react";
import { YMaps } from "@pbe/react-yandex-maps";
import emailjs from "@emailjs/browser";
import { app } from "../src/components/App/App.module.scss";

import { headerSlides, company } from "../src/utils/constants";

import Header from "../src/components/Header/Header";
import Navigation from "../src/components/Navigation/Navigation.js";
import Branches from "../src/components/Branches/Branches";
import About from "../src/components/About/About";
import Partners from "../src/components/Partners/Partners";
import Contacts from "../src/components/Contacts/Contacts";
import Footer from "../src/components/Footer/Footer";
import PopupWithForm from "../src/components/PopupWithForm/PopupWithForm";

export default function App() {
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        const page = document.querySelector("body"); // для запрета скролла при открытом попапе
        if (isOpen) {
            page.style.overflow = `hidden`;
            page.style.paddingRight = `17px`;
        } else {
            page.style.overflow = `auto`;
            page.style.paddingRight = `0`;
        }
    }, [isOpen]);

    function openForm(e) {
        e.preventDefault();
        setOpen(true);
    }

    function closeForm() {
        setOpen(false);
    }

    const sendEmail = async (e, form) => {
        e.preventDefault();
        try {
            const res = await emailjs.sendForm(
                "service_kolizey",
                "template_6rovuqj",
                form,
                "t16K-r8rptGFEDW5p"
            );
            if (res.status === 200) {
                return true;
            } else {
                Promise.reject(res);
            }
        } catch (err) {
            console.log(err.text);
            return false;
        }
    };

    const [companyName, setCompanyName] = useState(company.name);
    useEffect(() => {
        if (document.documentElement.clientWidth > 500) {
            setCompanyName(company.name);
        } else {
            setCompanyName(company.shortName);
        }
    }, []);

    return (
        <YMaps /* query={{
            load: "package.full",
          }} */
        >
            <div className={app}>
                <Navigation />
                <Header
                    anchorName="header"
                    title={companyName}
                    subtitle={company.mission}
                    bgImages={headerSlides}
                />
                <Branches anchorName="branches" />
                <About anchorName="about" />
                <Partners anchorName="partners" />
                <Contacts anchorName="contacts" openForm={openForm} />
                <Footer isGrey={true} />
                <PopupWithForm
                    isOpen={isOpen}
                    onClose={closeForm}
                    title="Свяжитесь с нами"
                    buttonText="Отправить"
                    handleSubmit={sendEmail}
                />
            </div>
        </YMaps>
    );
}
