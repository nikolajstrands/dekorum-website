import styles from "./AboutPage.module.css";
import TopImage from "../../Components/TopImage/TopImage";
import Ribbon from "../../Components/Ribbon/Ribbon";
import { Image, Container, Row, Col } from "react-bootstrap";
import Footer from "../../Components/Footer/Footer";
import SingerCard from "../../Components/SingerCard/SingerCard";
import PageFadeIn from "../../Animations/PageFadeIn/PageFadeIn";
import FadeInWhenVisible from "../../Animations/FadeInWhenVisible/FadeInWhenVisible";


export default function AboutPage({ data }) {

    const singers = data.singers;
    const imageFileName = "20170715-Dekorum-Sommertur-079_EDITED.jpg";

    return (
        <PageFadeIn>
            <TopImage imageFileName={imageFileName} header="Om Vokalensemblet Dekorum" />
            <Ribbon light>
                <FadeInWhenVisible direction="left">
                    <div className={styles.textWrapper}>
                        <div className={styles.textWrapper}>
                            <p><strong>Vokalensemblet Dekorum</strong> er en ambitiøs gruppe bestående af unge, erfarne korsangere. Med et erklæret mål om at være en skabende del af det danske musikliv arbejder koret for at bidrage med noget nyt og spændende ved hver eneste koncert.</p>
                            <p>Om det skabende består i opførelser af overset eller glemt musik, nye arrangementer af det kendte og elskede eller helt ny musik komponeret specielt til gruppen, varierer. Men fælles for det hele er en anderledes måde at præsentere klassisk kormusik på – i al beskedenhed.</p>
                            <p>Siden dets undfangelse i efteråret 2016 har <strong>Vokalensemblet Dekorum</strong> bl.a. uropført <strong>Ulrik Vestis</strong> <i>Plasticsolen – koncert for klaver og kor</i> over Michael Strunges digt af samme navn – samt søsat det løbende projekt <i>Musik af mulden</i>, der søger at skabe forbindelse mellem klassisk kor og dansk folkemusik gennem nye arrangementer leveret af folkemusikere fra hele landet.</p>
                            <p>Ensemblet har vundet to guldmedaljer ved <strong>European Choir Games</strong> i Göteborg og har flere udgivelser bag sig. Det seneste album <i>Yearning to breathe free</i> blev til i samarbejde med strygekvartetten <strong>Halvcirkel</strong> og portrætterer komponisten <strong>Caroline Shaw</strong>. Albummet er blevet anbefalet af blandt andre DR P2.</p>
                            <p>Som en del af målet om at præsentere klassisk kormusik på en ny måde synger Vokalensemblet Dekorum oftest uden dirigent – og uden noder.</p>
                        </div>
                    </div>
                </FadeInWhenVisible>
            </Ribbon>
            <Ribbon light={false} header="Korets medlemmer">
                <FadeInWhenVisible direction="left">
                    <Container className={styles.singerWrapper}>
                        <Row className={styles.singerRow}>
                            {singers.map((singer, index) => (
                                <Col key={`singer-${index}`} xs={12} sm={6} md={3}>
                                    <SingerCard singer={singer} />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </FadeInWhenVisible>
            </Ribbon>
            <Ribbon light={true} header="Kunstnerisk ledelse">
                <Row>
                    <div className={`col-12 col-sm-6 col-md-6 ${styles.imageWrapper}`}>
                        <FadeInWhenVisible direction="right">
                            <Image fluid width={500} className="mb-2" src={process.env.PUBLIC_URL + "/assets/Shaw_Musikhuset_3.4.png"} />
                        </FadeInWhenVisible>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 order-md-first">
                        <FadeInWhenVisible direction="left">
                            <div className={styles.textWrapper}>
                                <p>Vokalensemblet Dekorum har siden sin grundlæggelse været under kunstnerisk ledelse af <strong>Bo Asger Kristensen</strong>.</p>
                                <p>Bo er en alsidig dirigent, sanger og komponist, der især har specialiseret sig i det kammermusikalske arbejde med mindre grupper.</p>
                                <p> I sit arbejde som dirigent lægger han stor vægt på en oprigtig og vedkommende formidling af musikken gennem nye koncertkoncepter og -programmer, der understøtter musikkens budskab. </p>
                                <p>Bo er ligeledes en erfaren solo- og ensemblesanger og har sunget med bl.a. <strong>Musica Ficta</strong> og <strong>Mogens Dahl Kammerkor</strong>.</p>
                                <p> Især kormusikken er stærkt repræsenteret i Bos komponistvirke, og i 2020 blev hans seneste værk for kor og kammerorkester, <i>Under Korset</i>, uropført.</p>
                            </div>
                        </FadeInWhenVisible>
                    </div>
                </Row>
            </Ribbon>
            <Footer light={false} />
        </PageFadeIn>
    );
}