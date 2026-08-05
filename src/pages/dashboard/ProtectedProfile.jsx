import { HeroDashboard, Main, SectionOverviewContainer, TabsDashboard } from "@/components";
import { protectedProfileDashboard } from "@/data";
import { useDossierByReference } from "@/hooks";
import { Outlet, useParams } from "react-router";

function ProtectedProfile() {
    const page = protectedProfileDashboard;
    const variantClass = "dashboard";

    const { reference } = useParams();
    // console.log(reference);

    const {dossierId, isLoading, error} = useDossierByReference(reference);
    // console.log(dossierId);

    if (isLoading) {
        return (
            <Main variant={variantClass}>
                <p>Chargement du dossier...</p>
            </Main>
        );
    }

    if (error || !dossierId) {
        return (
            <Main variant={variantClass}>
                <p>Le dossier est introuvable ou inaccessible.</p>
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

        </Main>
    )
}

export default ProtectedProfile;