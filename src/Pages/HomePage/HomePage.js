import styles from "./HomePage.module.css";
import { Ratio, Row, Col, Container } from "react-bootstrap";
import TopImage from "../../Components/TopImage/TopImage";
import Ribbon from "../../Components/Ribbon/Ribbon";
import Footer from "../../Components/Footer/Footer";
import PageFadeIn from "../../Animations/PageFadeIn/PageFadeIn";
import FadeInWhenVisible from "../../Animations/FadeInWhenVisible/FadeInWhenVisible";
import { Facebook, Instagram, Youtube, Spotify } from "react-bootstrap-icons";
import InternalLink from "../../Components/InternalLink/InternalLink";
import ConcertList from "../../Components/ConcertList/ConcertList";

export default function HomePage({ data }) {
    const imageFileName = "IMG_9629.jpg";

    const currentConcerts = data.concerts;

    return (
        <PageFadeIn>
            <main>
                <TopImage imageFileName={imageFileName} header="Vokalensemblet Dekorum">
                    <h3 style={{ "color": "white" }}>– en skabende del af det danske korliv</h3>
                    <div className="m-4">
                        <a className={styles.link} target="_blank" rel="noreferrer" href="https://www.facebook.com/VokalensembletDekorum">
                            <Facebook className={styles.icon} size={36} />
                        </a>
                        <a className={styles.link} target="_blank" rel="noreferrer" href="https://www.instagram.com/vokalensembletdekorum/">
                            <Instagram className={styles.icon} size={36} />
                        </a>
                        <a className={styles.link} target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCZXCFhjbzmIWDl7616uKHEg">
                            <Youtube className={styles.icon} size={36} />
                        </a>
                        <a className={styles.link} target="_blank" rel="noreferrer" href="https://open.spotify.com/artist/0YNA7fmmSojGraBPwsBbP0?si=Yu45GcmCR1y46DMnf6RtVw">
                            <Spotify className={styles.icon} size={36} />
                        </a>
                    </div>
                </TopImage>
                <Ribbon light={true} header="Hør os">
                    <FadeInWhenVisible direction="left">
                        <Container>
                            <Row>
                                <Col xs={12}>
                                    <Ratio aspectRatio="16x9">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLkRy8NiDi5wo53Pcx0tQtSpko8q-As9zP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </Ratio>
                                </Col>
                            </Row>
                            <Row className="mt-5">
                                <Col xs={12} md={6} className="mb-5">
                                    <Ratio aspectRatio="16x9">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/_H6oPSkFgDM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                                    </Ratio>
                                </Col>
                                <Col xs={12} md={6} className="mb-5">
                                    <Ratio aspectRatio="16x9">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/LgHwKmp5-Yw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                                    </Ratio>
                                </Col>
                            </Row>
                            <div className="mb-5">
                                <InternalLink to="lyt" text="Se og lyt til mere" />
                            </div>
                        </Container>
                    </FadeInWhenVisible>
                </Ribbon>
                <Ribbon light={false} header="Om os">
                    <FadeInWhenVisible direction="left">
                        <Container>
                            <div className={styles.aboutTextWrapper}>
                                <p><strong>Vokalensemblet Dekorum</strong> er en ambitiøs gruppe bestående af unge, erfarne korsangere. Med et erklæret mål om at være en skabende del af det danske musikliv arbejder koret for at bidrage med noget nyt og spændende ved hver eneste koncert.</p>
                                <p>Om det skabende består i opførelser af overset eller glemt musik, nye arrangementer af det kendte og elskede eller helt ny musik komponeret specielt til gruppen, varierer. Men fælles for det hele er en anderledes måde at præsentere klassisk kormusik på – i al beskedenhed.</p>
                                {/* <p>Vokalensemblet, der ledes af <strong>Bo Asger Kristensen</strong>, arbejder sammen med nogle af landets mest talentfulde komponister og musikere og har flere udgivelser bag sig.</p> */}
                            </div>
                            <div className={styles.linkWrapper}>
                                <InternalLink to="om-os" text="Læs mere om koret" />
                            </div>
                        </Container>
                    </FadeInWhenVisible>
                </Ribbon>
                <Ribbon light={true} header="Kommende koncerter">
                    <FadeInWhenVisible direction="left">
                        <ConcertList concerts={currentConcerts} />
                        <div className={styles.linkWrapper}>
                            <InternalLink to="koncerter" text="Læs mere om koncerter" />
                        </div>
                    </FadeInWhenVisible>
                </Ribbon>
            </main>
            <Footer light={false} />
        </PageFadeIn >
    );
}