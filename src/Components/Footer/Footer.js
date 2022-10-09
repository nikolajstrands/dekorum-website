import Ribbon from "../Ribbon/Ribbon"
import { Col, Row } from "react-bootstrap";
import FadeInWhenVisible from "../../Animations/FadeInWhenVisible/FadeInWhenVisible";
import { Envelope, Facebook, Instagram, Spotify, Telephone, Youtube } from "react-bootstrap-icons";
import styles from "./Footer.module.css";


export default function Footer({ light }) {

    const year = new Date().getFullYear();

    return (
        <>
            <Ribbon light={light}>
                <Row>
                    <Col md={4} />
                    <Col md={4}>
                        <FadeInWhenVisible direction={"left"}>
                            <h3 className={styles.columnHeader}>Følg os</h3>
                            <p>
                                <a className={styles.link} target="_blank" rel="noreferrer" href="https://www.facebook.com/VokalensembletDekorum">
                                    <Facebook className={styles.icon} size={24} />
                                </a>
                                <a className={styles.link} target="_blank" rel="noreferrer" href="https://www.instagram.com/vokalensembletdekorum/">
                                    <Instagram className={styles.icon} size={24} />
                                </a>
                                <a className={styles.link} target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCZXCFhjbzmIWDl7616uKHEg">
                                    <Youtube className={styles.icon} size={24} />
                                </a>
                                <a className={styles.link} target="_blank" rel="noreferrer" href="https://open.spotify.com/artist/0YNA7fmmSojGraBPwsBbP0?si=Yu45GcmCR1y46DMnf6RtVw">
                                    <Spotify className={styles.icon} size={24} />
                                </a>
                            </p>
                        </FadeInWhenVisible>
                    </Col>
                    <Col md={4}>
                        <FadeInWhenVisible direction={"right"}>
                            <h3 className={styles.columnHeader}>Vokalensemblet Dekorum</h3>
                            <p>
                                <a className={styles.link} target="_blank" rel="noreferrer" href="tel:4521258566">
                                    <Telephone className={styles.icon} /> (+45) 21 25 85 66<br />
                                </a>
                                <a className={styles.link} target="_blank" rel="noreferrer" href="mailto:vokalensembletdekorum@gmail.com">
                                    <Envelope className={styles.icon} />vokalensembletdekorum@gmail.com<br />
                                </a>
                            </p>
                        </FadeInWhenVisible>
                    </Col>
                </Row>
                    <p className={styles.copyright}>{year + " © Vokalensemblet Dekorum"}</p>
            </Ribbon>
        </>
    )
}