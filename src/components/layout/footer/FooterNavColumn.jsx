import { Link } from "react-router";

function FooterNavColumn({ title, links }) {
    return (
        <div className="footer__nav-column">
            <h2 className="footer__title">{title}</h2>
            <ul className="footer__list">
                {links.map((link) => (
                    <li key={link.id} className="footer__list-item">
                        <Link to={link.to} className="footer__link">
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FooterNavColumn;