import PrimaryButton from "../buttons/PrimaryButton.jsx";
import { Target } from "../buttons";

function SectionHeroContainer({ title, description, target, children, btn, to, variant = "default" }) {
    return(
        <section className={`hero-container hero--${variant}`}>

            <Target value={target}/>
            
            <h2 className="hero-container__title">
                { title }
            </h2>

            {description && (
                <p className="hero-container__description">
                    { description }
                </p>
            )}

            {children}

            {btn && to && (
                <PrimaryButton to={ to } >
                    { btn }
                </PrimaryButton>
            )}
            
        </section>
    )
}

export default SectionHeroContainer;