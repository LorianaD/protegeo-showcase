import { SectionHeroContainer } from "@/components/ui";

function HeroDashboardHome({page}) {
    const section = page.hero;
    return (
        <SectionHeroContainer 
            title={ section.title } 
            description={ section.description }
        />
    )
}

export default HeroDashboardHome;