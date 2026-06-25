import { SectionHeroContainer } from "@/components/ui";
import { financialManagementDashboard } from "@/data";

function HeroDashboardFinancialManagement() {
    return (
        <SectionHeroContainer 
            title={financialManagementDashboard.hero.title}
            decription={financialManagementDashboard.hero.description}
        />
    )
}

export default HeroDashboardFinancialManagement;