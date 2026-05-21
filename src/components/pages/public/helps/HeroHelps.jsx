import { helpsHero as hero } from "@/data";
import { SectionHeroContainer } from "@/components/ui";

function HeroHelps() {
    return (
        <SectionHeroContainer 
            variant="public"
            title={hero.title}
            description={hero.description}
        />        
    )
}

export default HeroHelps;
