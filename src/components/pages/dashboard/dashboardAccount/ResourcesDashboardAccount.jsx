import { useOutletContext } from "react-router";
import { ConfirmModal, DashboardSection, DashboardSectionHeader, DashboardTableSection, StatsSection } from "@/components/ui";
import { formatCurrency, formatFinancialStats, formatLongDate, formatResourceRows, formatTransactionFields, getTransactionCategoryGroupTotal } from "@/utils";
import { addTransactionForm, options } from "@/data";
import { useDeleteTransaction, useTransactionDeleteConfirm, useTransactionSectionEdit, useUpdateTransaction } from "@/hooks";

function ResourcesDashboardAccount() {
    const {
        page,
        dossierId,
        year,
        monthLabel,
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

    const section = page.resources;
    const sectionName = "resources";

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
            transactionType: "resource",
            dossierId,
            managementAccountId,
            bankAccountOptions,
            startDate: managementAccount?.start_date,
            endDate: managementAccount?.end_date,
        });
    }

    const statsData = {
        previousMonthResources:
            monthlyFinancialData.previousMonthResources,

        currentMonthResources:
            monthlyFinancialData.currentMonthResources,

        finalBalance:
            monthlyFinancialData.finalBalance,

        ...monthlyFinancialData.resources,
    };

    const mainStats = formatFinancialStats(
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

    const categoryStats = formatFinancialStats(
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

    const transactionFields = addTransactionForm.resource.fields.map((field) => {
        if (field.name === "category_type") {
            return {
                ...field,
                options: options.transaction_resource_categories,
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
        "category_type",
        "label",
        "amount",
        "bank_account_id",
    ];

    const transactionFieldLabels = {
        operation_date: "Date",
        category_type: "Libellé",
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
                className="account-stats account-stats--categories account-stats--resources"
            />

            {/* RESOURCES TABLE */}
            {resourceSections.map((resourceSection) => (
                <DashboardTableSection
                    key={resourceSection.name}
                    title={resourceSection.title}
                    actionLabel={resourceSection.actionLabel}
                    columns={resourceSection.table.columns}
                    rows={resourceSection.rows}
                    totalLabel={resourceSection.table.total.label}
                    totalValue={resourceSection.totalValue}
                    variant={sectionName}
                    fields={editableTransactionFields}
                    editing={isEditingSection(resourceSection.name)}
                    formData={formData}
                    onAction={() =>
                        handleEditSection(
                            resourceSection.name,
                            resourceSection.rows
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
    )
}

export default ResourcesDashboardAccount;