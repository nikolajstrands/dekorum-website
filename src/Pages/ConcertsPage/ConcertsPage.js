import TopImage from "../../Components/TopImage/TopImage";
import Ribbon from "../../Components/Ribbon/Ribbon";
import styles from "./ConcertsPage.module.css";
import { Image, Col, Row } from "react-bootstrap";
import PageFadeIn from "../../Animations/PageFadeIn/PageFadeIn";
import Footer from "../../Components/Footer/Footer";
import FadeInWhenVisible from "../../Animations/FadeInWhenVisible/FadeInWhenVisible";
import ConcertCard from "../../Components/ConcertCard/ConcertCard";

export default function ConcertsPage({data}) {

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
            <Ribbon light={false} header="Tidligere koncertprojekter" animateHeader={false}>
                <Row>
                    <div class="col-12 col-md-6">
                        <FadeInWhenVisible direction="left">
                            <h3 className={styles.projectHeader}>"Yearning to breath free" - musik af Caroline Shaw</h3>
                            <p>Sit neque sint quas. Ea nesciunt magnam hic quo eos eveniet. Recusandae consectetur optio in
                                nesciunt dolor perferendis vitae consequatur. Voluptatem sunt incidunt occaecati ea tenetur.</p>
                            <p>Nostrum unde velit aut quis nobis. Quos est incidunt qui voluptatem est. Consequatur molestiae et
                                delectus nihil a totam. Beatae natus nisi iste eaque ea.</p>
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
                            <h3 className={styles.projectHeader}>Musik af Mulden</h3>
                            <p>Sit neque sint quas. Ea nesciunt magnam hic quo eos eveniet. Recusandae consectetur optio in
                                nesciunt dolor perferendis vitae consequatur. Voluptatem sunt incidunt occaecati ea tenetur.</p>
                            <p>Nostrum unde velit aut quis nobis. Quos est incidunt qui voluptatem est. Consequatur molestiae et
                                delectus nihil a totam. Beatae natus nisi iste eaque ea.</p>
                        </FadeInWhenVisible>
                    </div>
                    <div class={`col-12 col-md-6 order-md-first ${styles.imageWrapper}`}>
                        <FadeInWhenVisible direction="left">
                            <Image fluid width={400} className="mb-2" src={process.env.PUBLIC_URL + "/assets/ab67616d00001e020a932a300b10d7b7570caf74.jpg"} />
                        </FadeInWhenVisible>
                    </div>
                </Row>
            </Ribbon>
            <Footer light />
        </PageFadeIn>
    );
}