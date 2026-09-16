import { Main, HeroDashboard, SectionOverviewContainer, TabsDashboard, SectionPageActions, DashboardSection, MonthSelect } from "@/components";
import { accountDashboard } from "@/data";
import { useBankAccounts, useDossierByReference, useManagementAccountMonth, useManagementAccountYear, useTransactions } from "@/hooks";
import { getMonthlyFinancialData } from "@/utils";
import { Outlet, useOutletContext, useParams } from "react-router";

function Account() {
    const page = accountDashboard;
    const variantClass = "dashboard";

    const { reference } = useParams();

    const { protectedPersons, protectedPersonsLoading, protectedPersonsError } = useOutletContext();

    const {dossierId, isLoading, error} = useDossierByReference(reference);

    const {
        managementAccounts,
        managementAccount,
        managementAccountId,
        year,
        yearOptions,
        handleYearChange,
        loading: managementAccountsLoading,
        error: managementAccountsError,
    } = useManagementAccountYear(dossierId);

    const {
        bankAccounts,
        loading: bankAccountsLoading,
        error: bankAccountsError,
    } = useBankAccounts(dossierId);

    const {
        transactions, 
        loading: transactionsLoading, 
        error: transactionsError
    } = useTransactions(dossierId, managementAccountId);

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
    } = useManagementAccountMonth(year, page, transactions);

    const monthlyFinancialData = getMonthlyFinancialData(
        monthTransactions,
        previousMonthTransactions
    );

    const loading = isLoading || managementAccountsLoading || bankAccountsLoading || transactionsLoading;

    const accountError = error || managementAccountsError || bankAccountsError || transactionsError;

    if (loading) {
        return (
            <Main variant={ variantClass }>
                <SectionOverviewContainer>
                    <HeroDashboard page={ page } year={year} yearOptions={yearOptions} onYearChange={handleYearChange} protectedPersons={protectedPersons} protectedPersonsLoading={protectedPersonsLoading} protectedPersonsError={protectedPersonsError} />
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
                    <HeroDashboard page={ page } year={year} yearOptions={yearOptions} onYearChange={handleYearChange} protectedPersons={protectedPersons} protectedPersonsLoading={protectedPersonsLoading} protectedPersonsError={protectedPersonsError} />
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
                <HeroDashboard page={ page } year={year} yearOptions={yearOptions} onYearChange={handleYearChange} protectedPersons={protectedPersons} protectedPersonsLoading={protectedPersonsLoading} protectedPersonsError={protectedPersonsError}/>
                <TabsDashboard page={ page } />
                <MonthSelect label={page.monthNav.label} month={month} options={monthOptions} onChange={handleMonthChange} loading={managementAccountsLoading}/>
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
                    managementAccounts, 
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