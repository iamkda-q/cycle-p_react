import React, { useState, useEffect, useRef } from "react";
import { useFormWithValidation } from "../../utils/useForms";
import Input from "../Input/Input";

import "./PopupWithForm.scss";

function PopupWithForm({ isOpen, title, buttonText, onClose, handleSubmit }) {
    const { values, handleChange, errors, isValid, resetForm } =
        useFormWithValidation();

    const form = useRef();

    const [sendError, setSendError] = useState({
        isError: false,
        errorText:
            "Сервис временно не работает, свяжитесь с нами любым другим удобным способом",
    });
    const [isSending, setSending] = useState(false);
    const [sendSuccess, setSendSuccess] = useState(false);

    useEffect(() => {
        resetForm();
        setSendSuccess(false);
        setSendError({ ...sendError, isError: false });
    }, [isOpen]);

    async function handleSendSubmit(e) {
        setSending((isSending) => !isSending);
        const res = await handleSubmit(e, form.current);
        if (res) {
            setSendSuccess((sendSuccess) => !sendSuccess);
        } else {
            setSendError({ ...sendError, isError: true });
        }
        setSending((isSending) => !isSending);
    }

    return (
        <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
            <div className="popup__container popup__container_type_form">
                <form
                    className="popup__form"
                    ref={form}
                    name={`popup-form`}
                    noValidate
                    onSubmit={handleSendSubmit}
                >
                    <h2 className="popup__title">{title}</h2>
                    <fieldset className="popup__info">
                        <Input
                            name="userName"
                            type="text"
                            value={values.userName ?? ""}
                            onChange={handleChange}
                            {...errors.userName}
                            placeholder="Ваше имя"
                            validRules={{
                                maxLength: "45",
                                minLength: "2",
                                required: true,
                            }}
                        />
                        <Input
                            name="phone"
                            type="tel"
                            value={values.phone ?? ""}
                            onChange={handleChange}
                            {...errors.phone}
                            placeholder="Ваш номер телефона"
                            validRules={{
                                // maxLength: "16",
                                // minLength: "6",
                                required: false,
                            }}
                        />
                        <Input
                            name="email"
                            type="email"
                            value={values.email ?? ""}
                            onChange={handleChange}
                            {...errors.email}
                            placeholder="Ваша почта"
                            validRules={{
                                required: true,
                            }}
                        />
                        <div className="popup__send">
                            <button
                                type="submit"
                                className={`popup__send-button ${
                                    isValid && !isSending
                                        ? ""
                                        : "popup__send-button_disable"
                                }`}
                            >
                                {isSending ? "Отправляем..." : buttonText}
                            </button>
                            <span
                                className={`popup__message ${
                                    sendError.isError
                                        ? "popup__message_error"
                                        : sendSuccess
                                        ? "popup__message_success"
                                        : "popup__message_hidden"
                                }`}
                            >
                                {sendError.isError
                                    ? sendError.errorText
                                    : sendSuccess
                                    ? "Данные успешно отправлены. Мы свяжемся с вами в ближайшее время"
                                    : ""}
                            </span>
                        </div>
                    </fieldset>
                </form>
                <button
                    type="button"
                    className="popup__close-button"
                    aria-label
                    onClick={onClose}
                ></button>
            </div>
        </div>
    );
}

export default PopupWithForm;
