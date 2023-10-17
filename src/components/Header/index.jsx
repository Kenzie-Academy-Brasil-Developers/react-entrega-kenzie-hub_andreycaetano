import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import styles from "./styles.scss"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Header = ({ setUser }) => {
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