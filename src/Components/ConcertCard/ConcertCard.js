import styles from "./ConcertCard.module.css";
import { Image } from "react-bootstrap";

export default function ConcertCard({ concert }) {

  function getTime() {
    if (concert.time.getHours() === 1) {
      return concert.time.toLocaleDateString("da-DK", {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    }
    return concert.time.toLocaleDateString("da-DK", {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
  }

  const imageSrc = concert.imageFileName ? process.env.PUBLIC_URL + "/uploads/" + concert.imageFileName : "logo512.png";

  return (
    <a style={{ pointerEvents: concert.link === "" ? "none" : "inherit" }} href={concert.link} target="_blank" rel="noreferrer">
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <Image fluid src={imageSrc} />
        </div>
        <div className={styles.textWrapper}>
          <p className={styles.concertTitle}>{concert.title}</p>
          <p className={styles.details}>{getTime()}</p>
          <p className={styles.details}>{concert.place}</p>
          <p className={styles.details}>{concert.admission}</p>
        </div>
      </div>
    </a>
  )

}