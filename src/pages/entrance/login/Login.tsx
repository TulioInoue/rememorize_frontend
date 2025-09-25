import style from "./Login.module.css";

import { Link, useNavigate, useOutletContext } from "react-router";

import Input from "../../../components/input/Input";

import { useState } from "react";
import axios from "axios";

interface AlertInterface {
    message: string
    type: "success" | "danger" | "alert"
    isActive: boolean
}

type OutletContext = React.Dispatch<React.SetStateAction<AlertInterface>>

export default function Login() {

    const navigate = useNavigate();
    const [formContent, setFormContent] = useState({
        email: "",
        password: "",
    })
    const setAlert = useOutletContext<OutletContext>()

    function handleFormChange(key: string, e: React.ChangeEvent<HTMLInputElement>) {
        setFormContent(element => ({
            ...element,
            [key]: e.target.value
        }))
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/users/login`, formContent
        ).then(
            response => {
                localStorage.setItem("token", response.data);
                navigate("../notebook/calendar")
            }
        ).catch(
            error => {
                console.log(error.response.data.detail);
                setAlert(
                    {
                        message: error.response.data.detail,
                        type: "alert",
                        isActive: true,
                    }
                )
            }
        )
    }
    
    return <main id = {style.login}>
        <section id = {style.login__header}>
            <div>
                <h2>welcome</h2>
            </div>
            <h3>login</h3>
        </section>
        <form id = {style.login__form} onSubmit={(e) => handleSubmit(e)}>
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

