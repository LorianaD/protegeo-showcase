import { Main, HeroDashboard, SectionOverviewContainer, TabsDashboard, SectionPageActions, DashboardSection } from "@/components";
import { accountDashboard } from "@/data";
import { useBankAccounts, useDossierByReference, useManagementAccountYear, useTransactions } from "@/hooks";
import { Outlet, useParams } from "react-router";

function Account() {
    const page = accountDashboard;
    const variantClass = "dashboard";

    const { reference } = useParams();

    const {dossierId, isLoading, error} = useDossierByReference(reference);

    const {managementAccounts, managementAccount, managementAccountId, year, yearOptions, handleYearChange, loading: managementAccountsLoading, error: managementAccountsError} = useManagementAccountYear(dossierId);

    const {bankAccounts, loading: bankAccountsLoading, error: bankAccountsError} = useBankAccounts(dossierId);

    const {transactions, loading: transactionsLoading, error: transactionsError} = useTransactions(dossierId,managementAccountId);

    const loading = isLoading || managementAccountsLoading || bankAccountsLoading || transactionsLoading;

    const accountError = error || managementAccountsError || bankAccountsError || transactionsError;

    if (loading) {
        return (
            <Main variant={ variantClass }>
                <SectionOverviewContainer>
                    <HeroDashboard page={ page }/>
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
                    <HeroDashboard page={ page }/>
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
                <HeroDashboard page={ page } year={year} yearOptions={yearOptions} onYearChange={handleYearChange} />
                <TabsDashboard page={ page } />
                <Outlet context={{ page, dossierId, year, managementAccount, managementAccountId, managementAccounts, bankAccounts, transactions }}/>
            </SectionOverviewContainer>
            <SectionPageActions section={page.actions} /> 
        </Main>
    )
}

export default Account;