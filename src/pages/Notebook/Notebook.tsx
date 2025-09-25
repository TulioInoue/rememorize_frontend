import style from "./Notebook.module.css";

import { Outlet } from "react-router";

import Header from "../../../layout/header/Header.tsx";
import Navbar from "../../../layout/navbar/Navbar.tsx";

export default function Notebook() {

    return <section id = {style.notebook}>
        <Navbar/>
        <main>
            <Header/>
            <Outlet/>
        </main>
    </section>
}






