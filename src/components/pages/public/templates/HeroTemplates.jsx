import { templatesHero } from "@/data";
import { ItemCard, SectionHeroContainer } from "@/components/ui";

function HeroTemplates() {
    return (
        <SectionHeroContainer variant="public" title={templatesHero.title}>
            <ItemCard
                lists={templatesHero.lists}
                infos={templatesHero.infos}
            />
        </SectionHeroContainer>
    )
}

export default HeroTemplates;