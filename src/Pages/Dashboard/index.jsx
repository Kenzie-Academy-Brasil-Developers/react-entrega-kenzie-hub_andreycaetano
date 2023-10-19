import { Header } from "../../components/Header"
import { Infos } from "../../components/Infos"
import styles from "./styles.scss"

export const Dashboard = () => {
    return(
        <>
        <Header/>
        <main className="mainDashboard">
            <Infos/>
            <section>
                <div>
                <h3>Que pena! Estamos em desenvolvimento :&#8317;</h3>
                <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
                </div>
            </section>
        </main>
        </>
    )
}