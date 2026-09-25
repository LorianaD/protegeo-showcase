import { DashboardSection, DashboardTable, DashboardTotal, InfoField, UpdateFormFooter } from "@/components/ui";
import { useOutletContext } from "react-router";
import { StatusSummaryDashboardAccount, StatsSummaryDashboardAccount } from ".";
import { formatCurrency, formatLongDate, getBankAccountFinancialData, getBankAccountPreviousBalance, getBankAccountsFinancialData, getBankAccountTotal, getTransactionCategoryGroupTotal, getTransactionTotal } from "@/utils";
import { useEditableForm, useUpdateManagementAccount } from "@/hooks";

function SummaryDashboardAccount() {
    const { 
        page,
        dossierId, 
        year, 
        monthLabel, 
        previousMonthLabel,
        isAnnualView,

        displayedTransactions,
        displayedBankingTransactions,
        previousTransactions,
        previousBankingTransactions,

        monthlyFinancialData,
        annualFinancialData,
        managementAccount, 
        monthUpdateDate,
        previousManagementAccount,
        bankAccounts,
        bankingTransactions, 
    } = useOutletContext();

    const section = page.summaryAccount;

    const {
        editing,
        formData,
        handleChange,
        handleEdit,
        handleCancel,
        closeEditing,
    } = useEditableForm(["note"], managementAccount);

    const {
        updateManagementAccount,
        loading: updating,
        error: updateError,
    } = useUpdateManagementAccount();

    const title = isAnnualView
        ? section.header.annualTitle
        : `${section.header.monthlyTitle} ${monthLabel}`;

    const statsDate = formatLongDate(monthUpdateDate);

    const previousBalanceDate = isAnnualView
        ? formatLongDate(previousManagementAccount?.end_date)
        : previousMonthLabel;

    // RESSOURCES
    const resourceRows = section.resourcesSection.items.map((item) => ({
        id: item.name,
        label: item.label,
        amount: formatCurrency(
            getTransactionCategoryGroupTotal(
                displayedTransactions,
                "resource",
                item.name
            )
        ),
    }));

    const totalResources = getTransactionTotal(
        displayedTransactions,
        "resource"
    );

    // DÉPENSES
    const expenseRows = section.expensesSection.items.map((item) => ({
        id: item.name,
        label: item.label,
        amount: formatCurrency(
            getTransactionCategoryGroupTotal(
                displayedTransactions,
                "expense",
                item.name
            )
        ),
    }));

    const totalExpenses = getTransactionTotal(
        displayedTransactions,
        "expense"
    );

    const statsData = isAnnualView
        ? annualFinancialData
        : {
            previousBalance: monthlyFinancialData.previousBalance,
            resources: monthlyFinancialData.currentMonthResources,
            expenses: monthlyFinancialData.currentMonthExpenses,
            finalBalance: monthlyFinancialData.finalBalance,
        };

    const startDate = managementAccount?.start_date;
    const endDate = managementAccount?.end_date;

    const bankAccountRows = bankAccounts.map((bankAccount) => {
        const previousBalance = isAnnualView
            ? Number(bankAccount.initial_balance ?? 0)
            : getBankAccountPreviousBalance(
                bankAccount,
                previousTransactions,
                previousBankingTransactions
            );

        const financialData = getBankAccountFinancialData(
            bankAccount.id,
            displayedTransactions,
            displayedBankingTransactions,
            startDate,
            endDate,
            previousBalance
        );

        const movements =
            financialData.creditMovement
            - financialData.debitMovement;

        return {
            id: bankAccount.id,
            accountLabel: bankAccount.account_label,
            accountNumber: bankAccount.account_number_masked,
            bankName:
                bankAccount.bank_name && bankAccount.agency_name
                    ? `${bankAccount.bank_name}\n${bankAccount.agency_name}`
                    : bankAccount.bank_name
                        ?? bankAccount.agency_name
                        ?? null,
            previousBalance: formatCurrency(
                financialData.previousBalance
            ),
            resources: formatCurrency(
                financialData.income
            ),
            expenses: formatCurrency(
                financialData.expenses
            ),
            movements: formatCurrency(
                movements
            ),
            balance: formatCurrency(
                financialData.balance
            ),
        };
    });

    const bankAccountsFinancialData = getBankAccountsFinancialData(
        bankAccounts,
        displayedTransactions,
        displayedBankingTransactions,
        startDate,
        endDate,
        previousTransactions,
        previousBankingTransactions,
        isAnnualView
    );

    const totalBankAccount = bankAccountsFinancialData.totalBalance;

    async function handleNoteSubmit(event) {
        event.preventDefault();

        const updatedManagementAccount = await updateManagementAccount(
            dossierId,
            managementAccount.id,
            {
                note: formData.note,
            }
        );

        if (!updatedManagementAccount) {
            return;
        }

        closeEditing();
    }

    return (
        <>
            <DashboardSection title={title} variant="account-summary">
                <StatsSummaryDashboardAccount
                    section={section}
                    statsData={statsData}
                    date={statsDate}
                    previousBalanceDate={previousBalanceDate}
                />
            </DashboardSection>

            <StatusSummaryDashboardAccount
                section={section}
                statusData={managementAccount}
            />

            <DashboardSection title={section.resourcesSection.title} variant="account-table">
                <DashboardTable
                    columns={section.resourcesSection.columns}
                    rows={resourceRows}
                    emptyMessage={section.resourcesSection.emptyMessage}
                    variant="account-summary"
                />

                <DashboardTotal
                    label={section.resourcesSection.total.label}
                    value={formatCurrency(totalResources)}
                    variant="resources"
                />
            </DashboardSection>

            <DashboardSection title={section.expensesSection.title} variant="account-table">
                <DashboardTable
                    columns={section.expensesSection.columns}
                    rows={expenseRows}
                    emptyMessage={section.expensesSection.emptyMessage}
                    variant="account-summary"
                />

                <DashboardTotal
                    label={section.expensesSection.total.label}
                    value={formatCurrency(totalExpenses)}
                    variant="expenses"
                />
            </DashboardSection>

            <DashboardSection title={section.bankAccountsSection.title} variant="account-table">
                <DashboardTable
                    columns={section.bankAccountsSection.columns}
                    rows={bankAccountRows}
                    emptyMessage={section.bankAccountsSection.emptyMessage}
                    variant="account-bank"
                />

                <DashboardTotal
                    label={section.bankAccountsSection.total.label}
                    value={formatCurrency(totalBankAccount)}
                    variant="bank"
                />
            </DashboardSection>

        <DashboardSection title={section.notes.title} actionLabel={editing ? null : section.notes.action.label} onAction={handleEdit} variant="account-notes">
            <form onSubmit={handleNoteSubmit} className="update-form">
                <InfoField
                    label={section.notes.label}
                    type={section.notes.type}
                    name={section.notes.name}
                    placeholder={section.notes.placeholder}
                    value={
                        editing
                            ? formData.note
                            : managementAccount?.note
                                ?? section.notes.placeholder
                    }
                    editing={editing}
                    onChange={handleChange}
                    variant="textarea"
                />

                {editing && (
                    <UpdateFormFooter
                        cancelLabel={section.notes.footer.btn_cancel_label}
                        submitLabel={section.notes.footer.btn_recorded_label}
                        onCancel={handleCancel}
                        loading={updating}
                        error={updateError}
                    />
                )}
            </form>
        </DashboardSection>
        </>
    );
}

export default SummaryDashboardAccount;