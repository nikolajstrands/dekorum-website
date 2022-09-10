import PageFadeIn from "../../Animations/PageFadeIn/PageFadeIn";
import FadeInWhenVisible from "../../Animations/FadeInWhenVisible/FadeInWhenVisible";
import TopImage from "../../Components/TopImage/TopImage";
import Ribbon from "../../Components/Ribbon/Ribbon";
import Footer from "../../Components/Footer/Footer";
import { Button } from "react-bootstrap";
import { FileZip, Journal } from "react-bootstrap-icons";
import { Envelope, Facebook, Instagram, Spotify, Telephone, Youtube } from "react-bootstrap-icons";


export default function ContactPage() {

    const imageFileName = "IMG_9629.jpg";

    return (
        <PageFadeIn>
            <TopImage imageFileName={imageFileName} header="Kontakt os" />
            <Ribbon light header="Kontakt os">
                <FadeInWhenVisible direction="left">
                    <p>Hvis du er interesseret i at booke Vokalensemblet Dekorum til en koncert, er interesseret
                        i at synge med os eller har andre spørgsmål eller kommentarer til koret, kan vi kontakte på
                        følgende mail og telefon:
                    </p>
                    <p style={{ "text-align": "center" }}>
                        <Telephone /> (+45) 21 25 85 66<br />
                        <Envelope />vokalensembletdekorum@gmail.com<br />
                        CVR 35918426 <br />
                        Bankkonto: xxxx xxxxxxxxxxx
                    </p>
                    <p>
                        Man kan også følge os på sociale medier og streamingtjenester:
                    </p>
                    <p style={{ "text-align": "center" }}>
                        <Facebook className="m-2" size={24} />
                        <Instagram className="m-2" size={24} />
                        <Youtube className="m-2" size={24} />
                        <Spotify className="m-2" size={24} />
                    </p>
                    <p>
                        Vokalensemblet Dekorum er en non-profit organisation. Hvis du vil støtte vores kunstneriske arbejde, kan du give benytte en af nedenstående muligheder:
                    </p>
                    <Button className="m-2">Donér via PayPal</Button>
                    <Button className="m-2">Donér med MobilePay</Button>
                    <Button className="m-2">Støt os via Patreon</Button>
                </FadeInWhenVisible>
            </Ribbon>
            <Ribbon light={false} header="Downloads">
                <FadeInWhenVisible direction="left">
                    <p>Her kan du downloade pressekit, projektkatalog m.v.<br />
                        <FileZip size={24} />Download presskit<br />
                        <Journal size={24} />Download projektkatalog
                    </p>
                </FadeInWhenVisible>
            </Ribbon>
            <Footer light />
        </PageFadeIn>
    );

}