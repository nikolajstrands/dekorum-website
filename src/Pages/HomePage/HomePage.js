import styles from "./HomePage.module.css";
import { Ratio, Row, Col, Container } from "react-bootstrap";
import TopImage from "../../Components/TopImage/TopImage";
import Ribbon from "../../Components/Ribbon/Ribbon";
import Footer from "../../Components/Footer/Footer";
import PageFadeIn from "../../Animations/PageFadeIn/PageFadeIn";
import FadeInWhenVisible from "../../Animations/FadeInWhenVisible/FadeInWhenVisible";
import ConcertCard from "../../Components/ConcertCard/ConcertCard";
import { Facebook, Instagram, Youtube, Spotify } from "react-bootstrap-icons";
import InternalLink from "../../Components/InternalLink/InternalLink";

export default function HomePage({data}) {
    const imageFileName = "IMG_9629.jpg";

    const currentConcerts = data.concerts;

    return (
        <PageFadeIn>
            <main>
                <TopImage imageFileName={imageFileName} header="Vokalensemblet Dekorum">
                    <h3 style={{ "color": "white" }}>– en skabende del af det danske musikliv</h3>
                    <div className="m-4">
                        <a className={styles.link} target="_blank" href="https://www.facebook.com/VokalensembletDekorum">
                            <Facebook className={styles.icon} size={36} />
                        </a>
                        <a className={styles.link} target="_blank" href="https://www.instagram.com/vokalensembletdekorum/">
                            <Instagram className={styles.icon} size={36} />
                        </a>
                        <a className={styles.link} target="_blank" href="https://www.youtube.com/channel/UCZXCFhjbzmIWDl7616uKHEg">
                            <Youtube className={styles.icon} size={36} />
                        </a>
                        <a className={styles.link} target="_blank" href="https://open.spotify.com/artist/0YNA7fmmSojGraBPwsBbP0?si=Yu45GcmCR1y46DMnf6RtVw">
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
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLkRy8NiDi5wo53Pcx0tQtSpko8q-As9zP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                                <InternalLink to="lyt" text="Se og lyt til mere" eventKey="12" />
                            </div>
                        </Container>
                    </FadeInWhenVisible>
                </Ribbon>
                <Ribbon light={false} header="Om os">
                    <FadeInWhenVisible direction="left">
                        <p><strong>"Et af Københavns mest spændende musikalske bekendtskaber" - Some dude</strong></p>
                        <p><strong>"Skidegodt kor!" - En anden dude</strong></p>
                        <div className={styles.aboutTextWrapper}>
                            <p>Vokalensemblet Dekorum er en ambitiøs gruppe bestående af unge, erfarne korsangere. Med et erklæret mål
                                om at være en skabende del af det danske musikliv arbejder koret for at bidrage med noget nyt og
                                spændende ved hver eneste koncert.</p>
                            <p>Om det skabende består i opførelser af overset eller glemt musik, nye arrangementer af det kendte og
                                elskede eller helt ny musik komponeret specielt til gruppen, varierer. Men fælles for det hele er en
                                anderledes måde at præsentere klassisk kormusik på – i al beskedenhed.</p>
                            <p>Siden dets undfangelse i efteråret 2016 har Vokalensemblet Dekorum uropført Ulrik Vestis Plasticsolen –
                                koncert for klaver og kor over Michael Strunges digt af samme navn – samt søsat det løbende projekt
                                Musik af mulden, der søger at skabe forbindelse mellem klassisk kor og dansk folkemusik gennem nye
                                arrangementer leveret af folkemusikere fra hele landet.</p>
                            <p>Som en del af målet om at præsentere klassisk kormusik på en ny måde synger Vokalensemblet Dekorum oftest
                                uden dirigent – og uden noder.</p>
                            <div className="mb-5">
                                <InternalLink to="om-os" text="Læs mere om koret" eventKey="10" />
                            </div>
                        </div>
                    </FadeInWhenVisible>
                </Ribbon>
                <Ribbon light={true} header="Kommende koncerter">
                    <FadeInWhenVisible direction="left">
                        <Row>
                            {currentConcerts.map((concert, index) =>
                                <Col key={index} xs={12} sm={6} md={3}>
                                    <ConcertCard key={concert.id} concert={concert} />
                                </Col>)}
                        </Row>

                        <div className="text-center mb-5">
                            <InternalLink to="koncerter" text="Læs mere om koncerter" eventKey="11" />
                        </div>
                    </FadeInWhenVisible>
                </Ribbon>
                {/* <Ribbon light={false}>
                    <h1 class="text-center mt-4">Kontakt os</h1>
                    <p class="text-center">
                        For booking eller andre forespørgsler, skriv, ring eller brug kontaktformularen nedenfor.
                    </p>
                    <div>
                        <div class="row">
                            <div class="col-12 col-md-4 text-center">
                                <h3>Booking</h3>
                                <p>
                                    21 25 85 66<br />
                                    vokalensembletdekorum@gmail.com
                                </p>
                            </div>
                            <div class="col-12 col-md-4">
                                <input type="text" class="form-control m-2" id="name" placeholder="Navn" />
                                <input type="email" class="form-control m-2" id="phone" placeholder="Email" />
                                <input type="tel" class="form-control m-2" id="email" placeholder="Telefon" />
                            </div>
                            <div class="col-12 col-md-4">
                                <textarea class="form-control m-2" id="exampleFormControlTextarea1" rows="5"></textarea>
                            </div>
                            <div class="col-12 col-md-8 offset-md-4 text-center">
                                <button type="submit" class="btn btn-secondary m-2">Send</button>
                            </div>
                        </div>
                    </div>
                </Ribbon> */}
            </main>
            <Footer light={false} />
        </PageFadeIn >
    );
}