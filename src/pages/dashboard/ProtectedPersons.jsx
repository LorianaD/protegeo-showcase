import { ActionsProtectedPersonsDashboard, AddDossierModal, AddProtectedPersonsDashboard, HeroDashboard, Main, ProtectedPersonsDashboard, SectionOverviewContainer } from "@/components";
import { protectedPersonsDashboard } from "@/data";
import { useProtectedPersons } from "@/hooks";
import { useOutletContext } from "react-router";

function ProtectedPersons() {
    const page = protectedPersonsDashboard;
    const variantClass = "dashboard";

    const { openAddDossierModal, refreshKey } = useOutletContext();

    const { protectedPersons, loading, error } = useProtectedPersons(refreshKey);
    
    return (
        <Main variant={ variantClass }>
            <SectionOverviewContainer>
                <HeroDashboard page={page} />
                <AddProtectedPersonsDashboard page={page} onAddDossier={openAddDossierModal}/>
                <ProtectedPersonsDashboard page={page} protectedPersons={protectedPersons} loading={loading} error={error}/>
                <ActionsProtectedPersonsDashboard page={page} onAddDossier={openAddDossierModal} protectedPersons={protectedPersons}/>
            </SectionOverviewContainer>
        </Main>
    )
}

export default ProtectedPersons;