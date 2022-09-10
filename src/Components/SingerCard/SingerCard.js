import styles from "./SingerCard.module.css";
import { Image } from "react-bootstrap";

export default function SingerCard({ singer }) {

    // return (
    //     <div className={styles.cardWrapper}>
    //         <div className={styles.imageWrapper}>
    //             <Image fluid  src={process.env.PUBLIC_URL + "/assets/" + singer.portraitFileName} />
    //             <p className="text-center">
    //                 {singer.name}<br />
    //                 {singer.part}</p>
    //         </div>
    //     </div>
    // );
    return (
        <div className={styles.wrapper}>
            <div>
                <Image fluid src={process.env.PUBLIC_URL + "/assets/" + singer.portraitFileName} />
            </div>
            <div className={styles.textWrapper}>
                <p className={styles.singerName}>{singer.name}</p>
                <p className={styles.singerPart}>{singer.part}</p>
            </div>
        </div>
    );



}