import asteroidImage from "../../assets/asteroid-big.png";
import dinoImage from "../../assets/dino.png";
import styles from "./AsteroidPict.module.css";

export const AsteroidPict = () => {
    return <div className={styles.container} style={{ backgroundImage: `url(${asteroidImage})`}}>
            <div className={styles.dino} style={{ backgroundImage: `url(${dinoImage})` }}> </div>
         </div>
}