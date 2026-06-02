import { SectionHeroContainer } from "@/components/ui";
import { discoverHero } from "@/data";

function HeroDiscover() {
    const section = discoverHero;
    return (
        <SectionHeroContainer
            title={section.title}
            description={section.description}
            variant="public"
        />
    )
}

export default HeroDiscover;