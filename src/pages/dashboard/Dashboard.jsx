import { HeroDashboardHome, Main, SectionOverviewContainer, StatsDashboardHome } from "@/components";

function Dashboard() {
    return (
        <Main variant="dashboard">
            <SectionOverviewContainer>
                <HeroDashboardHome />
                <StatsDashboardHome />
            </SectionOverviewContainer>
        </Main>
    )
}

export default Dashboard;