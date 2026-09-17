import { DashboardSection, DashboardTable, DashboardTotal, InfoField } from "@/components/ui";
import { useOutletContext } from "react-router";
import { StatusSummaryDashboardAccount, StatsSummaryDashboardAccount } from ".";
import { formatCurrency, getBankAccountTotal, getTransactionCategoryGroupTotal, getTransactionTotal } from "@/utils";

function SummaryDashboardAccount() {
    const { 
        page, 
        year, 
        monthLabel, 
        isAnnualView, 
        displayedTransactions, 
        managementAccount, 
        bankAccounts 
    } = useOutletContext();

    const section = page.summaryAccount;

    const title = isAnnualView
        ? section.header.annualTitle
        : `${section.header.monthlyTitle} ${monthLabel}`;

    const statsDate = isAnnualView
        ? year
        : monthLabel;

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

    const finalBalance = totalResources - totalExpenses;

    const statsData = {
        previousBalance: null,
        resources: totalResources,
        expenses: totalExpenses,
        finalBalance,
    };

    const bankAccountRows = bankAccounts.map((bankAccount) => ({
        id: bankAccount.id,
        accountLabel: bankAccount.account_label,
        accountNumber: bankAccount.account_number_masked,
        bankName: bankAccount.bank_name && bankAccount.agency_name ? `${bankAccount.bank_name}\n${bankAccount.agency_name}` : bankAccount.bank_name ?? bankAccount.agency_name ?? null,
        previousBalance: formatCurrency(bankAccount.previous_balance ?? 0),
        resources: formatCurrency(bankAccount.resources ?? 0),
        expenses: formatCurrency(bankAccount.expenses ?? 0),
        movements: formatCurrency(bankAccount.movements ?? 0),
        balance: formatCurrency(bankAccount.balance ?? 0),
    }));

    const totalBankAccount = getBankAccountTotal(bankAccounts);

    return (
        <>
            <DashboardSection title={title} variant="account-summary">
                <StatsSummaryDashboardAccount
                    section={section}
                    statsData={statsData}
                    date={statsDate}
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

            <DashboardSection title={section.notes.title} variant="account-notes">
                <InfoField
                    type={section.notes.type}
                    name={section.notes.name}
                    placeholder={section.notes.placeholder}
                    // value={editing ? formData[section.notes.name] : protectedPerson[section.notes.name] ?? section.notes.placeholder }
                    // editing={editing}
                    // onChange={handleChange}
                    variant="textarea"
                />
            </DashboardSection>
        </>
    );
}

export default SummaryDashboardAccount;