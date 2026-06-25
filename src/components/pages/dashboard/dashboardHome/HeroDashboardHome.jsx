import { SectionHeroContainer } from "@/components/ui";
import { homeDashboard } from "@/data";

function HeroDashboardHome() {
    return (
        <SectionHeroContainer 
            title={ homeDashboard.hero.title } 
            description={ homeDashboard.hero.description }
        />
    )
}

export default HeroDashboardHome;