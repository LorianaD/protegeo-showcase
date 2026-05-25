import { InfoWarning, SectionHeroContainer } from "@/components/ui";
import { contactUsHero } from "@/data";

function HeroContactUs() {
    return (
        <SectionHeroContainer title={contactUsHero.title} description={contactUsHero.description}>
            <InfoWarning
                icon={contactUsHero.warning.icon}
                title={contactUsHero.warning.title}
                description={contactUsHero.warning.description}
                important={contactUsHero.warning.important}
            />
        </SectionHeroContainer>
    )
}

export default HeroContactUs;