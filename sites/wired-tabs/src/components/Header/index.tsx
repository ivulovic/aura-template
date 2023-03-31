import { Link } from "react-router-dom";
import useAuth from "../../providers/Auth/useAuthContext";

export default function Header(): JSX.Element {
    const { auth, setAuth } = useAuth();

    return <header className="header">
        <Link to="/">Home</Link>
        <button onClick={e => setAuth(!auth)}>
            {auth ? 'Logout' : 'Login'}
        </button>
        <Link to="/favorites">Fav</Link>
    </header>
}