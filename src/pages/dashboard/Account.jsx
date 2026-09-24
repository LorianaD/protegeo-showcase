import { Main, HeroDashboard, SectionOverviewContainer, TabsDashboard, SectionPageActions, DashboardSection, MonthSelect, ManagementAccountPeriod } from "@/components";
import { accountDashboard } from "@/data";
import { useBankAccounts, useBankingTransactions, useDossierByReference, useManagementAccountMonth, useManagementAccountYear, useTransactions } from "@/hooks";
import { getAnnualFinancialData, getMonthlyFinancialData } from "@/utils";
import { Outlet, useOutletContext, useParams } from "react-router";

function Account() {
    const page = accountDashboard;
    const variantClass = "dashboard";

    const { reference } = useParams();

    const { 
        protectedPersons, 
        protectedPersonsLoading, 
        protectedPersonsError, 

        openTransactionModal, 
        openBankAccountModal,

        managementAccountRefreshKey, 
        transactionRefreshKey,
        bankAccountRefreshKey,
        refreshTransactions,
    } = useOutletContext();

    const {dossierId, isLoading, error} = useDossierByReference(reference);

    const { 
        managementAccount,
        managementAccountId,
        previousManagementAccount,
        selectedManagementAccountId,
        year,
        yearOptions,
        handleYearChange,
        loading: yearLoading,
        error: yearError,
    } = useManagementAccountYear(dossierId, managementAccountRefreshKey);

    const {
        bankAccounts,
        loading: bankAccountsLoading,
        error: bankAccountsError,
    } = useBankAccounts(dossierId, bankAccountRefreshKey);

    const {
        bankingTransactions,
        loading: bankingTransactionsLoading,
        error: bankingTransactionsError,
    } = useBankingTransactions(dossierId);

    const {
        transactions, 
        loading: transactionsLoading, 
        error: transactionsError
    } = useTransactions(dossierId, managementAccountId, transactionRefreshKey);

    const {
        transactions: previousManagementAccountTransactions,
        loading: previousTransactionsLoading,
        error: previousTransactionsError,
    } = useTransactions(dossierId, previousManagementAccount?.id, transactionRefreshKey);

    const {
        month, 
        monthLabel, 
        previousMonthLabel,
        monthOptions, 
        isAnnualView,
        displayedTransactions,
        monthTransactions, 
        monthUpdateDate, 
        previousMonthTransactions, 
        previousMonthUpdateDate, 
        previousResources,
        previousExpenses,
        previousBalance,
        handleMonthChange
    } = useManagementAccountMonth(managementAccount, page, transactions, previousManagementAccountTransactions);

    const bankAccountOptions = bankAccounts.map((bankAccount) => ({
        value: bankAccount.id,
        label: `${bankAccount.account_label} - ${bankAccount.account_number_masked}`,
    }));

    const monthlyFinancialData = getMonthlyFinancialData(
        monthTransactions,
        previousMonthTransactions,
        previousResources,
        previousExpenses
    );

    const annualFinancialData = getAnnualFinancialData(
        transactions,
        previousManagementAccountTransactions
    );

    const loading = isLoading || yearLoading || bankAccountsLoading || transactionsLoading || previousTransactionsLoading || bankingTransactionsLoading;

    const accountError = error || yearError || bankAccountsError || transactionsError || previousTransactionsError || bankingTransactionsError;

    if (loading) {
        return (
            <Main variant={ variantClass }>
                <SectionOverviewContainer>
                    <HeroDashboard page={ page } year={selectedManagementAccountId} yearOptions={yearOptions} onYearChange={handleYearChange} protectedPersons={protectedPersons} protectedPersonsLoading={protectedPersonsLoading} protectedPersonsError={protectedPersonsError} />
                    <TabsDashboard page={ page } />
                    <DashboardSection variant="profile">
                        <p>Chargement du dossier...</p>
                    </DashboardSection>
                </SectionOverviewContainer>
                <SectionPageActions section={page.actions} />            
            </Main>
        );
    }

    if (accountError || !dossierId) {
        return (
            <Main variant={ variantClass }>
                <SectionOverviewContainer>
                    <HeroDashboard page={ page } year={selectedManagementAccountId} yearOptions={yearOptions} onYearChange={handleYearChange} protectedPersons={protectedPersons} protectedPersonsLoading={protectedPersonsLoading} protectedPersonsError={protectedPersonsError} />
                    <TabsDashboard page={ page } />
                    <DashboardSection variant="profile">
                        <p>Le dossier est introuvable ou inaccessible.</p>
                    </DashboardSection>
                </SectionOverviewContainer>
                <SectionPageActions section={page.actions} />
            </Main>
        );
    }

    return (
        <Main variant={ variantClass }>
            <SectionOverviewContainer>
                <HeroDashboard page={ page } year={selectedManagementAccountId} yearOptions={yearOptions} onYearChange={handleYearChange} protectedPersons={protectedPersons} protectedPersonsLoading={protectedPersonsLoading} protectedPersonsError={protectedPersonsError}/>
                <ManagementAccountPeriod section={page.period} managementAccount={managementAccount}/>
                <TabsDashboard page={ page } />
                <MonthSelect label={page.monthNav.label} month={month} options={monthOptions} onChange={handleMonthChange} loading={yearLoading}/>
                <Outlet context={{
                    page,
                    dossierId,
                    year,
                    month,
                    monthLabel,
                    previousMonthLabel,
                    isAnnualView,
                    displayedTransactions,
                    managementAccount,
                    managementAccountId,
                    previousManagementAccount,
                    bankAccounts,
                    bankingTransactions,
                    transactions,
                    monthTransactions,
                    monthUpdateDate,
                    previousMonthTransactions,
                    previousMonthUpdateDate,
                    monthlyFinancialData,
                    annualFinancialData,
                    bankAccountOptions,
                    openTransactionModal,
                    openBankAccountModal,
                    refreshTransactions,
                }} />
            </SectionOverviewContainer>
            <SectionPageActions section={page.actions} /> 
        </Main>
    )
}

export default Account;