import { hero } from "../../../data/measurePage";
import SectionHeroContainer from "../../ui/SectionHeroContainer";

function HeroMeasure() {
    return (
        <SectionHeroContainer
            title={hero.title}
            description={hero.description}
        />
    )
}

export default HeroMeasure