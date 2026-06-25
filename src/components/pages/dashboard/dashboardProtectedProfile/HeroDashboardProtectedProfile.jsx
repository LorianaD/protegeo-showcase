import { SectionHeroContainer } from "@/components/ui";
import { protectedProfileDashboard } from "@/data";

function HeroDashboardProtectedProfile() {
    const section = protectedProfileDashboard.hero;
    return (
        <SectionHeroContainer 
            title={ section.title } 
            description={ section.description }
        />
    )
}

export default HeroDashboardProtectedProfile;