import styles from "./AsteroidAction.module.css"

export const AsteroidAction = () => {
    return <div className={styles.container}>
        <div className={styles.status}>Оценка:</div>
        <div className={styles.danger}>Не опасен</div>
        <button className={styles.button}>На уничтожение</button>
    </div>
}