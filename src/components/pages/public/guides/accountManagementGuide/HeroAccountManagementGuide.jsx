import { SectionHeroContainer } from "@/components/ui";
import { accountManagementGuideHero } from "@/data";

function HeroAccountManagementGuide() {
    const section = accountManagementGuideHero;
    const target = section.target;
    const title = section.title;
    const description = section.description;
    return (
        <SectionHeroContainer 
            title={title} 
            description={description}
            target={target}
        />
    )
}

export default HeroAccountManagementGuide;