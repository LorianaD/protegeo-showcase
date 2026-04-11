function SectionContainer({title, children}) {
    return(
        <section className="section-container">
            <h2 className="section-container__title">
                { title }
            </h2>
            <div className="section-container__contents">
                { children }
            </div>
        </section>
    )
}

export default SectionContainer;