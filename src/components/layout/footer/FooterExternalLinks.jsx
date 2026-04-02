import externalLinks from "../../../data/footer/externalLinks.js";
import externalLinkIcon from "../../../assets/imgs/external-link.svg";

function FooterExternalLinks() {
    return (
        <ul className="footer__external-list">
            {externalLinks.map((link) => (
                <li key={link.id} className="footer__external-item">
                    <a href={link.href} target="_blank" rel="noopener noreferrer"
                        className="footer__external-link"
                    >
                        <span>{link.label}</span>
                        <img src={externalLinkIcon} aria-hidden="true"
                            className="footer__external-icon"
                        />
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default FooterExternalLinks;