import style from "./Alert.module.css"

import { useEffect } from "react"

interface Alert {
    message: string
    type: "success" | "danger" | "alert"
    isActive: boolean
    setAlert: React.Dispatch<React.SetStateAction<{
        message: string
        type: "success" | "danger" | "alert"
        isActive: boolean
    }>>
}

const Alert: React.FC<Alert> = ({message, type, isActive, setAlert}) => {

    useEffect(() => {
        setTimeout(() => setAlert({
            message: "",
            type: "success",
            isActive: false,
        }), 3000)
    }, [isActive, setAlert])

    return <dialog id = {style.alert}>
        <div id = {style.alert__icon}>
            {
                type === "success"
                ? <i className = "fi fi-ss-check-circle"></i>
                : type === "alert"
                    ? <i className = "fi fi-ss-exclamation"></i>
                    : <i className = "fi fi-ss-times-hexagon"></i>
            }
        </div>
        <div id = {style.alert__content}>
            <p>{message}</p>
        </div>
    </dialog>

}

export default Alert
