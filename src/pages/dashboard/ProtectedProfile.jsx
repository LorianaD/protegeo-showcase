import { DashboardSection, HeroDashboard, Main, SectionOverviewContainer, SectionPageActions, TabsDashboard } from "@/components";
import { protectedProfileDashboard } from "@/data";
import { useDossierByReference } from "@/hooks";
import { Outlet, useOutletContext, useParams } from "react-router";

function ProtectedProfile() {
    const page = protectedProfileDashboard;
    const variantClass = "dashboard";

    const { reference } = useParams();

    const { protectedPersons, protectedPersonsLoading, protectedPersonsError } = useOutletContext();

    const {dossierId, isLoading, error} = useDossierByReference(reference);

    if (isLoading) {
        return (
            <Main variant={ variantClass }>
                <SectionOverviewContainer>
                    <HeroDashboard page={ page } protectedPersons={protectedPersons} protectedPersonsLoading={protectedPersonsLoading} protectedPersonsError={protectedPersonsError}/>
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
                    <HeroDashboard page={ page } protectedPersons={protectedPersons} protectedPersonsLoading={protectedPersonsLoading} protectedPersonsError={protectedPersonsError}/>
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
                <HeroDashboard page={ page } protectedPersons={protectedPersons} protectedPersonsLoading={protectedPersonsLoading} protectedPersonsError={protectedPersonsError}/>
                <TabsDashboard page={ page } />
                <Outlet context={{ page, dossierId }}/>
            </SectionOverviewContainer>
            <SectionPageActions section={page.actions} />            
        </Main>
    )
}

export default ProtectedProfile;