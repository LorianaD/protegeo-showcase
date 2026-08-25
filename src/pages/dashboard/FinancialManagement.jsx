import { ActionsDashboardFinancialManagement, DashboardSection, DashboardSectionLoading, HeroDashboard, Main, SectionOverviewContainer, SectionPageActions, StatsDashboardFinancialManagement } from "@/components";
import { financialManagementDashboard } from "@/data";
import { useFinancialManagementStats } from "@/hooks";
import { useParams } from "react-router";

function FinancialManagement() {
    const {reference} = useParams();

    const page = financialManagementDashboard;
    const variantClass = "dashboard";
    const year = 2026;

    const { statsData, loading, error } = useFinancialManagementStats(reference, year);

    if (loading) {
        return (
            <Main variant={ variantClass }>
                <SectionOverviewContainer>
                    <HeroDashboard page={ page } />
                    <DashboardSectionLoading page={page} section={page.messages} />
                </SectionOverviewContainer>
                <ActionsDashboardFinancialManagement page={ page }/>
                <SectionPageActions section={page.actions} />
            </Main>
        )
    }

    if (error) {
        return (
            <Main variant={ variantClass }>
                <SectionOverviewContainer>
                    <HeroDashboard page={ page } />
                    <DashboardSection>
                        <p>{page.messages.error}</p>
                    </DashboardSection>
                </SectionOverviewContainer>
                <ActionsDashboardFinancialManagement page={ page }/>
                <SectionPageActions section={page.actions} />
            </Main>
        )
    }

    return (
        <Main variant={ variantClass }>
            <SectionOverviewContainer>
                <HeroDashboard page={ page } />
                {!loading && !error && (
                    <StatsDashboardFinancialManagement page={page} statsData={statsData}/>
                )}                
            </SectionOverviewContainer>
            <ActionsDashboardFinancialManagement page={ page }/>
            <SectionPageActions section={page.actions} />
        </Main>
    )
}

export default FinancialManagement;