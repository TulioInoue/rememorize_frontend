import style from "./Entrance.module.css";

import { Outlet, useLocation } from "react-router";
import { useState } from "react";

import Alert from "../../components/alert/Alert";

interface AlertInterface {
    message: string
    type: "success" | "danger" | "alert"
    isActive: boolean
}

export default function Entrance() {

    const location = useLocation()
    const [alert, setAlert] = useState<AlertInterface>({
        message: "",
        type: "success",
        isActive: false,
    })

    return <section id = {style.entrance} className = {location.pathname == "/login"
        ? style.entrance__login
        : style.entrance__register
    }>
        {alert.isActive
        ?<Alert
            setAlert = {setAlert}
            {...alert}
        />
        : null
        }
        <aside id = {style.entrance__aside} className = {location.pathname == "/login"
            ? style.entrance__aside_login
            : style.entrance__aside_register
        }></aside>
        <Outlet context = {setAlert}/>
    </section>

}

