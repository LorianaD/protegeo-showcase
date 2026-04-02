import { Link } from "react-router";
import logo from "../../../assets/imgs/logo-protegeo.png";
import FooterExternalLinks from "./FooterExternalLinks";

function FooterBrandBlock() {
    return (
        <div className="footer__middle">
            <div className="footer__brand-row">
                <Link to="/" className="footer__brand" aria-label="Retour à l'accueil">
                    <img src={logo} alt="Logo Protégéo" className="footer__logo" />
                </Link>
                <FooterExternalLinks />
            </div>
        </div>
    );
}

export default FooterBrandBlock;