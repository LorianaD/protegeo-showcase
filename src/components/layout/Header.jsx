import { Link } from "react-router"
import logo from "../../assets/imgs/logo-protegeo.png";
import navLinks from "../../data/nav.js";

function Header() {
    return(
        <header className="header">
            <div className="brand__container">
                <Link to="/" className="header__brand">
                    <img src={ logo } alt="Logo Protégéo" className="header__logo" />
                </Link>
            </div>
            <nav className="header__nav">
                <ul className="header__list">

                    {navLinks.map((link) => (
                        <li key={link.id} className="header__item">
                            <Link to={link.path} className="header__link">
                                {link.label}
                            </Link>
                        </li>
                    ))}

                </ul>
            </nav>
        </header>
    )
}

export default Header