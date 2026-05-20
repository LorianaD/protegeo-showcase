import { stepsHero as hero } from "../../../data";
import { SectionHeroContainer } from "../../ui";

function HeroSteps() {
    return (
        <SectionHeroContainer 
            variant="public" 
            title={hero.title} 
            description={hero.description} 
        />
    )
}

export default HeroSteps;