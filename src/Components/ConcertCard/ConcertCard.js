import styles from "./ConcertCard.module.css";
import { Image } from "react-bootstrap";

export default function ConcertCard({ concert }) {
  return (
    <a href={concert.link} target="_blank">
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <Image fluid src={process.env.PUBLIC_URL + "/assets/" + concert.imageFileName} />
        </div>
        <div className={styles.textWrapper}>
          <p className={styles.concertTitle}>{concert.title}</p>
          <p className={styles.details}>{concert.time}</p>
          <p className={styles.details}>{concert.place}</p>
          <p className={styles.details}>{concert.admission}</p>
        </div>
      </div>
    </a>
  )

}