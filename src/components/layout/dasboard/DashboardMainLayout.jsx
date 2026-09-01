import { Outlet } from "react-router";
import { Siderbar } from "./siderbar";
import Footer from "../Footer";
import { useAddDossierModal, useProtectedPersons, useTransactionModal } from "@/hooks";
import { AddDossierModal, TransactionFormModal } from "@/components/ui";
import { useState } from "react";

function DashboardMainLayout() {
    const [refreshKey, setRefreshKey] = useState(0);

    const {isAddDossierModalOpen, openAddDossierModal, closeAddDossierModal} = useAddDossierModal();

    const {isTransactionModalOpen, transactionModalData, openTransactionModal, closeTransactionModal} = useTransactionModal(refreshKey);

    const {protectedPersons, loading: protectedPersonsLoading, error: protectedPersonsError,} = useProtectedPersons(refreshKey);
    
    function refreshProtectedPersons() {
        setRefreshKey((currentKey) => currentKey + 1);
    }

    return (
        <div>
            <div className="dashboard-main-layout">
                <Siderbar 
                    onAddDossier={openAddDossierModal} 
                    protectedPersons={protectedPersons} 
                    protectedPersonsLoading={protectedPersonsLoading} 
                    protectedPersonsError={protectedPersonsError}
                />

                <Outlet context={{openAddDossierModal, refreshKey, protectedPersons, protectedPersonsLoading, protectedPersonsError, openTransactionModal}}/>

                <AddDossierModal 
                    open={isAddDossierModalOpen} 
                    onClose={closeAddDossierModal} 
                    onCreated={refreshProtectedPersons}
                />
                
                <TransactionFormModal
                    open={isTransactionModalOpen}
                    transactionType={transactionModalData?.transactionType}
                    dossierId={transactionModalData?.dossierId}
                    managementAccountId={transactionModalData?.managementAccountId}
                    bankAccountOptions={transactionModalData?.bankAccountOptions}
                    onClose={closeTransactionModal}
                />
            </div>
            <Footer/>
        </div>
    )
}

export default DashboardMainLayout;