import { useOutletContext } from "react-router";
import { DashboardSection, DashboardSectionHeader, DashboardTableSection, StatsSection } from "@/components/ui";
import { formatCurrency, formatExpensesRows, formatFinancialStats, formatLongDate, getTransactionCategoryGroupTotal } from "@/utils";

const categoryGroupNames = {
    daily_living: "current_expenses",
    works: "repairs",
};

function ExpensesDashboardAccount() {
    const {
        page,
        year,
        monthLabel,
        isAnnualView,
        displayedTransactions,
        monthUpdateDate,
        previousMonthUpdateDate,
        monthlyFinancialData,
    } = useOutletContext();

    const section = page.expenses;

    const {
        currentMonth,
        annual,
        ...otherDescriptions
    } = section.header.description;

    const currentPeriodDescription = isAnnualView
        ? `${annual} ${year}.`
        : `${currentMonth} ${monthLabel}.`;

    const descriptions = {
        currentPeriod: currentPeriodDescription,
        ...otherDescriptions,
    };

    const mainStatsData = {
        previous_month_expenses:
            monthlyFinancialData.previousMonthExpenses,

        current_month_expenses:
            monthlyFinancialData.currentMonthExpenses,

        final_balance:
            monthlyFinancialData.finalBalance,
    };

    const mainStats = formatFinancialStats(
        section.mainStats,
        mainStatsData,
        {
            previous_month_expenses: formatLongDate(
                previousMonthUpdateDate
            ),

            current_month_expenses: formatLongDate(
                monthUpdateDate
            ),

            final_balance: formatLongDate(
                monthUpdateDate
            ),
        }
    );

    const categoryStatsData = {};

    section.categoryStats.forEach((stat) => {
        const categoryGroup =
            categoryGroupNames[stat.name] ?? stat.name;

        categoryStatsData[stat.name] =
            getTransactionCategoryGroupTotal(
                displayedTransactions,
                "expense",
                categoryGroup
            );
    });

    const categoryStats = formatFinancialStats(
        section.categoryStats,
        categoryStatsData,
        formatLongDate(monthUpdateDate)
    );

    const expensesSections = section.sections.map(
        (expenseSection) => {
            const categoryGroup =
                categoryGroupNames[expenseSection.name]
                ?? expenseSection.name;

            return {
                ...expenseSection,

                rows: formatExpensesRows(
                    expenseSection.table.items,
                    displayedTransactions
                ),

                totalValue: formatCurrency(
                    getTransactionCategoryGroupTotal(
                        displayedTransactions,
                        "expense",
                        categoryGroup
                    )
                ),
            };
        }
    );

    return (
        <DashboardSection>
            <DashboardSectionHeader
                title={section.header.title}
                descriptions={descriptions}
                variant="transaction"
            />

            {!isAnnualView && (
                <StatsSection
                    stats={mainStats}
                    className="account-stats account-stats--main"
                />
            )}

            <StatsSection
                stats={categoryStats}
                className="account-stats account-stats--categories account-stats--expenses"
            />

            {expensesSections.map((expenseSection) => (
                <DashboardTableSection
                    key={expenseSection.name}
                    title={expenseSection.title}
                    actionLabel={expenseSection.actionLabel}
                    columns={expenseSection.table.columns}
                    rows={expenseSection.rows}
                    totalLabel={expenseSection.table.total.label}
                    totalValue={expenseSection.totalValue}
                    variant="expenses"
                    displayMode={
                        isAnnualView ? "accordion" : "table"
                    }
                />
            ))}
        </DashboardSection>
    );
}

export default ExpensesDashboardAccount;