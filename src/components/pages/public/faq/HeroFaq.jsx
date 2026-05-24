import { SectionHeroContainer } from "@/components/ui";
import { faqHero } from "@/data";

function HeroFaq() {
    return (
        <SectionHeroContainer 
            title={faqHero.title}
            description={faqHero.description}
            btn={faqHero.btnLabel}
            to={faqHero.btnLink}
            variant="public"
        />
    )
}

export default HeroFaq;