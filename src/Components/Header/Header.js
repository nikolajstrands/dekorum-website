import { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {

    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', adjustBackground);
        return () => { window.removeEventListener('scroll', adjustBackground); }
    }, []);

    function adjustBackground() {
        if (window.scrollY < 150) {
            setOpacity(0);
        } else if (window.scrollY >= 300) {
            setOpacity(0.8);
        } else {
            const newOpacity = (window.scrollY - 150) / 150 * 0.8;
            setOpacity(newOpacity);
        }
    }

    const navStyle = {
        background: `rgba(0, 0, 0, ${opacity})`
    }


    function getStyleFunction() {
        return ({ isActive }) => {
            return {
                color: isActive ? 'white' : 'rgba(255, 255, 255, 0.6)',
                borderBottom: isActive ? "3px solid white" : "",
            };
        };
    }

    return (
        <header>
            <Navbar style={navStyle} collapseOnSelect expand="lg" fixed="top" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <Nav.Link eventKey="20" end as={NavLink} to={"/"} title="Hjem">
                            <img
                                src={process.env.PUBLIC_URL + "/assets/logo.png"}
                                className={styles.logo}
                                alt="Vokalensemblet Dekorum logo"

                            />
                        </Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className={styles.navArea}>
                            <Nav.Link style={getStyleFunction()} className={styles.navElement} eventKey="0" as={NavLink} end to={"/"} title="Hjem">HJEM</Nav.Link>
                            <Nav.Link style={getStyleFunction()} className={styles.navElement} eventKey="1" as={NavLink} end to="lyt" title="Lyt">LYT</Nav.Link>
                            <Nav.Link style={getStyleFunction()} className={styles.navElement} eventKey="2" as={NavLink} end to="om-os" title="Om os">OM OS</Nav.Link>
                            <Nav.Link style={getStyleFunction()} className={styles.navElement} eventKey="3" as={NavLink} end to="koncerter" title="Koncerter">KONCERTER</Nav.Link>
                            <Nav.Link style={getStyleFunction()} className={styles.navElement} eventKey="4" as={NavLink} end to="kontakt" title="Kontakt os">KONTAKT OS</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}