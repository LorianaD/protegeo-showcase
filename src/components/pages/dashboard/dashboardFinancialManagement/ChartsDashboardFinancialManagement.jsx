import { DashboardSection, ExpenseBreakdownChart, MonthlyEvolutionChart, SectionChartsContainer } from "@/components/ui";
import { options } from "@/data";

function ChartsDashboardFinancialManagement({ section, monthlyEvolution, expenseBreakdown }) {
    const monthlyEvolutionSection = section.find(
        (item) => item.name === "monthlyEvolution"
    );

    const expenseDistributionSection = section.find(
        (item) => item.name === "expenseDistribution"
    );

    const expenseCategoryLabels = Object.fromEntries(
        options.category_group.map((item) => [
            item.value,
            item.label,
        ])
    );

    return (
        <DashboardSection variant="chart">
            <SectionChartsContainer title={monthlyEvolutionSection.title}>
                <MonthlyEvolutionChart
                    data={monthlyEvolution}
                    labels={monthlyEvolutionSection.labels}
                    colors={monthlyEvolutionSection.colors}
                />                   
            </SectionChartsContainer>

            <SectionChartsContainer title={expenseDistributionSection.title}>
                <ExpenseBreakdownChart
                    data={expenseBreakdown}
                    labels={expenseCategoryLabels}
                    colors={expenseDistributionSection.colors}
                />                
            </SectionChartsContainer>
        </DashboardSection>
    );
}

export default ChartsDashboardFinancialManagement;