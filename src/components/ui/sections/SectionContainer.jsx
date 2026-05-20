function SectionContainer({title, description, children}) {
    return(
        <section className="section-container">
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