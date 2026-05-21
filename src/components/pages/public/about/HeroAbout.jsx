import { aboutHero } from "../../../../data";
import { SectionHeroContainer } from "../../../ui"

function HeroAbout() {
    return (
        <SectionHeroContainer
            variant="public"
            title={aboutHero.title}
            description={aboutHero.description}
        />
    )
}

export default HeroAbout;