import { useForm } from "react-hook-form"
import { Form } from "../Form";
import { Input } from "../Input";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema } from "../../scripts/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";
import styles from "./styles.scss"



export const LoginForm = ({setUser, user}) => {
    const navigate = useNavigate()
    
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(loginSchema)
    })

    const requestLogin = async (formData) => {
        try {
            const {data} = await api.post("/sessions", formData)
            setUser(data)
            localStorage.setItem("@KenzieHub", data.token)    
            navigate("/dashboard")
               
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
            <Form className="formLogin" onSubmit={handleSubmit(requestLogin)
            }>
                <h3>Login</h3>
                <Input id="email" label="Email" placeholder="Digite aqui seu email" {...register("email")}/>
                {errors.email ? <p>{errors.email.message}</p> : null}
                <Input id="password" label="Senha" placeholder="Digite aqui sua senha" {...register("password")}/>
                {errors.password ? <p>{errors.password.message}</p> : null}
                <button type="submit" className="buttonLogin">Entrar</button>
                <span>Ainda não possui uma conta?</span>
                <Link to={"/register"}>
                    <button className="buttonRegister">Cadastre-se</button>
                </Link>
            </Form>
        </>
    )
}