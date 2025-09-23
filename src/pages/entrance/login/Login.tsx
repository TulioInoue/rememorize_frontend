import style from "./Login.module.css";

import { Link } from "react-router";

import Input from "../../../components/input/Input";

import { useState } from "react";

export default function Login() {

    const [formContent, setFormContent] = useState({
        email: "",
        password: "",
    })

    function handleFormChange(key: string, e: React.ChangeEvent<HTMLInputElement>) {
        setFormContent(element => ({
            ...element,
            [key]: e.target.value
        }))
    }
    
    return <main id = {style.login}>
        <section id = {style.login__header}>
            <div>
                <h2>welcome</h2>
            </div>
            <h3>login</h3>
        </section>
        <form id = {style.login__form} >
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
            <div id = {style.login__links}>
                <Link to="../register">Do not have an account?</Link>
            </div>
            <div id = {style.login__form_button}>
                <button type = "submit" className = "btn__secondary">login</button>
                <button type = "reset" className = "btn__outline" >reset</button>
            </div>
        </form>
    </main>


}

