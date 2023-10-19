import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api"
import {toast} from "react-toastify"

export const LoginContext = createContext({})

export const LoginProvider = ({children}) => {
    const navigate = useNavigate()

    const [user, setUser] = useState({})

    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem("@KenzieHub")
            if(token){
                try {
                    const {data} = await api.get("/profile", {
                        headers: {
                            Authorization: `Barear ${token}`
                        }
                    })
                    console.log(data)
                    setUser(data)
                    navigate("/dashboard")
                } catch (error) {
                    console.log(error)
                    localStorage.removeItem("@KenzieHub")
                }
            }
        }
        loadUser()
    }, [])

    const requestLogin = async (formData) => {
        try {
            const {data} = await api.post("/sessions", formData)
            setUser(data.user)
            localStorage.setItem("@KenzieHub", data.token)
            navigate("/dashboard")
        } catch (error) {
            console.log(error)
        }
    }

    const userRegister = async (formData) => {
        try {
            const {data} = await api.post("/users", formData)
            toast.success("Conta criada com sucesso!")
            setTimeout(() => {
                navigate("/")
            }, 3*1000);
        } catch (error) {
            console.log(error)
            toast.error("Ops! Algo deu errado")
        }
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem("@KenzieHub")
        navigate("/")
    }

    return(
        <LoginContext.Provider value={{user, setUser, requestLogin, userRegister, logout}}>
            {children}
        </LoginContext.Provider>
    )
}