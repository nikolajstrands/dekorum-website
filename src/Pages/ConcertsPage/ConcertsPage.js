import TopImage from "../../Components/TopImage/TopImage";
import Ribbon from "../../Components/Ribbon/Ribbon";
import styles from "./ConcertsPage.module.css";
import { Image, Col, Row, Container } from "react-bootstrap";
import PageFadeIn from "../../Animations/PageFadeIn/PageFadeIn";
import Footer from "../../Components/Footer/Footer";
import FadeInWhenVisible from "../../Animations/FadeInWhenVisible/FadeInWhenVisible";
import ConcertList from "../../Components/ConcertList/ConcertList";

export default function ConcertsPage({ data }) {

    const concerts = data.concerts;

    const imageFileName = "Shaw_Musikhuset_1.jpg";

    return (
        <PageFadeIn>
            <TopImage imageFileName={imageFileName} header="Koncerter med Vokalensemblet Dekorum" />
            <Ribbon light header="Kommende koncerter">
                <div className="row">
                    <FadeInWhenVisible direction="left">
                        <ConcertList concerts={concerts} />
                    </FadeInWhenVisible>
                </div>
            </Ribbon>
            <Ribbon light={false} header="Udvalgte tidligere projekter" animateHeader={false}>
                <Container className={styles.projectWrapper}>
                    <Row>
                        <div className="col-12 col-md-6">
                            <FadeInWhenVisible direction="left">
                                <h3 className={styles.projectHeader}>"Yearning to breathe free" - musik af Caroline Shaw</h3>
                                <p>Den kritikerroste amerikanske komponist <strong>Caroline Shaw</strong> har taget verden med storm! I 2021 præsenterede Vokalensemblet Dekorum i samarbejde med strygekvartetten <strong>Halvcirkel</strong> den første dansk portrætkoncertserie og -indspilning af Shaw, som er blandt sin generations førende komponister.</p>
                                <p>Udgivelsen, der kan høres digitalt på alle de store streamingtjenester, rummer bl.a. den første danske indspilning af værket <i>To the hands</i> samt et helt nyt arrangement for blandet kor og solobratsch af Shaws værk <i>Its motion keeps</i> – lavet specielt til Vokalensemblet Dekorum af ensemblets kunstneriske leder, Bo Asger Kristensen. Musikken er indspillet live i <strong>Musikhuset København</strong> og blev desuden opført til koncerter i Mariendal Kirke (Frederiksberg), Søllerød kirke og Buddinge Kirke.</p>
                                <p> Udgivelsen blev bl.a. anbefalet af <strong>DR P2</strong> og fik <a className={styles.textLink} href="https://seismograf.org/kortkritik/vokalbruset-skaerer-i-hjertet" target="_blank" rel="noreferrer">følgende ros</a> med i musiktidsskriftet <strong>Seismograf</strong>: ”Sammen med strygekvartetten Halvcirkel, udvidet med kontrabas, giver Dekorum et sitrende liv til nogle af de mest interessante nedslag i Shaws oeuvre. De to ensembler rammer hver for sig og sammen akkurat den enkle klarhed, som gør at Shaws kompositioner virkelig kan skære sine længsler i hjertet.”</p>
                            </FadeInWhenVisible>
                        </div>
                        <div className={`col-12 col-md-6 ${styles.imageWrapper}`}>
                            <FadeInWhenVisible direction="right">
                                <Image fluid width={400} className="mb-2" src={process.env.PUBLIC_URL + "/assets/Yearning to breathe free Cover Final.png"} />
                            </FadeInWhenVisible>
                        </div>
                    </Row>
                </Container>
                <Container className={styles.projectWrapper}>
                    <Row>
                        <div className="col-12 col-md-6">
                            <FadeInWhenVisible direction="right">
                                <h3 className={styles.projectHeader}>Plasticsolen og AEDEL - musik Ulrik Vesti</h3>
                                <p>Komponist og pianist <strong>Ulrik Vesti</strong> har skrevet to større værker for klaversolist og kor direkte til Vokalensemblet Dekorum. i 2017 blev <i>Plasticsolen uropført</i>, et værk baseret på Michael Strunges fandenivoldske 80'er-digt af samme navn. Klaverkoncertformen er brugt som forbillede, hvor koret tager orkestrets plads, og resultatet er blevet et værk, hvor individets (pianistens) galskab står i skarp kontrast til samfundets (korets) kategoriske imperativ om struktur og symmetri.</p>
                                <p>Samarbejdet med Ulrik Vesti fortsatte i 2019, hvor Vokalensemblet Dekorum bestilte et nyt værk for kor og klaver. Det blev til <i>AEDEL</i> - et konceptværk i seks satser, hvor hver sats repræsenterer en ædelgas. <i>AEDEL</i> forsøger at indkapsle de seks ædelgassers fysiske egenskaber i enkeltstående musikalske stykker og derved sanseliggøre en ellers svær æterisk idé.</p>
                                <p>De to værker er opført ved koncerter i bl.a. Frihavnskirken (Østerbro), Helleruplund Kirke (Hellerup), Christians Kirke (Christianshavn) og Kirken i Ørestad (København).</p>
                                <p>I 2020 blev værkerne indspillet i Skt. Lukas Kirke i Aarhus og udgivet som to separate digitale udgivelser (<a className={styles.textLink} href="https://open.spotify.com/album/2scr13F8U3GwpSyVVyv66I?si=C4naGjcPRmWXtsjU37conA" target="_blank" rel="noreferrer">Plasticsolen</a> og <a className={styles.textLink} href="https://open.spotify.com/album/6pfed8952Wh5mSM8wcUqt5?si=42tXMoncQmCuYT6K9LtmOw" target="_blank" rel="noreferrer">AEDEL</a>).</p>
                            </FadeInWhenVisible>
                        </div>
                        <div className={`col-12 col-md-6 order-md-first ${styles.imageWrapper}`}>
                            <Row>
                                <Col className={styles.smallCol}>
                                    <FadeInWhenVisible direction="top-left">
                                        <Image fluid width={250} src={process.env.PUBLIC_URL + "/assets/ab67616d00001e0251d1cae96777b2fa81ca58f8.jpeg"} />
                                    </FadeInWhenVisible>

                                </Col>
                                <Col className={styles.smallCol}></Col>
                            </Row>
                            <Row>
                                <Col className={styles.smallCol}>
                                </Col>
                                <Col className={styles.smallCol}>
                                    <FadeInWhenVisible direction="bottom-right">
                                        <Image fluid width={250} src={process.env.PUBLIC_URL + "/assets/ab67616d00001e02e3f7bffe4fd62866b278db22.jpeg"} />
                                    </FadeInWhenVisible>
                                </Col>
                            </Row>
                        </div>
                    </Row>
                </Container>
                <Container className={styles.projectWrapper}>
                    <Row>
                        <div className="col-12 col-md-6">
                            <FadeInWhenVisible direction="left">
                                <h3 className={styles.projectHeader}>Musik af Mulden</h3>
                                <p>Vokalensemblet Dekorum har siden 2017 arbejdet kontinuerligt med projektet <i>Musik af mulden</i>. Projektet forbinder klassisk ensemblesang og dansk <strong>folkemusik</strong> gennem nye vokalarrangementer leveret af folkemusikere og komponister fra hele landet. Projektet har bl.a. udmøntet sig i talrige livekoncerter rundt omkring i Danmark og Nordtyskland, i et samarbejde med DR Malko-dirigentskolen og en cd-indspilning i 2019 (<a className={styles.textLink} href="https://open.spotify.com/album/1lK56p818LMvgI4YoQzc9x?si=sPPnr0HiTUmR70Rsen8-fg" target="_blank" rel="noreferrer">Hør musikken</a>).</p>
                                <p>Samarbejdspartnere på projektet inkluderer dirigent og komponist <strong>Phillip Faber</strong>, vokalartist <strong>Nadja Marie Schmedes</strong> samt violinisterne <strong>Emma Kragh-Elmøe</strong> og <strong>Clara Tesch</strong>.</p>
                                <p>Musikken er opført ved koncerter i bl.a. Frihavnskirken (Østerbro), Helligåndskirken (Hvide Sande), Kirsten Kjærs Museum (Frøstrup), Ulsted Kirke (Hals), Dalum Kirke (Odense), DOKK1 (Aarhus), Tersløse Kirke (Dianalund), Den rytmiske højskole, Jaruplund Højskole, Folkehuset Absalon, Højskolen Marielyst (Falster) og Hyltebjerg Kirke (Vanløse).</p>
                            </FadeInWhenVisible>
                        </div>
                        <div className={`col-12 col-md-6 ${styles.imageWrapper}`}>
                            <FadeInWhenVisible direction="right">
                                <Image fluid width={400} className="mb-2" src={process.env.PUBLIC_URL + "/assets/ab67616d00001e020a932a300b10d7b7570caf74.jpg"} />
                            </FadeInWhenVisible>
                        </div>
                    </Row>
                </Container>
            </Ribbon>
            <Footer light />
        </PageFadeIn>
    );
}