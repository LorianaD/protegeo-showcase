import PrimaryButton from "./PrimaryButton.jsx";

function SectionHeroContainer({ title, description, btn, to }) {
    return(
        <section className="hero-container">
            <h2 className="hero-container_title">
                { title }
            </h2>
            <p className="hero-container_description">
                { description }
            </p>
            {btn && (
                <PrimaryButton children={ btn } to={ to } />
            )}
        </section>
    )
}

export default SectionHeroContainer;