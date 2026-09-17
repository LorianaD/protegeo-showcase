import { ActionsDashboardFinancialManagement, ChartsDashboardFinancialManagement, DashboardSection, DashboardSectionLoading, HeroDashboard, Main, ManagementAccountFormModal, ManagementAccountPeriod, SectionOverviewContainer, SectionPageActions, StatsDashboardFinancialManagement } from "@/components";
import { addManagementAccountForm, financialManagementDashboard } from "@/data";
import { useBankAccounts, useCreateManagementAccount, useDossierByReference, useFinancialManagementCharts, useFinancialManagementStats, useManagementAccountModal, useManagementAccountYear, useTransactions } from "@/hooks";
import { useOutletContext, useParams } from "react-router";

function FinancialManagement() {
    const {reference} = useParams();

    const { protectedPersons, protectedPersonsLoading, protectedPersonsError, openTransactionModal, transactionRefreshKey, managementAccountRefreshKey, refreshManagementAccounts } = useOutletContext();

    const page = financialManagementDashboard;
    const variantClass = "dashboard";

    const {dossierId, isLoading: dossierLoading, error: dossierError} = useDossierByReference(reference);

    const { 
        managementAccount, 
        managementAccountId, 
        selectedManagementAccountId, 
        year, 
        yearOptions, 
        handleYearChange, 
        loading: yearLoading, 
        error: yearError 
    } = useManagementAccountYear(dossierId, managementAccountRefreshKey);

    const { isManagementAccountModalOpen, managementAccountValues, openManagementAccountModal, closeManagementAccountModal, handleManagementAccountChange } = useManagementAccountModal();

    const { createManagementAccount, loading: managementAccountCreationLoading, error: managementAccountCreationError } = useCreateManagementAccount();

    const managementAccountFields =
        addManagementAccountForm.fields.map((field) => ({
            ...field,
            value: managementAccountValues[field.name] ?? "",
        }));

    const { bankAccounts, loading: bankAccountsLoading, error: bankAccountsError } = useBankAccounts(dossierId);

    const { transactions, loading: transactionsLoading, error: transactionsError } = useTransactions(dossierId, managementAccountId, transactionRefreshKey);

    const bankAccountOptions = bankAccounts.map((bankAccount) => ({
        value: bankAccount.id,
        label: `${bankAccount.account_label} - ${bankAccount.account_number_masked}`,
    }));

    const { statsData, loading: statsLoading, error: statsError } = useFinancialManagementStats(transactions);

    const { monthlyEvolution, expenseBreakdown, loading: chartsLoading, error: chartsError } = useFinancialManagementCharts(transactions);

    const loading = dossierLoading || yearLoading || transactionsLoading || statsLoading || chartsLoading;

    const error = dossierError || yearError || transactionsError || statsError || chartsError;

    function handleQuickAction(actionName) {
        if (actionName === "addManagementAccount") {
            openManagementAccountModal();
            return;
        }

        if (actionName === "addExpense") {
            openTransactionModal({
                transactionType: "expense",
                dossierId,
                managementAccountId,
                bankAccountOptions,
            });

            return;
        }

        if (actionName === "addResource") {
            openTransactionModal({
                transactionType: "resource",
                dossierId,
                managementAccountId,
                bankAccountOptions,
            });
        }
    }

    async function handleManagementAccountSubmit() {
        try {
            await createManagementAccount(
                dossierId,
                managementAccountValues
            );

            closeManagementAccountModal();
            refreshManagementAccounts();
        } catch {
            // The hook stores the error displayed by the modal.
        }
    }

    if (loading) {
        return (
            <Main variant={variantClass}>
                <SectionOverviewContainer>
                    <HeroDashboard page={page} year={selectedManagementAccountId} yearOptions={yearOptions} onYearChange={handleYearChange} yearLoading={yearLoading} protectedPersons={protectedPersons} protectedPersonsLoading={protectedPersonsLoading} protectedPersonsError={protectedPersonsError}/>

                    <DashboardSectionLoading
                        page={page}
                        section={page.messages}
                    />
                </SectionOverviewContainer>

                <ActionsDashboardFinancialManagement
                    page={page}
                    protectedPersons={protectedPersons}
                    onAction={handleQuickAction}
                />
                <SectionPageActions section={page.actions} />
            </Main>
        );
    }

    if (error) {
        return (
            <Main variant={variantClass}>
                <SectionOverviewContainer>
                    <HeroDashboard page={page} year={selectedManagementAccountId} yearOptions={yearOptions} onYearChange={handleYearChange} yearLoading={yearLoading} protectedPersons={protectedPersons} protectedPersonsLoading={protectedPersonsLoading} protectedPersonsError={protectedPersonsError}/>

                    <DashboardSection>
                        <p>{page.messages.error}</p>
                    </DashboardSection>
                </SectionOverviewContainer>

                <ActionsDashboardFinancialManagement
                    page={page}
                    protectedPersons={protectedPersons}
                    onAction={handleQuickAction}
                />
                <SectionPageActions section={page.actions} />
            </Main>
        );
    }

    return (
        <Main variant={ variantClass }>
            <SectionOverviewContainer>
                <HeroDashboard page={page} year={selectedManagementAccountId} yearOptions={yearOptions} onYearChange={handleYearChange} yearLoading={yearLoading} protectedPersons={protectedPersons} protectedPersonsLoading={protectedPersonsLoading} protectedPersonsError={protectedPersonsError}/>

                <ManagementAccountPeriod section={page.period} managementAccount={managementAccount}/>

                {!loading && !error && (
                    <StatsDashboardFinancialManagement page={page} statsData={statsData}/>
                )}

                <ChartsDashboardFinancialManagement section={page.charts} monthlyEvolution={monthlyEvolution} expenseBreakdown={expenseBreakdown}/>              
            </SectionOverviewContainer>

            <ActionsDashboardFinancialManagement
                page={page}
                protectedPersons={protectedPersons}
                onAction={handleQuickAction}
            />

            <SectionPageActions section={page.actions} />

            {isManagementAccountModalOpen && (
                <ManagementAccountFormModal
                    form={addManagementAccountForm}
                    fields={managementAccountFields}
                    onChange={handleManagementAccountChange}
                    onClose={closeManagementAccountModal}
                    onSubmit={handleManagementAccountSubmit}
                    loading={managementAccountCreationLoading}
                    error={managementAccountCreationError}
                />
            )}
        </Main>
    )
}

export default FinancialManagement;