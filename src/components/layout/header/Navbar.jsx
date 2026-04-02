import { NavLink } from "react-router"
import navLinks from "../../../data/nav.js"

function Navbar({ closeMenu, isMobile = false }) {
    return(
        <nav className={`header__nav ${isMobile ? "header__nav--mobile" : "header__nav--desktop"}`}>
            <ul className={`header__list ${isMobile ? "header__list--mobile" : "header__list--desktop"}`}>

                {navLinks.map((link) => (
                    <li key={link.id} className="header__item">
                        <NavLink to={link.path} onClick={closeMenu}
                            className={({ isActive }) => isActive ? "header__link header__link--active" : "header__link"}
                        >
                            {link.label}
                        </NavLink>
                    </li>
                ))}

            </ul>
        </nav>
    )
}

export default Navbar