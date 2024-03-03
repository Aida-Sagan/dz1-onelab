import { Link } from "react-router-dom";
import "./styles.css";

export default function Home() {
    return (
        <nav className="navigation-menu">
            <Link to="/add">
                Перейти на страницу Add
            </Link>
            <Link to="/list">
                Перейти на страниц List
            </Link>
        </nav>
    );
}