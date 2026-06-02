function DiscoverBlock({ title, description, screenshot, alt, variant = "default", format }) {
    return (
        <div className={`discover-block discover-block--${variant}`}>
            <div className={`discover-block__content discover-block__content--${variant}`}>
                <h3 className="discover-block__title">
                    {title}
                </h3>

                <div className="discover-block__description">
                    {Array.isArray(description) ? (
                        description.map((item) => (
                            <p key={item}>{item}</p>
                        ))
                    ) : (
                        <p>{description}</p>
                    )}
                </div>
            </div>

            <div className="discover-block__visual">
                <img
                    src={screenshot}
                    alt={alt}
                    className={`discover-block__img discover-block__img--${format}`}
                />
            </div>
        </div>
    );
}

export default DiscoverBlock;