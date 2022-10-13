// The navbar that shows up at the bottom of the page on mobile
import styles from "./MobileNav.module.css";
export default function MobileNav(){
    return (
        <nav className={styles.nav} aria-label="Category">
            <button className={styles.button}>PvE</button>
            <button className={styles.button}>Fractal</button>
            <button className={styles.button}>WvW</button>
        </nav>
    )
}