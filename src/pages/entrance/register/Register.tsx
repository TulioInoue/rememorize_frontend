import style from "./register.module.css";

import { Link } from "react-router";

import Input from "../../../components/input/Input";

import { useState } from "react";

export default function Register() {

    const [formContent, setFormContent] = useState({
        email: "",
        password: "",
        confirmedPassword: "",
    })

    function handleFormChange(key: string, e: React.ChangeEvent<HTMLInputElement>) {
        setFormContent(element => ({
            ...element,
            [key]: e.target.value
        }))
    }
    
    return <main id = {style.register}>
        <section id = {style.register__header}>
            <div>
                <h2>join us</h2>
            </div>
            <h3>register</h3>
        </section>
        <form id = {style.register__form} >
            <Input
                label = "email:"
                placeholder = "user@email.com"
                icon = "fi fi-sr-envelope"
                is_active = {true}
                type = "email"
                on_change = {(e) => handleFormChange("email", e)}
            />
            <Input
                label = "password:"
                placeholder = "**********"
                is_active = {true}
                icon = "fi fi-sr-lock"
                type = "password"
                on_change = {(element) => handleFormChange("password", element)}
            />
            <Input
                label = "confirm your password:"
                placeholder = "**********"
                is_active = {true}
                icon = "fi fi-sr-lock"
                type = "password"
                on_change = {(element) => handleFormChange("confirmedPassword", element)}
            />
            <div id = {style.register__links}>
                <Link to="../login">Already have an account?</Link>
            </div>
            <div id = {style.register__form_button}>
                <button type = "submit" className = "btn__secondary">create</button>
                <button type = "reset" className = "btn__outline" >reset</button>
            </div>
        </form>
    </main>


}

