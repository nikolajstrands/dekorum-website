import styles from "./AboutPage.module.css";
import TopImage from "../../Components/TopImage/TopImage";
import Ribbon from "../../Components/Ribbon/Ribbon";
import { Image, Container, Row, Col } from "react-bootstrap";
import Footer from "../../Components/Footer/Footer";
import SingerCard from "../../Components/SingerCard/SingerCard";
import PageFadeIn from "../../Animations/PageFadeIn/PageFadeIn";
import FadeInWhenVisible from "../../Animations/FadeInWhenVisible/FadeInWhenVisible";


export default function AboutPage({ data }) {

    const publishedSingers = data.singers.filter(singer => singer.published);

    /*const getSurname = (singer) => {
        return singer.name.split(" ").slice(-1)[0];
    }

    const singers = publishedSingers.sort((singerA, singerB) => {
        if (singerA.name === "Vakant") {
            return 1;
        }
        if (singerB.name === "Vakant") {
            return -1;
        }
        const surnameA = getSurname(singerA);
        const surnameB = getSurname(singerB);
        return surnameA.localeCompare(surnameB);
    });*/

    const getSurname = (singer) => {
        return singer.name === "Vakant" ? "ZZZZZZ" : singer.name.split(" ").slice(-1)[0];
    };
    
    // Define voice type order
    const voiceTypeOrder = {
        "sopran": 0,
        "alt": 1,
        "tenor": 2,
        "bas": 3
    };
    
    const singers = publishedSingers.sort((singerA, singerB) => {
        const voiceA = singerA.part;
        const voiceB = singerB.part;
    
        const orderA = voiceTypeOrder[voiceA] ?? 999;
        const orderB = voiceTypeOrder[voiceB] ?? 999;
    
        // First: sort by voice type order
        if (orderA !== orderB) {
            return orderA - orderB;
        }
    
        // Then: sort by surname (place "Vakant" last within each section)
        const surnameA = getSurname(singerA);
        const surnameB = getSurname(singerB);
        return surnameA.localeCompare(surnameB);
    });

    const imageFileName = "Spredt.jpg";

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
                            <p>Ensemblet vandt i sommeren 2025 guld ved <strong>European Choir Games</strong> i Aarhus og har flere udgivelser bag sig. Det seneste album <i>Yearning to breathe free</i> blev til i samarbejde med strygekvartetten <strong>Halvcirkel</strong> og portrætterer komponisten <strong>Caroline Shaw</strong>. Albummet er blevet anbefalet af blandt andre DR P2.</p>
                            <p>Som en del af målet om at præsentere klassisk kormusik på en ny måde synger Vokalensemblet Dekorum oftest uden dirigent – og uden noder.</p>
                            <p>Hvis <strong>du</strong> kan se dig selv synge med os, holder vi løbende foresyngninger. Vi mangler for nuværende en bas og en tenor, men har løbende brug for vikarer, så tøv endelig ikke med at kontakte os.</p>
                        </div>
                    </div>
                </FadeInWhenVisible>
            </Ribbon>
            
            <Ribbon light={false} header="Kunstnerisk ledelse">
                <Row>
                    <div className={`col-12 col-sm-6 col-md-6 ${styles.imageWrapper}`}>
                        <FadeInWhenVisible direction="right">
                            <Image fluid width={500} className="mb-2" src={"uploads/portraits/Severin2026_crop.jpg"} />
                        </FadeInWhenVisible>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 order-md-first">
                        <FadeInWhenVisible direction="left">
                            <div className={styles.textWrapper}>
                                <p> </p>
                                <p>Severin Korsgaard er dirigent, sanger og musikpædagog med fokus på formidling i alle aspekter af sit arbejde.</p>
                                <p>Klang og tekst forbindes med musikkens historiske kontekst, men samtidigt holdes døren åben for nytolkning og udvidelse af den klassiske kortradition. </p>
                                <p>Det gælder såvel for samtidsmusik som for tidlig musik samt det klassiske kernerepertoire.</p>
                                <p>Som sanger assisterer Severin i en række professionelle vokalensembler bla. Ars Nova Copenhagen, Ensemble Edge og Vor Frue Kirkes Kantori. </p>
                                <p>En erfaring der præger den omspændende viden i hans arbejde med stemme, klang og ensemblekultur.</p>
                                <p> </p>
                                <p><i>"Det er en stor glæde at få lov til at arbejde som dirigent og kunstnerisk leder med en så dedikeret gruppe af mennesker som Vokalensemblet Dekorum. Deres lyst til fordybelse i klang, tekst og formidling er en fornøjelse at være omgivet af og arbejde med."</i> </p>
                            </div>
                        </FadeInWhenVisible>
                    </div>
                </Row>
            </Ribbon>
            <Ribbon light={true} header="Korets medlemmer">
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
            <Footer light />
        </PageFadeIn>
    );
}