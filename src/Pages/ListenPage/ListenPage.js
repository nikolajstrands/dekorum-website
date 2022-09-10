import styles from "./ListenPage.module.css";
import TopImage from "../../Components/TopImage/TopImage";
import Ribbon from "../../Components/Ribbon/Ribbon";
import { Ratio, Row, Col } from "react-bootstrap";
import Footer from "../../Components/Footer/Footer";
import PageFadeIn from "../../Animations/PageFadeIn/PageFadeIn";
import FadeInWhenVisible from "../../Animations/FadeInWhenVisible/FadeInWhenVisible";


export default function ListenPage() {

    const imageFileName = "Shaw_Musikhuset_1.3_color.jpg";

    return (
        <PageFadeIn>
            <TopImage imageFileName={imageFileName} header="Lyt til Vokalensemblet Dekorum" />

            <Ribbon light={true} header="Vores videoer">
                <FadeInWhenVisible direction="left">

                    <Ratio aspectRatio="16x9">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLkRy8NiDi5wo53Pcx0tQtSpko8q-As9zP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Ratio>

                    <div className="row mt-5">
                        <div className="col-12 col-md-6 mb-5">
                            <Ratio aspectRatio="16x9">
                                <iframe src="https://www.youtube.com/embed/SZpLBZa6pgs" title="YouTube video player two" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            </Ratio>
                        </div>

                        <div className="col-12 col-md-6 mb-5">
                            <Ratio aspectRatio="16x9">
                                <iframe title="YouTube video player three" width="560" height="315" src="https://www.youtube.com/embed/t0MYoebx3m8?start=8612" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </Ratio>
                        </div>
                    </div>
                </FadeInWhenVisible>˘
            </Ribbon>

            <Ribbon light={false} header="Vores indspilninger">
                <FadeInWhenVisible direction="left">
                    <p>Vi har indtil videre udgivet fire indspilninger, som kan høres på alle større streamingtjenester. Musik af Mulden er desuden udgivet som fysisk cd.</p>
                    <p>Du kan læse mere om indspilninger under <a href="">koncertprojekter</a></p>
                    <Row>
                        <Col xs={12} sm={6}>
                            <div className={styles.spotifyWrapper}>
                                <iframe title="spotify" src="https://open.spotify.com/embed/album/1C7GwvyVKnr8LP9DSK4Kyf?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
                            </div>
                        </Col>
                        <Col xs={12} sm={6}>
                            <div className={styles.spotifyWrapper}>
                                <iframe src="https://open.spotify.com/embed/album/1lK56p818LMvgI4YoQzc9x?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                            </div>
                        </Col>
                        <Col xs={12} sm={6}>
                            <div className={styles.spotifyWrapper}>
                                <iframe src="https://open.spotify.com/embed/album/2scr13F8U3GwpSyVVyv66I?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                            </div>
                        </Col>
                        <Col xs={12} sm={6}>
                            <div className={styles.spotifyWrapper}>
                                <iframe src="https://open.spotify.com/embed/album/6pfed8952Wh5mSM8wcUqt5?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                            </div>
                        </Col>


                    </Row>
                </FadeInWhenVisible>

            </Ribbon>
            <Footer light />
        </PageFadeIn>
    )
}