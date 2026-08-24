import { ActionsProtectedPersonsDashboard, AddDossierModal, AddProtectedPersonsDashboard, HeroDashboard, Main, ProtectedPersonsDashboard, SectionOverviewContainer } from "@/components";
import { protectedPersonsDashboard } from "@/data";
import { useOutletContext } from "react-router";

function ProtectedPersons() {
    const page = protectedPersonsDashboard;
    const variantClass = "dashboard";

    const { openAddDossierModal, refreshKey } = useOutletContext();
    
    return (
        <Main variant={ variantClass }>
            <SectionOverviewContainer>
                <HeroDashboard page={page} />
                <AddProtectedPersonsDashboard page={page} onAddDossier={openAddDossierModal}/>
                <ProtectedPersonsDashboard page={page} refreshKey={refreshKey}/>
                <ActionsProtectedPersonsDashboard page={page} onAddDossier={openAddDossierModal}/>

                {/* <AddDossierModal open={isAddDossierModalOpen} onClose={closeAddDossierModal} onCreated={refreshProtectedPersons}/> */}
            </SectionOverviewContainer>
        </Main>
    )
}

export default ProtectedPersons;