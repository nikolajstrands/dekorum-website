import { Row, Col } from "react-bootstrap";
import ConcertCard from "../../Components/ConcertCard/ConcertCard";
import styles from "./ConcertList.module.css";


export default function ConcertList({ concerts }) {

    const publishedConcerts = concerts.filter(c => c.published);
    const concertsWithDates = publishedConcerts.map(c => ({ ...c, time: new Date(c.time) }));
    const now = new Date();
    const futureConcerts = concertsWithDates.filter(c => c.time >= now).sort((a, b) => { return a.time.getTime() - b.time.getTime()});

    if (futureConcerts.length === 0) {
        return <div className={styles.noConcerts}>Der er for øjeblikket ingen koncerter i kalenderen.</div>
    }

    return (
        <Row>
            {futureConcerts.map((concert, index) =>
                <Col key={index} xs={12} sm={6} md={3}>
                    <ConcertCard key={concert.id} concert={concert} />
                </Col>)}
        </Row>
    );
}