import { ActionsDashboardFinancialManagement, ChartsDashboardFinancialManagement, DashboardSection, DashboardSectionLoading, HeroDashboard, Main, SectionOverviewContainer, SectionPageActions, StatsDashboardFinancialManagement } from "@/components";
import { financialManagementDashboard } from "@/data";
import { useDossierByReference, useFinancialManagementCharts, useFinancialManagementStats, useManagementAccountYear, useTransactions } from "@/hooks";
import { useParams } from "react-router";

function FinancialManagement() {
    const {reference} = useParams();

    const page = financialManagementDashboard;
    const variantClass = "dashboard";

    const {dossierId, isLoading: dossierLoading, error: dossierError} = useDossierByReference(reference);

    const { managementAccountId, year, yearOptions, handleYearChange, loading: yearLoading, error: yearError } = useManagementAccountYear(dossierId);

    const { transactions, loading: transactionsLoading, error: transactionsError } = useTransactions(dossierId, managementAccountId);

    const { statsData, loading: statsLoading, error: statsError } = useFinancialManagementStats(transactions);

    const { monthlyEvolution, expenseBreakdown, loading: chartsLoading, error: chartsError } = useFinancialManagementCharts(transactions);

    const loading = dossierLoading || yearLoading || transactionsLoading || statsLoading || chartsLoading;

    const error = dossierError || yearError || transactionsError || statsError || chartsError;

    if (loading) {
        return (
            <Main variant={variantClass}>
                <SectionOverviewContainer>
                    <HeroDashboard page={page} year={year} yearOptions={yearOptions} onYearChange={handleYearChange} yearLoading={yearLoading}/>

                    <DashboardSectionLoading
                        page={page}
                        section={page.messages}
                    />
                </SectionOverviewContainer>

                <ActionsDashboardFinancialManagement page={page} />
                <SectionPageActions section={page.actions} />
            </Main>
        );
    }

    if (error) {
        return (
            <Main variant={variantClass}>
                <SectionOverviewContainer>
                    <HeroDashboard page={page} year={year} yearOptions={yearOptions} onYearChange={handleYearChange}/>

                    <DashboardSection>
                        <p>{page.messages.error}</p>
                    </DashboardSection>
                </SectionOverviewContainer>

                <ActionsDashboardFinancialManagement page={page} />
                <SectionPageActions section={page.actions} />
            </Main>
        );
    }

    return (
        <Main variant={ variantClass }>
            <SectionOverviewContainer>
                <HeroDashboard page={page} year={year} yearOptions={yearOptions} onYearChange={handleYearChange} />

                {!loading && !error && (
                    <StatsDashboardFinancialManagement page={page} statsData={statsData}/>
                )}

                <ChartsDashboardFinancialManagement section={page.charts} monthlyEvolution={monthlyEvolution} expenseBreakdown={expenseBreakdown}/>              
            </SectionOverviewContainer>
            <ActionsDashboardFinancialManagement page={ page }/>
            <SectionPageActions section={page.actions} />
        </Main>
    )
}

export default FinancialManagement;