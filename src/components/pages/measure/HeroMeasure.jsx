import { hero } from "../../../data/measurePage";
import { SectionHeroContainer } from "../../ui";

function HeroMeasure() {
    return (
        <SectionHeroContainer
            variant="public"
            title={hero.title}
            description={hero.description}
        />
    )
}

export default HeroMeasure