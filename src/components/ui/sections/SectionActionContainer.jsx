function SectionActionContainer({ title, children , variant="default" }) {
    return (
        <div className={`section-action-container section-action-container--${variant}`}>
            {title && (
                <h3 className="section-action-container__title">
                    {title}
                </h3>
            )}

            { children }
        </div>
    )
}

export default SectionActionContainer;