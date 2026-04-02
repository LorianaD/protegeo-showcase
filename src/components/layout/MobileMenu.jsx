import Navbar from "./Navbar.jsx"

function MobileMenu({isMenuOpen, closeMenu}) {
    return(
        <div className={`mobile-menu ${isMenuOpen ? "mobile-menu--open" : ""}`}>
                <div className="mobile-menu__top">
                    <button
                        className="mobile-menu__close"
                        type="button"
                        onClick={closeMenu}
                    >
                        Fermer <span className="mobile-menu__close-icon">×</span>
                    </button>
                </div>

                <div className="mobile-menu__content">
                    <Navbar closeMenu={closeMenu} isMobile />
                </div>
            </div>
    )
}

export default MobileMenu