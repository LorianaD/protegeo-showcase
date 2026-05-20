import { hero } from "../../../data/templatesPage";
import { ItemCard, SectionHeroContainer } from "../../ui";

function HeroTemplates() {
    return (
        <SectionHeroContainer variant="public" title={hero.title}>
            <ItemCard
                lists={hero.lists}
                infos={hero.infos}
            />
        </SectionHeroContainer>
    )
}

export default HeroTemplates;