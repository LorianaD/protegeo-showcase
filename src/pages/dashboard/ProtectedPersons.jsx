import { ActionsProtectedPersonsDashboard, AddDossierModal, AddProtectedPersonsDashboard, HeroDashboard, Main, ProtectedPersonsDashboard, SectionOverviewContainer } from "@/components";
import { protectedPersonsDashboard } from "@/data";
import { useProtectedPersons } from "@/hooks";
import { useOutletContext } from "react-router";

function ProtectedPersons() {
    const page = protectedPersonsDashboard;
    const variantClass = "dashboard";

    const { openAddDossierModal, protectedPersons, protectedPersonsLoading, protectedPersonsError } = useOutletContext();
    
    return (
        <Main variant={ variantClass }>
            <SectionOverviewContainer>
                <HeroDashboard page={page} protectedPersons={protectedPersons} protectedPersonsLoading={protectedPersonsLoading} protectedPersonsError={protectedPersonsError}/>
                <AddProtectedPersonsDashboard page={page} onAddDossier={openAddDossierModal}/>
                <ProtectedPersonsDashboard page={page} protectedPersons={protectedPersons} loading={protectedPersonsLoading} error={protectedPersonsError}/>
                <ActionsProtectedPersonsDashboard page={page} onAddDossier={openAddDossierModal} protectedPersons={protectedPersons}/>
            </SectionOverviewContainer>
        </Main>
    )
}

export default ProtectedPersons;