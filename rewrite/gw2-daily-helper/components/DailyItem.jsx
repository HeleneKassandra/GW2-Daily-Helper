/* Clickable card that is used to display the daily */
import styles from "../styles/DailyItem.module.css";
import Image from 'next/future/image'

export default function DailyItem({name}){
    return(
        <button className={styles.button} onClick={() => {}}>
            <span className={styles.span}>
                <Image className={styles.image} src="/img/Daily_Achievement.png" aria-hidden="true" layout="fixed" alt="The achievement icon from GW2" height="30" width="30"/>
                {name}
            </span>
        </button>
    )
}