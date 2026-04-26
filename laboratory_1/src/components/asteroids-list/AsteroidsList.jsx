import { AsteroidCard } from "../asteroid-card/AsteroidCard"
import spaceImage from "../../assets/space.jpg";
import styles from "./AsteroidsList.module.css";

export const AsteroidsList = () => {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0' }}>
                <div>
                    <input type="checkbox" /> Показать только опасные
                </div>
                <div>
                    Расстояние <b>в километрах</b>, <u>в дистанциях до луны</u>
                </div>
            </div>

            <div className={styles.spaceImage} style={{ backgroundImage: `url(${spaceImage})` }} />

            {new Array(4).fill("Asteroids").map((_, index) => (
                <AsteroidCard key={index} />
            ))}
        </div>
    )
}