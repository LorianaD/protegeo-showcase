import { ActionsDashboardHome, HeroDashboard, Main, ProtectedPersonsDashboardHome, SectionOverviewContainer, StatsDashboardHome } from "@/components";
import { homeDashboard } from "@/data";
import { useProtectedPersons } from "@/hooks";

function Dashboard() {
    const page = homeDashboard;
    const variantClass = "dashboard";
    const variantSection = "home";

    const { protectedPersons, loading, error } = useProtectedPersons();
    return (
        <Main variant={variantClass}>
            <SectionOverviewContainer>
                <HeroDashboard page={page} />
                <StatsDashboardHome page={page} protectedPersons={protectedPersons}/>
                <ProtectedPersonsDashboardHome page={page} protectedPersons={protectedPersons} loading={loading} error={error} variant={variantSection}/>
                <ActionsDashboardHome page={page} />
            </SectionOverviewContainer>
        </Main>
    )
}

export default Dashboard;