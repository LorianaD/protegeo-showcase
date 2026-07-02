import { HeroDashboard, Main, SectionOverviewContainer, StatsDashboardHome } from "@/components";
import { homeDashboard } from "@/data";

function Dashboard() {
    const page = homeDashboard;
    const variantClass = "dashboard";
    return (
        <Main variant={ variantClass }>
            <SectionOverviewContainer>
                <HeroDashboard page={ page } />
                <StatsDashboardHome />
            </SectionOverviewContainer>
        </Main>
    )
}

export default Dashboard;