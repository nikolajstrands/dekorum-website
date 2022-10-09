import { NavLink } from "react-router-dom";
import { ArrowRightCircle } from "react-bootstrap-icons";
import styles from "./InternalLink.module.css";



function InternalLink({ text, to }) {
    return (
        <NavLink className={styles.link} to={to} title={text}>
            {text} <ArrowRightCircle className={styles.icon} size={24} />
        </NavLink>
    );
}
export default InternalLink;