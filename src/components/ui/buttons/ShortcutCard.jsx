import { Link } from "react-router";

function ShortcutCard({ img, title, to, description }) {
    return (
        <Link to={to} className="shortcut-card">
            {img && (
                <div className="shortcut-card__icon">
                    <img src={img} alt={title} className="shortcut-card__img"/>
                </div>
            )}
            {title && (
                <h3 className="shortcut-card__title">
                    { title }
                </h3>
            )}
            {description && (
                <p className="shortcut-card__description">
                    { description }
                </p>
            )}        
        </Link>
    )
}

export default ShortcutCard;