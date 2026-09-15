import { NavLink } from "react-router"
import navLinks from "../../../data/layout/header/nav.js"
import { isAuthenticated } from "@/services/index.js";

function Navbar({ closeMenu, isMobile = false }) {
    const authenticated = isAuthenticated();

    return(
        <nav className={`header__nav ${isMobile ? "header__nav--mobile" : "header__nav--desktop"}`}>
            <ul className={`header__list ${isMobile ? "header__list--mobile" : "header__list--desktop"}`}>

                {navLinks.map((link) => {
                    const isLoginLink = link.path === "/auth/login";
                    const path = isLoginLink && authenticated ? "/dashboard" : link.path;
                    const label = isLoginLink && authenticated ? "Mon compte" : link.label;

                    return (
                        <li key={link.id} className="header__item">
                            <NavLink to={path} onClick={closeMenu}
                                className={({ isActive }) => isActive ? "header__link header__link--active" : "header__link"}
                            >
                                {label}
                            </NavLink>
                        </li>
                    )
                })}

            </ul>
        </nav>
    )
}

export default Navbar