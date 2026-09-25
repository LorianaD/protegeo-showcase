import { Outlet } from "react-router";
import { Siderbar } from "./siderbar";
import Footer from "../Footer";
import { useAddDossierModal, useBankAccountModal, useBankingTransactionModal, useProtectedPersons, useTransactionModal } from "@/hooks";
import { AddDossierModal, BankAccountFormModal, BankingTransactionFormModal, TransactionFormModal } from "@/components/ui";
import { useState } from "react";

function DashboardMainLayout() {
    const [refreshKey, setRefreshKey] = useState(0);
    const [transactionRefreshKey, setTransactionRefreshKey] = useState(0);
    const [managementAccountRefreshKey, setManagementAccountRefreshKey] = useState(0);
    const [bankAccountRefreshKey, setBankAccountRefreshKey] = useState(0);
    const [bankingTransactionRefreshKey, setBankingTransactionRefreshKey] = useState(0);

    const {
        isAddDossierModalOpen,
        openAddDossierModal,
        closeAddDossierModal
    } = useAddDossierModal();

    const {
        isTransactionModalOpen,
        transactionModalData,
        openTransactionModal,
        closeTransactionModal
    } = useTransactionModal(refreshKey);

    const {
        protectedPersons,
        loading: protectedPersonsLoading,
        error: protectedPersonsError,
    } = useProtectedPersons(refreshKey);

    const {
        isBankAccountModalOpen,
        bankAccountModalData,
        openBankAccountModal,
        closeBankAccountModal,
    } = useBankAccountModal();

    const {
        isBankingTransactionModalOpen,
        bankingTransactionModalData,
        openBankingTransactionModal,
        closeBankingTransactionModal,
    } = useBankingTransactionModal();

    function refreshProtectedPersons() {
        setRefreshKey((currentKey) => currentKey + 1);
    }

    function refreshManagementAccounts() {
        setManagementAccountRefreshKey(
            (currentKey) => currentKey + 1
        );
    }

    function refreshTransactions() {
        setTransactionRefreshKey((currentKey) => currentKey + 1);
    }

    function refreshBankAccounts() {
        setBankAccountRefreshKey((currentKey) => currentKey + 1);
    }

    function refreshBankingTransactions() {
        setBankingTransactionRefreshKey(
            (currentKey) => currentKey + 1
        );
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

                <Outlet context={{
                    openAddDossierModal,
                    refreshKey,
                    protectedPersons,
                    protectedPersonsLoading,
                    protectedPersonsError,

                    openTransactionModal,
                    transactionRefreshKey,
                    refreshTransactions,

                    managementAccountRefreshKey,
                    refreshManagementAccounts,

                    openBankAccountModal,
                    bankAccountRefreshKey,
                    refreshBankAccounts,

                    openBankingTransactionModal,
                    bankingTransactionRefreshKey,
                    refreshBankingTransactions,
                }}/>

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
                    startDate={transactionModalData?.startDate}
                    endDate={transactionModalData?.endDate}
                    onClose={closeTransactionModal}
                    onCreated={refreshTransactions}
                />

                <BankAccountFormModal
                    open={isBankAccountModalOpen}
                    dossierId={bankAccountModalData?.dossierId}
                    bankAccount={bankAccountModalData?.bankAccount}
                    onClose={closeBankAccountModal}
                    onCreated={refreshBankAccounts}
                />

                <BankingTransactionFormModal
                    open={isBankingTransactionModalOpen}
                    dossierId={bankingTransactionModalData?.dossierId}
                    bankAccounts={bankingTransactionModalData?.bankAccounts ?? []}
                    onClose={closeBankingTransactionModal}
                    onCreated={refreshBankingTransactions}
                />
            </div>

            <Footer/>
        </div>
    );
}

export default DashboardMainLayout;