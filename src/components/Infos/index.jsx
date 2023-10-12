import styles from "./styles.scss"

export const Infos = ({user}) => {
    return (
        <div className="divInfo">
            <h3>Olá, {user.user.name}</h3>
            <span>{user.user.course_module}</span>
        </div>
    )
}