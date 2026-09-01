import { ActionsDashboardFinancialManagement, ChartsDashboardFinancialManagement, DashboardSection, DashboardSectionLoading, HeroDashboard, Main, SectionOverviewContainer, SectionPageActions, StatsDashboardFinancialManagement } from "@/components";
import { financialManagementDashboard } from "@/data";
import { useBankAccounts, useDossierByReference, useFinancialManagementCharts, useFinancialManagementStats, useManagementAccountYear, useTransactions } from "@/hooks";
import { useOutletContext, useParams } from "react-router";

function FinancialManagement() {
    const {reference} = useParams();

    const { protectedPersons, protectedPersonsLoading, protectedPersonsError, openTransactionModal } = useOutletContext();

    const page = financialManagementDashboard;
    const variantClass = "dashboard";

    const {dossierId, isLoading: dossierLoading, error: dossierError} = useDossierByReference(reference);

    const { managementAccountId, year, yearOptions, handleYearChange, loading: yearLoading, error: yearError } = useManagementAccountYear(dossierId);

    const { bankAccounts, loading: bankAccountsLoading, error: bankAccountsError } = useBankAccounts(dossierId);

    const { transactions, loading: transactionsLoading, error: transactionsError } = useTransactions(dossierId, managementAccountId);

    const bankAccountOptions = bankAccounts.map((bankAccount) => ({
        value: bankAccount.id,
        label: `${bankAccount.account_label} - ${bankAccount.account_number_masked}`,
    }));

    const { statsData, loading: statsLoading, error: statsError } = useFinancialManagementStats(transactions);

    const { monthlyEvolution, expenseBreakdown, loading: chartsLoading, error: chartsError } = useFinancialManagementCharts(transactions);

    const loading = dossierLoading || yearLoading || transactionsLoading || statsLoading || chartsLoading;

    const error = dossierError || yearError || transactionsError || statsError || chartsError;

    function handleQuickAction(actionName) {
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

    if (loading) {
        return (
            <Main variant={variantClass}>
                <SectionOverviewContainer>
                    <HeroDashboard page={page} year={year} yearOptions={yearOptions} onYearChange={handleYearChange} yearLoading={yearLoading} protectedPersons={protectedPersons} protectedPersonsLoading={protectedPersonsLoading} protectedPersonsError={protectedPersonsError}/>

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
                    <HeroDashboard page={page} year={year} yearOptions={yearOptions} onYearChange={handleYearChange} yearLoading={yearLoading} protectedPersons={protectedPersons} protectedPersonsLoading={protectedPersonsLoading} protectedPersonsError={protectedPersonsError}/>

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
                <HeroDashboard page={page} year={year} yearOptions={yearOptions} onYearChange={handleYearChange} yearLoading={yearLoading} protectedPersons={protectedPersons} protectedPersonsLoading={protectedPersonsLoading} protectedPersonsError={protectedPersonsError}/>

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
        </Main>
    )
}

export default FinancialManagement;