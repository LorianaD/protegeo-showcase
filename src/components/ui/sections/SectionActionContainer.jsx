function SectionActionContainer({ children , variant="default" }) {
    return (
        <div className={`section-action-container section-action-container--${variant}`}>
            { children }
        </div>
    )
}

export default SectionActionContainer;