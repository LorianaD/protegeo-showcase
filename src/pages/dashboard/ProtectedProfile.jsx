import { DashboardSection, HeroDashboard, Main, SectionOverviewContainer, SectionPageActions, TabsDashboard } from "@/components";
import { protectedProfileDashboard } from "@/data";
import { useDossierByReference } from "@/hooks";
import { Outlet, useParams } from "react-router";

function ProtectedProfile() {
    const page = protectedProfileDashboard;
    const variantClass = "dashboard";

    const { reference } = useParams();

    const {dossierId, isLoading, error} = useDossierByReference(reference);

    if (isLoading) {
        return (
            <Main variant={ variantClass }>
                <SectionOverviewContainer>
                    <HeroDashboard page={ page }/>
                    <DashboardSection variant="profile">
                        <p>Chargement du dossier...</p>
                    </DashboardSection>
                </SectionOverviewContainer>
                <SectionPageActions section={page.actions} />            
            </Main>
        );
    }

    if (error || !dossierId) {
        return (
            <Main variant={ variantClass }>
                <SectionOverviewContainer>
                    <HeroDashboard page={ page }/>
                    <DashboardSection variant="profile">
                        <p>Le dossier est introuvable ou inaccessible.</p>
                    </DashboardSection>
                </SectionOverviewContainer>
                <SectionPageActions section={page.actions} />            
            </Main>
        );
    }

    return (
        <Main variant={ variantClass }>
            <SectionOverviewContainer>
                <HeroDashboard page={ page }/>
                <TabsDashboard page={ page } />
                <Outlet context={{ page, dossierId }}/>
            </SectionOverviewContainer>
            <SectionPageActions section={page.actions} />            
        </Main>
    )
}

export default ProtectedProfile;