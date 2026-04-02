import menuBurger from "../../../assets/imgs/menu-burger.png";

function BurgerMenu({toggleMenu, isMenuOpen}) {
    return(
        <button
            className="header__burger"
            type="button"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
        >
            <img src={menuBurger} alt="menu" className="header__burger-icon" />
        </button>        
    )
}

export default BurgerMenu