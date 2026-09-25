import { formatCurrency } from "../format";
import { getBankingTransactionTotal, getTransactionTotal } from "./getTotal";

/**
 * Builds the financial data for a bank account over the selected period.
 *
 * @param {number} bankAccountId
 * @param {Array} transactions
 * @returns {Object}
 */
function getBankAccountFinancialData(
    bankAccountId,
    transactions,
    bankingTransactions,
    startDate,
    endDate,
    previousBalance = 0
) {
    const bankAccountTransactions = transactions.filter(
        (transaction) =>
            transaction.bank_account_id === bankAccountId
    );

    const periodBankingTransactions = getBankingTransactionsByPeriod(
        bankingTransactions,
        startDate,
        endDate
    );

    const creditTransactions = periodBankingTransactions.filter(
        (transaction) =>
            transaction.destination_bank_account?.id === bankAccountId
    );

    const debitTransactions = periodBankingTransactions.filter(
        (transaction) =>
            transaction.source_bank_account?.id === bankAccountId
    );

    const income = getTransactionTotal(
        bankAccountTransactions,
        "resource"
    );

    const expenses = getTransactionTotal(
        bankAccountTransactions,
        "expense"
    );

    const creditMovement = getBankingTransactionTotal(
        creditTransactions
    );

    const debitMovement = getBankingTransactionTotal(
        debitTransactions
    );

    const balance =
        previousBalance
        + income
        + creditMovement
        - expenses
        - debitMovement;

    return {
        previousBalance,
        income,
        expenses,
        creditMovement,
        debitMovement,
        balance,
    };
}


function getBankAccountsFinancialData(
    bankAccounts,
    transactions,
    bankingTransactions,
    startDate,
    endDate,
    previousTransactions = [],
    previousBankingTransactions = [],
    isAnnualView = true
) {
    return bankAccounts.reduce(
        (totals, bankAccount) => {
            const previousBalance = isAnnualView
                ? Number(bankAccount.initial_balance ?? 0)
                : getBankAccountPreviousBalance(
                    bankAccount,
                    previousTransactions,
                    previousBankingTransactions
                );

            const financialData = getBankAccountFinancialData(
                bankAccount.id,
                transactions,
                bankingTransactions,
                startDate,
                endDate,
                previousBalance
            );

            totals.totalBalance += financialData.balance;
            totals.totalIncome += financialData.income;
            totals.totalExpenses += financialData.expenses;

            return totals;
        },
        {
            totalBalance: 0,
            totalIncome: 0,
            totalExpenses: 0,
        }
    );
}

function formatBankAccountCards(
    bankAccounts,
    config,
    transactions,
    bankingTransactions,
    startDate,
    endDate,
    previousTransactions = [],
    previousBankingTransactions = [],
    isAnnualView = true
) {
    return bankAccounts.map((bankAccount) => {
        const previousBalance = isAnnualView
            ? Number(bankAccount.initial_balance ?? 0)
            : getBankAccountPreviousBalance(
                bankAccount,
                previousTransactions,
                previousBankingTransactions
            );

        const financialData = getBankAccountFinancialData(
            bankAccount.id,
            transactions,
            bankingTransactions,
            startDate,
            endDate,
            previousBalance,
        );

        return {
            id: bankAccount.id,
            bankAccount,
            title: bankAccount.account_label,
            editLabel: config.editLabel,

            fields: config.fields.map((row) =>
                row.map((field) => ({
                    ...field,
                    value: getBankAccountFieldValue(
                        field,
                        bankAccount,
                        financialData
                    ),
                }))
            ),
        };
    });
}

function getBankAccountFieldValue(field, bankAccount, financialData) {
    function getBankAgencyLabel(bankAccount) {
        if (!bankAccount.agency_name) {
            return bankAccount.bank_name;
        }

        return `${bankAccount.bank_name} — ${bankAccount.agency_name}`;
    }

    const values = {
        accountNumber: bankAccount.account_number_masked,
        bankAgency: getBankAgencyLabel(bankAccount),
        previousBalance: financialData.previousBalance,
        income: financialData.income,
        expenses: financialData.expenses,
        creditMovement: financialData.creditMovement,
        debitMovement: financialData.debitMovement,
        balance: financialData.balance,
    };

    const value = values[field.name];

    if (value === undefined) {
        return null;
    }

    return field.format === "currency"
        ? formatCurrency(value)
        : value;
}

function getBankingTransactionsByPeriod(
    bankingTransactions,
    startDate,
    endDate
) {
    if (!startDate || !endDate) {
        return bankingTransactions;
    }

    const periodStart = new Date(startDate);
    const periodEnd = new Date(endDate);

    return bankingTransactions.filter((transaction) => {
        const operationDate = new Date(transaction.operation_date);

        return (
            operationDate >= periodStart
            && operationDate <= periodEnd
        );
    });
}

function getBankAccountPreviousBalance(
    bankAccount,
    previousTransactions,
    previousBankingTransactions
) {
    const initialBalance = Number(
        bankAccount.initial_balance ?? 0
    );

    const previousFinancialData = getBankAccountFinancialData(
        bankAccount.id,
        previousTransactions,
        previousBankingTransactions,
        null,
        null,
        initialBalance
    );

    return previousFinancialData.balance;
}

export {
    getBankAccountFinancialData,
    getBankAccountsFinancialData,
    getBankAccountPreviousBalance,
    formatBankAccountCards,
};