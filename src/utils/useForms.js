import React, { useState } from "react";

//хук управления формой
export function useForm() {
    const [values, setValues] = useState({});

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return { values, handleChange, setValues };
}

//хук управления формой и валидации формы
export function useFormWithValidation() {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const handleChange = (e) => {
        const target = e.target;
        setValues({ ...values, [target.name]: target.value });
        setErrors({
            ...errors,
            [target.name]: {
                isError: !target.checkValidity(),
                errorText: target.checkValidity()
                    ? errors[target.name]?.errorText
                    : target.validationMessage,
            },
        });
        setIsValid(target.closest("form").checkValidity());
    };

    const resetForm = () => {
        setValues({});
        setErrors({});
        setIsValid(false);
    };

    return { values, handleChange, errors, isValid, resetForm };
}
