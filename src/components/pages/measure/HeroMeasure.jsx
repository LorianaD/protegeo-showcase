import { measureHero } from "../../../data";
import { SectionHeroContainer } from "../../ui";

function HeroMeasure() {
    return (
        <SectionHeroContainer
            variant="public"
            title={measureHero.title}
            description={measureHero.description}
        />
    )
}

export default HeroMeasure