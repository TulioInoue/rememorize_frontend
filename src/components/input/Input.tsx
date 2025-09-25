import type React from "react";
import style from "./Input.module.css";

import { useState } from "react";

interface Input {
    label: string;
    placeholder: string;
    icon: string;
    type: 'text' | 'email' | 'password';
    is_active: boolean;
    message?: string
    on_change?: (element: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Input> = (
    {label, placeholder, icon, type, is_active, message, on_change}
) => {

    return <div className = {style.input}>
        <label htmlFor = {`label_${label}`}>{label}</label>
        <div className = {style.input__content}>
            <div className = {style.input__content_icon}>
                <i className = {icon}></i>
            </div>
            <input
                className = {style.input__content_area}
                type = {type}
                id = {`label_${label}`}
                placeholder = {placeholder}
                disabled = {!is_active}
                onChange = {(element) => on_change?.(element)}
            />
        </div>
        {message
            ?
            <div className = {style.input__message}>
                <div className = {style.input__message_icon}>
                    <i className = "fi fi-sr-exclamation"></i>
                </div>
                <span className = {style.input__message_text}>{message}</span>
            </div>
            :
            null
        }
    </div>

}

export default Input
