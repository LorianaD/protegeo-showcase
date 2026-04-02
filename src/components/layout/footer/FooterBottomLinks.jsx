import { Link } from "react-router";
import footerLegalLinks from "../../../data/footer/footerLegalLinks.js";

function FooterBottomLinks() {
    return (
        <div className="footer__bottom">
            <ul className="footer__legal-list">
                {footerLegalLinks.map((link) => (
                    <li key={link.id} className="footer__legal-item">
                        <Link to={link.to} className="footer__legal-link">
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>

            <p className="footer__copyright">
                © 2025 Protégéo - Version 1.0.0
            </p>
        </div>
    );
}

export default FooterBottomLinks;