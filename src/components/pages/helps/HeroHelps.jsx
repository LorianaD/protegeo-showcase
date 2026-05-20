import { hero } from "../../../data/helpsPage";
import { SectionHeroContainer } from "../../ui";

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