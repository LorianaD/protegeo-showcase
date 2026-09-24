import { useOutletContext } from "react-router";
import { ConfirmModal, DashboardSection, DashboardSectionHeader, DashboardTableSection, StatsSection } from "@/components/ui";
import { formatCurrency, formatExpensesRows, formatFinancialStats, formatLongDate, formatTransactionFields, getTransactionCategoryGroupTotal } from "@/utils";
import { useDeleteTransaction, useTransactionDeleteConfirm, useTransactionSectionEdit, useUpdateTransaction } from "@/hooks";
import { addTransactionForm, options } from "@/data";

const categoryGroupNames = {
    daily_living: "current_expenses",
    works: "repairs",
};

function ExpensesDashboardAccount() {
    const {
        page,
        dossierId,
        year,
        monthLabel,
        previousMonthLabel,
        isAnnualView,
        displayedTransactions,
        managementAccount,
        managementAccountId,
        monthUpdateDate,
        previousMonthUpdateDate,
        monthlyFinancialData,
        bankAccountOptions,
        openTransactionModal,
        refreshTransactions,
    } = useOutletContext();

    const section = page.expenses;
    const sectionName = "expenses";

    const {updateTransaction, loading: updateLoading, error: updateError} = useUpdateTransaction();

    const {deleteTransaction, loading: deleteLoading, error: deleteError} = useDeleteTransaction();

    const {transactionToDelete, openDeleteConfirm,closeDeleteConfirm} = useTransactionDeleteConfirm();

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

    function handleAddTransaction() {
        openTransactionModal({
            transactionType: "expense",
            dossierId,
            managementAccountId,
            bankAccountOptions,
            startDate: managementAccount?.start_date,
            endDate: managementAccount?.end_date,
        });
    }

    const mainStatsData = {
        previous_month_expenses: monthlyFinancialData.previousMonthExpenses,

        current_month_expenses: monthlyFinancialData.currentMonthExpenses,

        final_balance: monthlyFinancialData.expensesBalance,
    };

    const mainStats = formatFinancialStats(
        section.mainStats,
        mainStatsData,
        {
            previous_month_expenses: previousMonthLabel,

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

    const transactionFields = addTransactionForm.expense.fields.map((field) => {
        if (field.name === "category_type") {
            return {
                ...field,
                options: options.transaction_expense_categories,
            };
        }

        if (field.name === "bank_account_id") {
            return {
                ...field,
                options: bankAccountOptions,
            };
        }

        if (field.name === "operation_date") {
            return {
                ...field,
                min: managementAccount?.start_date ?? undefined,
                max: managementAccount?.end_date ?? undefined,
            };
        }

        return field;
    });

    const transactionFieldOrder = [
        "operation_date",
        "label",
        "amount",
        "bank_account_id",
    ];

    const transactionFieldLabels = {
        operation_date: "Date",
        label: "Libellé",
        amount: "Montant",
        bank_account_id: "Banque",
    };

    const editableTransactionFields = formatTransactionFields(
        transactionFields,
        transactionFieldOrder,
        transactionFieldLabels
    );

    const {
        formData,
        handleEditSection,
        handleChange,
        removeTransactionFromForm,
        handleCancelSection,
        closeEditingSection,
        isEditingSection,
    } = useTransactionSectionEdit();

    async function handleSubmit(event) {
        event.preventDefault();

        const transactions = Object.entries(formData);

        try {
            for (const [transactionId, transactionData] of transactions) {
                await updateTransaction(
                    dossierId,
                    managementAccountId,
                    transactionId,
                    transactionData
                );
            }

            await refreshTransactions();
            closeEditingSection();
        } catch (error) {
            console.error("Unable to update transactions.", error);
        }
    }

    async function handleDelete() {
        if (!transactionToDelete) {
            return;
        }
        
        try {
            await deleteTransaction(
                dossierId,
                managementAccountId,
                transactionToDelete.id
            );

            removeTransactionFromForm(transactionToDelete.id);
            await refreshTransactions();

            closeDeleteConfirm();
        } catch (error) {
            console.error("Unable to delete transaction.", error);
        }
    }

    return (
        <DashboardSection>

            {/* HEADER */}
            <DashboardSectionHeader
                title={section.header.title}
                descriptions={descriptions}
                variant="transaction"
                labelBtn={section.header.addLabel}
                variantBtn={section.header.variantBtn}
                onClickBtn={handleAddTransaction}
            />

            {/* STATS */}
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

            {/* EXPENSES TABLE */}
            {expensesSections.map((expenseSection) => (
                <DashboardTableSection
                    key={expenseSection.name}
                    title={expenseSection.title}
                    actionLabel={expenseSection.actionLabel}
                    columns={expenseSection.table.columns}
                    rows={expenseSection.rows}
                    totalLabel={expenseSection.table.total.label}
                    totalValue={expenseSection.totalValue}
                    variant={sectionName}
                    fields={editableTransactionFields}
                    editing={isEditingSection(expenseSection.name)}
                    formData={formData}
                    onAction={() =>
                        handleEditSection(
                            expenseSection.name,
                            expenseSection.rows
                        )
                    }
                    onChange={handleChange}
                    onCancel={handleCancelSection}
                    onSubmit={handleSubmit}
                    onDelete={openDeleteConfirm}
                    error={updateError || deleteError}
                    loading={updateLoading || deleteLoading}
                    displayMode="accordion"
                    cancelLabel={page.footer_form.btn_cancel_label}
                    submitLabel={page.footer_form.btn_recorded_label}
                />
            ))}

            {transactionToDelete && (
                <ConfirmModal
                    title="Supprimer la transaction"
                    message="Êtes-vous sûre de vouloir supprimer cette transaction ? Cette action est définitive."
                    confirmLabel="Supprimer"
                    cancelLabel="Annuler"
                    onConfirm={handleDelete}
                    onClose={closeDeleteConfirm}
                    loading={deleteLoading}
                />
            )}
        </DashboardSection>
    );
}

export default ExpensesDashboardAccount;