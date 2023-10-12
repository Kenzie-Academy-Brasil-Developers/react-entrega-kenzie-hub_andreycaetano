import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import styles from "./styles.scss"

export const Header = ({setUser}) => {
    const navigate = useNavigate()

    const logout = () => {
        setUser([])
        localStorage.removeItem("@KenzieHub")
        navigate("/")
    }
    return (
        <header>
            <figure>
                <img src={logo} alt="KenzieHub" />
            </figure>
            <button onClick={() => logout()}>Sair</button>
        </header>
    )
}