import { templatesHero } from "../../../data";
import { ItemCard, SectionHeroContainer } from "../../ui";

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