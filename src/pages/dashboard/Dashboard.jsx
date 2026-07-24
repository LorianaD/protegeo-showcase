import { HeroDashboard, Main, ProtectedPersonsDashboardHome, SectionOverviewContainer, StatsDashboardHome } from "@/components";
import { homeDashboard } from "@/data";

function Dashboard() {
    const page = homeDashboard;
    const variantClass = "dashboard";
    return (
        <Main variant={ variantClass }>
            <SectionOverviewContainer>
                <HeroDashboard page={ page } />
                <StatsDashboardHome page={ page } />
                <ProtectedPersonsDashboardHome page={ page }/>
            </SectionOverviewContainer>
        </Main>
    )
}

export default Dashboard;