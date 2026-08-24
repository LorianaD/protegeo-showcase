import { ActionsDashboardHome, HeroDashboard, Main, ProtectedPersonsDashboardHome, SectionOverviewContainer, StatsDashboardHome } from "@/components";
import { homeDashboard } from "@/data";
import { useProtectedPersons } from "@/hooks";
import { useOutletContext } from "react-router";

function Dashboard() {
    const page = homeDashboard;
    const variantClass = "dashboard";
    const variantSection = "home";

    const { openAddDossierModal } = useOutletContext();

    const { protectedPersons, loading, error } = useProtectedPersons();
    return (
        <Main variant={variantClass}>
            <SectionOverviewContainer>
                <HeroDashboard page={page} />
                <StatsDashboardHome page={page} protectedPersons={protectedPersons}/>
                <ProtectedPersonsDashboardHome page={page} protectedPersons={protectedPersons} loading={loading} error={error} variant={variantSection}/>
                <ActionsDashboardHome page={page} protectedPersons={protectedPersons} onAddDossier={openAddDossierModal}/>
            </SectionOverviewContainer>
        </Main>
    )
}

export default Dashboard;