function SectionContainer({ id, title, description, children, variant = "center" }) {
    return(
        <section id={id} className={`section-container section-container--${variant}`}>
            <h2 className="section-container__title">
                { title }
            </h2>
            {description && (
                <p className="section-container__description">
                    { description }
                </p>
            )}
            <div className="section-container__contents">
                { children }
            </div>
        </section>
    )
}

export default SectionContainer;