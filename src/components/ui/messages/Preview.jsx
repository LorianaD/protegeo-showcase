function Preview({ badge, title, description, img, imgAlt, link = "/", linkLabel = "Retour à l’accueil" }) {
    return (
        <section className="preview">
            <div className="preview__content">
                <p className="preview__badge">
                    {badge}
                </p>

                <h2 className="preview__title">
                    {title}
                </h2>

                <p className="preview__description">
                    {description}
                </p>

                <div className="preview__actions">
                    <a href={link} className="preview__link">
                        {linkLabel}
                    </a>
                </div>
            </div>

            <div className="preview__visual">
                <img
                    src={img}
                    alt={imgAlt}
                    className="preview__img"
                />
            </div>
        </section>
    );
}

export default Preview;