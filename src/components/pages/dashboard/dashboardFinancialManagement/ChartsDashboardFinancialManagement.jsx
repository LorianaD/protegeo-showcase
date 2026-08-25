import { DashboardSection, ExpenseBreakdownChart, MonthlyEvolutionChart, SectionChartsContainer } from "@/components/ui";

function ChartsDashboardFinancialManagement({ section, monthlyEvolution, expenseBreakdown }) {
    const monthlyEvolutionSection = section.find(
        (item) => item.name === "monthlyEvolution"
    );

    const expenseDistributionSection = section.find(
        (item) => item.name === "expenseDistribution"
    );

    return (
        <DashboardSection variant="chart">
            <SectionChartsContainer title={monthlyEvolutionSection.title}>
                <MonthlyEvolutionChart
                    data={monthlyEvolution}
                    labels={monthlyEvolutionSection.labels}
                />                   
            </SectionChartsContainer>

            <SectionChartsContainer title={expenseDistributionSection.title}>
                <ExpenseBreakdownChart
                    data={expenseBreakdown}
                    labels={expenseDistributionSection.labels}
                    colors={expenseDistributionSection.colors}
                />                
            </SectionChartsContainer>
        </DashboardSection>
    );
}

export default ChartsDashboardFinancialManagement;