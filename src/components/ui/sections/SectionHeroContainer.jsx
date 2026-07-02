import { Target } from "../badges";
import { Button } from "../buttons";


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
                <Button to={ to } label={ btn } variant="primary"/>
            )}
            
        </section>
    )
}

export default SectionHeroContainer;