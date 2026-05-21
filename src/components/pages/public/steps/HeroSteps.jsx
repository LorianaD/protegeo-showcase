import { stepsHero as hero } from "@/data";
import { SectionHeroContainer } from "@/components/ui";

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