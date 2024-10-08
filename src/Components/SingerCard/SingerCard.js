import styles from "./SingerCard.module.css";
import { Image } from "react-bootstrap";

export default function SingerCard({ singer }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.imageWrapper}>
                <Image fluid src={"uploads/portraits/" + singer.portraitFileName} />
            </div>
            <div className={styles.textWrapper}>
                <p className={styles.singerName}>{singer.name}</p>
                <p className={styles.singerPart}>{singer.part}</p>
            </div>
        </div>
    );



}