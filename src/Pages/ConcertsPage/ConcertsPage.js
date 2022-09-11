import TopImage from "../../Components/TopImage/TopImage";
import Ribbon from "../../Components/Ribbon/Ribbon";
import styles from "./ConcertsPage.module.css";
import { Image, Col, Row, Container } from "react-bootstrap";
import PageFadeIn from "../../Animations/PageFadeIn/PageFadeIn";
import Footer from "../../Components/Footer/Footer";
import FadeInWhenVisible from "../../Animations/FadeInWhenVisible/FadeInWhenVisible";
import ConcertCard from "../../Components/ConcertCard/ConcertCard";

export default function ConcertsPage({ data }) {

    const concerts = data.concerts;

    const imageFileName = "Shaw_Musikhuset_1.3_color.jpg";

    return (

        <PageFadeIn>
            <TopImage imageFileName={imageFileName} header="Koncerter med Vokalensemblet Dekorum" />
            <Ribbon light header="Kommende koncerter">
                <div className="row">
                    <FadeInWhenVisible direction="left">
                        <Row>
                            {concerts.map((concert, index) =>
                                <Col key={index} xs={12} sm={6} md={3}>
                                    <ConcertCard key={concert.id} concert={concert} />
                                </Col>)}
                        </Row>
                    </FadeInWhenVisible>
                </div>
            </Ribbon>
            <Ribbon light={false} header="Udvalgte tidligere projekter" animateHeader={false}>
                <Row>
                    <div class="col-12 col-md-6">
                        <FadeInWhenVisible direction="left">
                            <h3 className={styles.projectHeader}>"Yearning to breath free" - musik af Caroline Shaw</h3>
                            <p>Den kritikerroste amerikanske komponist <strong>Caroline Shaw</strong> har taget verden med storm! Med denne udgivelse præsenterer Vokalensemblet Dekorum og strygekvartetten <strong>Halvcirkel</strong> det første danske portræt af Shaw, som er blandt sin generations førende kvindelige komponister.</p>
                            <p>Udgivelsen, der kan høres digitalt på alle de store streamingtjenester, rummer bl.a. den første danske indspilning af værket <i>To the hands</i> samt et helt nyt arrangement for blandet kor og solobratsch af Shaws værk <i>Its motion keeps</i> – lavet specielt til Vokalensemblet Dekorum af ensemblets kunstneriske leder, Bo Asger Kristensen. Musikken er indspillet live i <strong>Musikhuset København</strong>.</p>
                            <p> Udgivelsen blev bl.a. anbefalet af <strong>DR P2</strong> og fik <a href="https://seismograf.org/kortkritik/vokalbruset-skaerer-i-hjertet" target="_blank">følgende ros</a> med i musiktidsskriftet <strong>Seismograf</strong>: ”Sammen med strygekvartetten Halvcirkel, udvidet med kontrabas, giver Dekorum et sitrende liv til nogle af de mest interessante nedslag i Shaws oeuvre. De to ensembler rammer hver for sig og sammen akkurat den enkle klarhed, som gør at Shaws kompositioner virkelig kan skære sine længsler i hjertet.”</p>
                        </FadeInWhenVisible>
                    </div>
                    <div class={`col-12 col-md-6 ${styles.imageWrapper}`}>
                        <FadeInWhenVisible direction="right">
                            <Image fluid width={400} className="mb-2" src={process.env.PUBLIC_URL + "/assets/Yearning to breathe free Cover Final.png"} />
                        </FadeInWhenVisible>
                    </div>
                </Row>
                <Row>
                    <div class="col-12 col-md-6">
                        <FadeInWhenVisible direction="right">
                            <h3 className={styles.projectHeader}>Plasticsolen og AEDEL</h3>
                            <p>Ulrik Vesti.</p>
                            <p>Sit neque sint quas. Ea nesciunt magnam hic quo eos eveniet. Recusandae consectetur optio in
                                nesciunt dolor perferendis vitae consequatur. Voluptatem sunt incidunt occaecati ea tenetur.</p>
                            <p>Nostrum unde velit aut quis nobis. Quos est incidunt qui voluptatem est. Consequatur molestiae et
                                delectus nihil a totam. Beatae natus nisi iste eaque ea.</p>
                        </FadeInWhenVisible>
                    </div>


                    <div class={`col-12 col-md-6 order-md-first ${styles.imageWrapper}`}>

                        <Container className={styles.smallColsContainer}>
                            <FadeInWhenVisible direction="top-left">
                                <Row>
                                    <Col className={styles.smallCol}>
                                        <Image fluid width={300} src={process.env.PUBLIC_URL + "/assets/ab67616d00001e0251d1cae96777b2fa81ca58f8.jpeg"} />

                                    </Col>
                                    <Col className={styles.smallCol}></Col>

                                </Row>
                            </FadeInWhenVisible>
                            <FadeInWhenVisible direction="bottom-right">
                                <Row>
                                    <Col className={styles.smallCol}>
                                    </Col>
                                    <Col className={styles.smallCol}>
                                        <Image fluid width={300} src={process.env.PUBLIC_URL + "/assets/ab67616d00001e02e3f7bffe4fd62866b278db22.jpeg"} />

                                    </Col>
                                </Row>
                            </FadeInWhenVisible>
                        </Container>

                    </div>



                </Row>
                <Row>
                    <div class="col-12 col-md-6">
                        <FadeInWhenVisible direction="left">
                            <h3 className={styles.projectHeader}>Musik af Mulden</h3>
                            <p>Sit neque sint quas. Ea nesciunt magnam hic quo eos eveniet. Recusandae consectetur optio in
                                nesciunt dolor perferendis vitae consequatur. Voluptatem sunt incidunt occaecati ea tenetur.</p>
                            <p>Nostrum unde velit aut quis nobis. Quos est incidunt qui voluptatem est. Consequatur molestiae et
                                delectus nihil a totam. Beatae natus nisi iste eaque ea.</p>

                        </FadeInWhenVisible>
                    </div>

                    <div class={`col-12 col-md-6 ${styles.imageWrapper}`}>
                        <FadeInWhenVisible direction="right">
                            <Image fluid width={400} className="mb-2" src={process.env.PUBLIC_URL + "/assets/ab67616d00001e020a932a300b10d7b7570caf74.jpg"} />
                        </FadeInWhenVisible>
                    </div>

                </Row>
            </Ribbon>
            <Footer light />
        </PageFadeIn>
    );
}