import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import Products from "../Products/Products";
import About from "../About/About";
import Partners from "../Partners/Partners";
import Contacts from "../Contacts/Contacts";
import Footer from "../Footer/Footer";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

import "./App.scss";

function App() {
    const page = document.querySelector(".page"); // для запрета скролла при открытом попапе
    const [isOpen, setOpen] = useState(false);

    function openForm(e) {
        e.preventDefault();
        page.style.overflow = `hidden`;
        page.style.paddingRight = `17px`;
        setOpen(true);
    }

    function closeForm() {
        page.style.overflow = `auto`;
        page.style.paddingRight = `0`;
        setOpen(false);
    }

    const sendEmail = async (e, form) => {
        e.preventDefault();
        try {
            const res = await emailjs.sendForm('service_kolizey', 'template_6rovuqj', form, "t16K-r8rptGFEDW5p");
            if (res.status === 200) {
                return true
            } else {
                Promise.reject(res)
            }
        } catch(err) {
            console.log(err.text)
            return false
        }       
      };

    return (
        <div className="app">
            <Header />
            <Slider anchorName="main" />
            <Products anchorName="products" />
            <About anchorName="about" />
            <Partners anchorName="partners"/>
            <Contacts anchorName="contacts" openForm={openForm} />
            <Footer />
            <PopupWithForm
                isOpen={isOpen}
                onClose={closeForm}
                title="Свяжитесь с нами"
                buttonText="Отправить"
                handleSubmit={sendEmail}
            />
        </div>
    );
}

export default App;
