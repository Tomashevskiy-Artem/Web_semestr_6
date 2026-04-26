import styles from "./AsteroidData.module.css"

export const AsteroidData = () => {
    return <div className={styles.container}>
                <div className={styles.name}>2021 FQ</div>
                <div className={styles.details}> 
                    <div className={styles.detailRow}>
                        <div>Дата</div>
                        <div className={styles.dots}></div>
                        <div>12 сентября 2021</div>
                    </div>
                    <div className={styles.detailRow}>
                        <div>Расстояние</div>
                        <div className={styles.dots}></div>
                        <div>7 235 024 км</div>
                    </div>
                    <div className={styles.detailRow}>
                        <div>Размер</div>
                        <div className={styles.dots}></div>
                        <div>85 м</div>
                    </div>
                </div>
            </div>
}
