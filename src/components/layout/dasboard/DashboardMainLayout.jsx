import { Outlet } from "react-router";
import { Siderbar } from "./siderbar";
import Footer from "../Footer";
import { useAddDossierModal } from "@/hooks";
import { AddDossierModal } from "@/components/ui";
import { useState } from "react";

function DashboardMainLayout() {
    const [refreshKey, setRefreshKey] = useState(0);

    const {isAddDossierModalOpen, openAddDossierModal, closeAddDossierModal} = useAddDossierModal();

    function refreshProtectedPersons() {
        setRefreshKey((currentKey) => currentKey + 1);
    }

    return (
        <div>
            <div className="dashboard-main-layout">
                <Siderbar onAddDossier={openAddDossierModal} refreshKey={refreshKey}/>

                <Outlet context={{openAddDossierModal, refreshKey}}/>

                <AddDossierModal open={isAddDossierModalOpen} onClose={closeAddDossierModal} onCreated={refreshProtectedPersons}/>
            </div>
            <Footer/>
        </div>
    )
}

export default DashboardMainLayout;