import { menuBurger } from "@/assets";
import SiderbarHeader from "./SiderbarHeader";
import SiderbarContent from "./SiderbarContent";
import { useState } from "react";

function Siderbar({ onAddDossier, protectedPersons, protectedPersonsLoading, protectedPersonsError }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((previousState) => !previousState);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const contentProps = {
        onAddDossier,
        protectedPersons,
        protectedPersonsLoading,
        protectedPersonsError
    };

    return (
        <aside className="siderbar">
            <div className="siderbar--desktop">
                <SiderbarContent {...contentProps} />
            </div>

            <div className="siderbar--mobile">
                <SiderbarHeader />

                <button
                    className="dashboard__burger"
                    type="button"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-dashboard-menu"
                >
                    <img
                        src={menuBurger}
                        alt=""
                        className="dashboard__burger-icon"
                    />
                    <span>Menu</span>
                </button>
            </div>

            <div
                id="mobile-dashboard-menu"
                className={`siderbar-mobile-menu ${isMenuOpen ? "siderbar-mobile-menu--open" : ""}`}
            >
                <button
                    className="siderbar-mobile-menu__overlay"
                    type="button"
                    onClick={closeMenu}
                    aria-label="Fermer le menu"
                />

                <div className="siderbar-mobile-menu__content">
                    <button
                        className="siderbar-mobile-menu__close"
                        type="button"
                        onClick={closeMenu}
                        aria-label="Fermer le menu"
                    >
                        ×
                    </button>
                    <SiderbarContent {...contentProps} />
                </div>
            </div>
        </aside>
    );
}

export default Siderbar;