import { Link } from "react-router-dom";

export default function Header(): JSX.Element {
    return <header className="header">
        <Link to="/">Home</Link>
        <Link to="/favorites">Fav</Link>
    </header>
}