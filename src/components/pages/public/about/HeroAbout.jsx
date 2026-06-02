import { aboutHero } from "@/data";
import { SectionHeroContainer } from "@/components";

function HeroAbout() {
    return (
        <SectionHeroContainer
            variant="public"
            title={aboutHero.title}
            description={aboutHero.description}
            btn={aboutHero.btnLabel}
            to={aboutHero.btnLink}
        />
    )
}

export default HeroAbout;