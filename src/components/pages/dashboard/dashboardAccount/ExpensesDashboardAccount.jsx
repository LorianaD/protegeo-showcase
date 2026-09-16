import { useOutletContext } from "react-router";
import { DashboardSection, DashboardSectionHeader, DashboardTableSection, StatsSection } from "@/components/ui";
import { formatCurrency, formatExpensesRows, formatExpensesStats, formatLongDate, getTransactionCategoryGroupTotal } from "@/utils";

function ExpensesDashboardAccount() {
    const { page, transactions, year, month } = useOutletContext();

    const section = page.expenses;

    const date = (year);

    const endDate = formatLongDate(date);

    const mainStats = formatExpensesStats(
        section.mainStats,
        transactions,
        endDate
    );

    const categoryStats = formatExpensesStats(
        section.categoryStats,
        transactions,
        endDate
    );

    const expensesSections = section.sections.map((expenseSection) => ({
        ...expenseSection,

        rows: formatExpensesRows(
            expenseSection.table.items,
            transactions
        ),

        totalValue: formatCurrency(
            getTransactionCategoryGroupTotal(
                transactions,
                "expense",
                expenseSection.name
            )
        ),
    }));

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
                />
            ))}
        </DashboardSection>
    );
}

export default ExpensesDashboardAccount;