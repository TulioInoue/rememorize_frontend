import axios from "axios"
import { redirect } from "react-router";

const getUserData = () => {

    const user = axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/users/user`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
    ).then(
        response => console.log(response)
    ).catch(
        _ => redirect("../../login")
    )
    console.log(user)
    return user;
}

export { getUserData }

