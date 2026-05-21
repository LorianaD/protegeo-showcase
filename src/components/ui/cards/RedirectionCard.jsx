import { Link } from "react-router";

function RedirectionCard({name, img, title, description, link}) {
    
    const isAnchorLink = link.startsWith("#");

    return(
        <article className="redirection-card">
            <div className="redirection-card__icon">
                <img src={img} alt={name} className="redirection-card__img"/>
            </div>
            <h3 className="redirection-card__title">
                { title }
            </h3>
            <p className="redirection-card__description">
                { description }
            </p>
            {isAnchorLink ? (
                <a href={link} className="redirection-card__link">
                    En savoir plus →
                </a>
            ) : (
                <Link to={link} className="redirection-card__link">
                    En savoir plus →
                </Link>
            )}
        </article>
    )
}

export default RedirectionCard;