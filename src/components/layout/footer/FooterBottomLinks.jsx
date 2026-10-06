import { useState } from "react";
import { Link } from "react-router";
import { CookiePreferencesModal } from "@/components/ui";
import footerLegalLinks from "../../../data/layout/footer/footerLegalLinks.js";

function FooterBottomLinks() {
    const [isCookiePreferencesOpen, setIsCookiePreferencesOpen] = useState(false);

    /**
     * Opens the cookie preferences so the user can change
     * or withdraw a consent already given.
     */
    function handleLinkClick(link) {
        if (link.opensCookiePreferences) {
            setIsCookiePreferencesOpen(true);
        }
    }

    function handleCloseCookiePreferences() {
        setIsCookiePreferencesOpen(false);
    }

    return (
        <div className="footer__bottom">
            <ul className="footer__legal-list">
                {footerLegalLinks.map((link) => (
                    <li key={link.id} className="footer__legal-item">
                        <Link
                            to={link.to}
                            className="footer__legal-link"
                            onClick={() => handleLinkClick(link)}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>

            <p className="footer__copyright">
                © 2025 Protégéo - Version 1.0.0
            </p>

            {/* Mounted only when open so the modal reads the current stored consent. */}
            {isCookiePreferencesOpen && (
                <CookiePreferencesModal
                    isOpen={isCookiePreferencesOpen}
                    onClose={handleCloseCookiePreferences}
                    onSave={handleCloseCookiePreferences}
                />
            )}
        </div>
    );
}

export default FooterBottomLinks;
