import { useOutletContext } from "react-router";
import { DashboardSection, DashboardSectionHeader, DashboardTableSection, StatsSection } from "@/components/ui";
import { formatCurrency, formatLongDate, formatResourceRows, formatResourceStats, getTransactionCategoryGroupTotal } from "@/utils";

function ResourcesDashboardAccount() {
    const {
        page,
        isAnnualView,
        displayedTransactions,
        monthUpdateDate,
        previousMonthUpdateDate,
        monthlyFinancialData,
    } = useOutletContext();

    const section = page.resources;

    const statsData = {
        previousMonthResources:
            monthlyFinancialData.previousMonthResources,

        currentMonthResources:
            monthlyFinancialData.currentMonthResources,

        finalBalance:
            monthlyFinancialData.finalBalance,

        ...monthlyFinancialData.resources,
    };

    const mainStats = formatResourceStats(
        section.mainStats,
        statsData,
        {
            previousMonthResources: formatLongDate(
                previousMonthUpdateDate
            ),

            currentMonthResources: formatLongDate(
                monthUpdateDate
            ),

            finalBalance: formatLongDate(
                monthUpdateDate
            ),
        }
    );

    const categoryStatsData = {};

    section.categoryStats.forEach((stat) => {
        categoryStatsData[stat.name] =
            getTransactionCategoryGroupTotal(
                displayedTransactions,
                "resource",
                stat.name
            );
    });

    const categoryStats = formatResourceStats(
        section.categoryStats,
        categoryStatsData,
        formatLongDate(monthUpdateDate)
    );

    const resourceSections = section.sections.map(
        (resourceSection) => ({
            ...resourceSection,

            rows: formatResourceRows(
                resourceSection.table.items,
                displayedTransactions
            ),

            totalValue: formatCurrency(
                getTransactionCategoryGroupTotal(
                    displayedTransactions,
                    "resource",
                    resourceSection.name
                )
            ),
        })
    );


    return (
        <DashboardSection>
            <DashboardSectionHeader
                title={section.header.title}
                descriptions={section.header.description}
                variant="transaction"
            />

            <StatsSection
                stats={mainStats}
                className="account-stats account-stats--main"
            />

            <StatsSection
                stats={categoryStats}
                className="account-stats account-stats--categories account-stats--resources"
            />

            {resourceSections.map((resourceSection) => (
                <DashboardTableSection
                    key={resourceSection.name}
                    title={resourceSection.title}
                    actionLabel={resourceSection.actionLabel}
                    columns={resourceSection.table.columns}
                    rows={resourceSection.rows}
                    totalLabel={resourceSection.table.total.label}
                    totalValue={resourceSection.totalValue}
                    variant="resources"
                    displayMode={
                        isAnnualView ? "accordion" : "table"
                    }
                    // onAction={() =>
                    //     handleAddTransaction(
                    //         resourceSection.name
                    //     )
                    // }
                    // onEdit={handleEditTransaction}
                />
            ))}
        </DashboardSection>
    )
}

export default ResourcesDashboardAccount;