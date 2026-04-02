import { Link } from "react-router"
import navLinks from "../../data/nav.js"

function Navbar({ closeMenu, isMobile = false }) {
    return(
        <nav className={`header__nav ${isMobile ? "header__nav--mobile" : "header__nav--desktop"}`}>
            <ul className={`header__list ${isMobile ? "header__list--mobile" : "header__list--desktop"}`}>

                {navLinks.map((link) => (
                    <li key={link.id} className="header__item">
                        <Link to={link.path} className="header__link" onClick={closeMenu}>
                            {link.label}
                        </Link>
                    </li>
                ))}

            </ul>
        </nav>
    )
}

export default Navbar