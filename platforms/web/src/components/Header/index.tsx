import { BiLayer } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./style.scss";

export default function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <img src="/favicon64x64.png" alt="Logo" />
          EQUILIBRIUS
        </Link>
        <ul className="nav">
          {/* <li>
            <a href="#">Href</a>
          </li>
          <li>
            <a href="#">Href 2</a>
          </li> */}
          <li>
            <Link to="/about">
              <BiLayer /> About
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
