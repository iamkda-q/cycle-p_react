import React, { useState } from "react";
import "./Input.scss";

function Input({ value, label, type, onChange, name, isError, errorText, placeholder, validRules}) {
    return (
        <div className="input" >
            <label className="input__label">{label}</label>
            <input
                type={type}
                className={`input__input ${isError ? "input__input_error" : ""}`}
                autoComplete="off"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                name={name}
                {...validRules}
            />
            <span className={`input__error ${isError ? "": "input__error_hidden"}`}>{errorText}</span>
        </div>
    );
}

export default Input;