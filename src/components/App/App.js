import React, { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";

import emailjs from "@emailjs/browser";
import { mainSlides, timerBg, company, productsBase } from "../../utils/constants";

import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation.js";
import Products from "../Products/Products";
import Product from "../Product/Product";
import About from "../About/About";
import Partners from "../Partners/Partners";
import Contacts from "../Contacts/Contacts";
import Footer from "../Footer/Footer";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import Gallery from "../Gallery/Gallery";

import "./App.scss";
import Documentation from "../Documentation/Documentation";

function App() {
    const page = document.querySelector(".page"); // для запрета скролла при открытом попапе
    const [isOpen, setOpen] = useState(false);
    const [product, setProductInfo] = useState({});

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

    function Landing() {
        return (
            <>
                <Navigation />
                <Header
                    anchorName="header"
                    title={company.name}
                    subtitle={company.mission}
                />
                <Products anchorName="products" setProductInfo={setProductInfo}/>
                <About anchorName="about" />
                <Partners anchorName="partners" />
                <Contacts anchorName="contacts" openForm={openForm} />
                <Footer isGrey={true}/>
                <PopupWithForm
                    isOpen={isOpen}
                    onClose={closeForm}
                    title="Свяжитесь с нами"
                    buttonText="Отправить"
                    handleSubmit={sendEmail}
                />
            </>
        );
    }

    function ProductPage() {
        return (
            <>
                <Navigation />
                <Header
                    anchorName="header"
                    title={product.name}
                    subtitle={product.shortD}
                    page="products"
                />
                <Product /* name={product.name} shortD={product.shortD} img={product.img}  *//>
                <Documentation />
                <Footer />
            </>
        );
    }

    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/products" element={<ProductPage />} />
            </Routes>
        </div>
    );
}

export default App;
