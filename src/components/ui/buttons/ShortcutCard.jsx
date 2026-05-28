import { Link } from "react-router";
import { IconBand } from "../badges";

function ShortcutCard({ img, icon, iconColor, title, to, description, variant }) {
    return (
        <Link to={to} className={`shortcut-card shortcut-card--${variant}`}>
            {(img || icon) && (
                <div className="shortcut-card__icon">
                    {img ? (
                        <img
                            src={img}
                            alt={title}
                            className="shortcut-card__img"
                        />
                    ) : (
                        <IconBand
                            sign={icon}
                            color={iconColor}
                        />
                    )}
                </div>
            )}

            <div className="shortcut-card__content">
                {title && (
                    <h3 className={`shortcut-card__title shortcut-card__title--${variant}`}>
                        { title }
                    </h3>
                )}
                {description && (
                    <p className="shortcut-card__description">
                        { description }
                    </p>
                )}                 
            </div>
       
        </Link>
    )
}

export default ShortcutCard;