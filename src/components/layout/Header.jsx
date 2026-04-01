import { Link } from "react-router"
import logo from "../../assets/imgs/logo-protegeo.png";
import Navbar from "./Navbar.jsx";
import { useState } from "react";
import BurgerMenu from "./BurgerMenu.jsx";
import MobileMenu from "./MobileMenu.jsx";

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    function closeMenu() {
        setIsMenuOpen(false);
    }

    return(
        <header className="header">
            <div className="brand__container">
                <Link to="/" className="header__brand">
                    <img src={ logo } alt="Logo Protégéo" className="header__logo" />
                </Link>
            </div>

            {/* Navbar desktop */}
            <div className="header__desktop-nav">
                <Navbar />
            </div>

            {/* Bouton burger mobile */}
            <BurgerMenu/>

            {/* Menu mobile */}
            <MobileMenu/>
        </header>
    )
}

export default Header