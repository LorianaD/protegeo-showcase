function SectionContainer({ id, title, description, children, variant = "center", variantChindren = "columne" }) {
    return(
        <section id={id} className={`section-container section-container--${variant}`}>
            {title && (
                <h2 className="section-container__title">
                    { title }
                </h2>
            )}
            {description && (
                <div className="section-container__description">
                    {Array.isArray(description) ? (

                        description.map((text, index) => (
                            <p key={index}>
                                {text}
                            </p>
                        ))

                    ) : (

                        <p>{description}</p>

                    )}
                </div>
            )}
            <div className={`section-container__contents section-container__${variantChindren}`}>
                { children }
            </div>
        </section>
    )
}

export default SectionContainer;