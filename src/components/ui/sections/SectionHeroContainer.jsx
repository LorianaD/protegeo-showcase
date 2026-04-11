import PrimaryButton from "../buttons/PrimaryButton.jsx";

function SectionHeroContainer({ title, description, btn, to, variant = "default" }) {
    return(
        <section className={`hero-container hero--${variant}`}>
            <h2 className="hero-container__title">
                { title }
            </h2>
            <p className="hero-container__description">
                { description }
            </p>
            {btn && to && (
                <PrimaryButton to={ to } >
                    { btn }
                </PrimaryButton>
            )}
        </section>
    )
}

export default SectionHeroContainer;