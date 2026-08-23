import { ActionsProtectedPersonsDashboard, AddDossierModal, AddProtectedPersonsDashboard, HeroDashboard, Main, ProtectedPersonsDashboard, SectionOverviewContainer } from "@/components";
import { protectedPersonsDashboard } from "@/data";
import { useAddDossierModal } from "@/hooks";
import { useState } from "react";

function ProtectedPersons() {
    const page = protectedPersonsDashboard;
    const variantClass = "dashboard";
    const [refreshKey, setRefreshKey] = useState(0);

    function refreshProtectedPersons() {
        setRefreshKey((currentKey) => currentKey + 1);
    }

    const { isAddDossierModalOpen, openAddDossierModal, closeAddDossierModal } = useAddDossierModal();
    
    return (
        <Main variant={ variantClass }>
            <SectionOverviewContainer>
                <HeroDashboard page={page} />
                <AddProtectedPersonsDashboard page={page} onAddDossier={openAddDossierModal}/>
                <ProtectedPersonsDashboard page={page} refreshKey={refreshKey}/>
                <ActionsProtectedPersonsDashboard page={page} onAddDossier={openAddDossierModal}/>

                <AddDossierModal open={isAddDossierModalOpen} onClose={closeAddDossierModal} onCreated={refreshProtectedPersons}/>
            </SectionOverviewContainer>
        </Main>
    )
}

export default ProtectedPersons;