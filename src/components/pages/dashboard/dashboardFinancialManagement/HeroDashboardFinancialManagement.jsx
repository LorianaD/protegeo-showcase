import { SectionHeroContainer } from "@/components/ui";
import { financialManagementDashboard } from "@/data";

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