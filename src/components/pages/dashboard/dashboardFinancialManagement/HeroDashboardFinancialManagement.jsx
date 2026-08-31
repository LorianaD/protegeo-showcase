import { SectionHeroContainer } from "@/components/ui";

function HeroDashboardFinancialManagement({page}) {
    
    const section = page.hero;

    return (
        <SectionHeroContainer 
            title={section.title}
            decription={section.description}
        />
    )
}

export default HeroDashboardFinancialManagement;