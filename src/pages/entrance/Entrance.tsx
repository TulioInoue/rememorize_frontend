import style from "./Entrance.module.css";

import { Outlet, useLocation } from "react-router";

export default function Entrance() {

    const location = useLocation()

    console.log(location)

    return <section id = {style.entrance} className = {location.pathname == "/login"
        ? style.entrance__login
        : style.entrance__register
    }>
        <aside id = {style.entrance__aside} className = {location.pathname == "/login"
            ? style.entrance__aside_login
            : style.entrance__aside_register
        }></aside>
        <Outlet/>
    </section>

}

