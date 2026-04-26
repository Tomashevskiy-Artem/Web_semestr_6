import styles from "./AsteroidsCard.module.css"
import { AsteroidData } from "./AsteroidData";
import { AsteroidAction } from "./AsteroidAction";
import { AsteroidPict } from "./AsteroidPict";

export const AsteroidCard = () => {
    return <div className={styles.container}>
            <AsteroidPict />
            <AsteroidData/>
            <AsteroidAction />
        </div>
}