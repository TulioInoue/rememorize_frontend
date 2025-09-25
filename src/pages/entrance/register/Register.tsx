import style from "./register.module.css";

import { Link, useOutletContext } from "react-router";

import Input from "../../../components/input/Input";

import { useState } from "react";
import axios from "axios";

interface AlertInterface {
    message: string
    type: "success" | "danger" | "alert"
    isActive: boolean
}

type OutletContext = React.Dispatch<React.SetStateAction<AlertInterface>>

export default function Register() {

    const setAlert = useOutletContext<OutletContext>();
    const [formContent, setFormContent] = useState({
        email: "",
        password: "",
        confirmedPassword: "",
    })

    const [passwordAlert, setPasswordAlert] = useState("")

    function handleFormChange(key: string, e: React.ChangeEvent<HTMLInputElement>) {
        setFormContent(element => ({
            ...element,
            [key]: e.target.value
        }))
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("event:", e);
        console.log("form:", formContent);

        if (formContent.confirmedPassword !== formContent.password) {
            setPasswordAlert("passwords should match.");
            return;
        }
        else {
            setPasswordAlert("");
            console.log(`${import.meta.env.VITE_BACKEND_URL}/users/create`)
            axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/users/create`, formContent
            ).then(
                response => {
                    console.log(response);
                    setAlert({
                        message: response.data.message,
                        type: "success",
                        isActive: true,
                    })
                }
            ).catch(
                error => {
                    console.log(error.response.data.detail);
                    setAlert({
                        message: error.response.data.detail,
                        type: "alert",
                        isActive: true,
                    });
                }
            )
        }
        
    }
    
    return <main id = {style.register}>
        <section id = {style.register__header}>
            <div>
                <h2>join us</h2>
            </div>
            <h3>register</h3>
        </section>
        <form id = {style.register__form} onSubmit={(e) => handleSubmit(e)}>
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
                message = {passwordAlert}
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

