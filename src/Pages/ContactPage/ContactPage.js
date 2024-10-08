import PageFadeIn from "../../Animations/PageFadeIn/PageFadeIn";
import FadeInWhenVisible from "../../Animations/FadeInWhenVisible/FadeInWhenVisible";
import TopImage from "../../Components/TopImage/TopImage";
import Ribbon from "../../Components/Ribbon/Ribbon";
import Footer from "../../Components/Footer/Footer";
import { Image } from "react-bootstrap";
import { FileZip } from "react-bootstrap-icons";
import { Envelope, Facebook, Instagram, Spotify, Telephone, Youtube } from "react-bootstrap-icons";
import styles from "./ContactPage.module.css";


export default function ContactPage() {

    const imageFileName = "2020-07_Indspilning-Aarhus_0027-filter.jpg";

    return (
        <PageFadeIn>
            <TopImage imageFileName={imageFileName} header="Kontakt os" />
            <Ribbon light header="Kontakt os">
                <FadeInWhenVisible direction="left">
                    <div className={styles.textWrapper}>
                        <p>Hvis du er interesseret i at booke Vokalensemblet Dekorum til en koncert, er interesseret
                            i at synge med os eller har andre spørgsmål eller kommentarer til koret, kan vi kontaktes på
                            følgende telefon eller mail:
                        </p>
                        <p className={styles.center}>
                            <a className={styles.link} target="_blank" rel="noreferrer" href="tel:4522522253">
                                <Telephone className={styles.icon} /> (+45) 22 52 22 53<br />
                            </a>
                            <a className={styles.link} target="_blank" rel="noreferrer" href="mailto:vokalensembletdekorum@gmail.com">
                                <Envelope className={styles.icon} />vokalensembletdekorum@gmail.com<br />
                            </a>
                        </p>
                        <p>
                            Du kan også følge os på sociale medier og streamingtjenester:
                        </p>
                        <p className={styles.center}>
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
                        <p>
                            Vokalensemblet Dekorum er en non-profit organisation. Hvis du vil støtte vores kunstneriske arbejde, kan du donere til følgende MobilePay-nummer:
                        </p>
                        <a target="_blank" rel="noreferrer" href="https://www.mobilepay.dk/erhverv/betalingslink/betalingslink-svar?phone=22088&comment=St%C3%B8t%20vores%20arbejde">
                            <Image fluid width={300} className={styles.center} src={process.env.PUBLIC_URL + "/assets/mobilepay.png"} />
                        </a>
                        <p>Øvrige oplysninger:</p>
                        <div className={styles.center}>
                            <p className={styles.centeredParagraph}>CVR 35918426</p>
                            <p className={styles.centeredParagraph}>
                                Bankkonto: Nykredit 5471 1295456
                            </p>
                        </div>



                    </div>
                </FadeInWhenVisible>
            </Ribbon>
            <Ribbon light={false} header="Downloads">
                <FadeInWhenVisible direction="left">
                    <div className={styles.center} >
                        <a className={styles.link} target="_blank" rel="noreferrer" href={process.env.PUBLIC_URL + "/assets/downloads/dekorum-presse.zip"}>
                            <FileZip className={styles.icon} size={24} />Download pressemateriale
                        </a>
                    </div>
                </FadeInWhenVisible>
            </Ribbon>
            <Footer light />
        </PageFadeIn>
    );

}