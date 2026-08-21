import { ActionsProtectedPersonsDashboard, AddDossierModal, AddProtectedPersonsDashboard, HeroDashboard, Main, ProtectedPersonsDashboard, SectionOverviewContainer } from "@/components";
import { protectedPersonsDashboard } from "@/data";
import { useAddDossierModal } from "@/hooks";

function ProtectedPersons() {
    const page = protectedPersonsDashboard;
    const variantClass = "dashboard";

    const { isAddDossierModalOpen, openAddDossierModal, closeAddDossierModal } = useAddDossierModal();
    
    return (
        <Main variant={ variantClass }>
            <SectionOverviewContainer>
                <HeroDashboard page={page} />
                <AddProtectedPersonsDashboard page={page} onAddDossier={openAddDossierModal}/>
                <ProtectedPersonsDashboard page={page}/>
                <ActionsProtectedPersonsDashboard page={page} onAddDossier={openAddDossierModal}/>

                <AddDossierModal open={isAddDossierModalOpen} onClose={closeAddDossierModal}/>
            </SectionOverviewContainer>
        </Main>
    )
}

export default ProtectedPersons;