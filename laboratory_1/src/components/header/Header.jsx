import styles from './Header.module.css';

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.topLine}>
                <div className={styles.title}>ARMAGGEDDON V</div>
                <div className={styles.nav}>
                    <div className={styles.boldText}>Астероиды</div>
                    <div className={styles.underlinedText}>Уничтожение</div>
                </div>
            </div>
            <div className={styles.description}>
                Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.
            </div>
            <div />
        </div>
    )
}