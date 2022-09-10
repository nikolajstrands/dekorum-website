import styles from "./Ribbon.module.css";
import FadeInWhenVisible from "../../Animations/FadeInWhenVisible/FadeInWhenVisible";

export default function Ribbon({ light, header, animateHeader, children }) {

    let classes;
    if (light) {
        classes = `${styles.ribbon} ${styles.light}`;
    } else {
        classes = `${styles.ribbon} ${styles.dark}`;
    }

    if (animateHeader === false) {
        return (
            <section className={classes}>
            <div className={styles.wrapper}>            
                    {header && <h1 className="text-center mb-5 animation fadeInDown">
                        {header}
                    </h1>}
                {children}
            </div>
        </section>

        );
    }

    return (
        <section className={classes}>
            <div className={styles.wrapper}>
                <FadeInWhenVisible direction={"right"}>
                    {header && <h1 className="text-center mb-5 animation fadeInDown">
                        {header}
                    </h1>}
                </FadeInWhenVisible>
                {children}
            </div>
        </section>
    )


}