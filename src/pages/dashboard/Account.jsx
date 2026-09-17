import { Main, HeroDashboard, SectionOverviewContainer, TabsDashboard, SectionPageActions, DashboardSection, MonthSelect, ManagementAccountPeriod } from "@/components";
import { accountDashboard } from "@/data";
import { useBankAccounts, useDossierByReference, useManagementAccountMonth, useManagementAccountYear, useTransactions } from "@/hooks";
import { getMonthlyFinancialData } from "@/utils";
import { Outlet, useOutletContext, useParams } from "react-router";

function Account() {
    const page = accountDashboard;
    const variantClass = "dashboard";

    const { reference } = useParams();

    const { 
        protectedPersons, 
        protectedPersonsLoading, 
        protectedPersonsError, 
        managementAccountRefreshKey, 
        transactionRefreshKey,
    } = useOutletContext();

    const {dossierId, isLoading, error} = useDossierByReference(reference);

    const { 
        managementAccount,
        managementAccountId,
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
    } = useBankAccounts(dossierId);

    const {
        transactions, 
        loading: transactionsLoading, 
        error: transactionsError
    } = useTransactions(dossierId, managementAccountId, transactionRefreshKey);

    const {
        month, 
        monthLabel, 
        monthOptions, 
        isAnnualView,
        displayedTransactions,
        monthTransactions, 
        monthUpdateDate, 
        previousMonthTransactions, 
        previousMonthUpdateDate, 
        handleMonthChange
    } = useManagementAccountMonth(managementAccount, page, transactions);

    const monthlyFinancialData = getMonthlyFinancialData(
        monthTransactions,
        previousMonthTransactions
    );

    const loading = isLoading || yearLoading || bankAccountsLoading || transactionsLoading;

    const accountError = error || yearError || bankAccountsError || transactionsError;

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
                    isAnnualView,
                    displayedTransactions,
                    managementAccount, 
                    managementAccountId,
                    bankAccounts, 
                    transactions, 
                    monthTransactions, 
                    monthUpdateDate, 
                    previousMonthTransactions, 
                    previousMonthUpdateDate, 
                    monthlyFinancialData 
                }}/>
            </SectionOverviewContainer>
            <SectionPageActions section={page.actions} /> 
        </Main>
    )
}

export default Account;