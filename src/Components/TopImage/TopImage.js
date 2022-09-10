import styles from "./TopImage.module.css";
import Image from "react-bootstrap/Image";

export default function TopImage({ imageFileName, header, children }) {

    const url = process.env.PUBLIC_URL + "/assets/" + imageFileName;
    return (
        <section>
            <div className={styles.wrapper} style={{"background": "url(" + url + ")"}}>
                <div className={`${styles.overlay} text-center`}>
                    <div className="animation fadeInDown">
                        {header && <h1 className={`${styles.imageTitle}`}>{header}</h1>}
                        {children}
                        <div className={styles.scrollDown}></div>
                    </div>
                </div>
            </div>
        </section>
    )

}