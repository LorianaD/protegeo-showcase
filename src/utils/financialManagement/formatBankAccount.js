import { formatCurrency } from "../format";
import { getTransactionTotal } from "./getTotal";

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
    previousBalance = 0
) {
    const bankAccountTransactions = transactions.filter(
        (transaction) => transaction.bank_account_id === bankAccountId
    );

    const income = getTransactionTotal(
        bankAccountTransactions,
        "resource"
    );

    const expenses = getTransactionTotal(
        bankAccountTransactions,
        "expense"
    );

    const creditTransactions = bankingTransactions.filter(
        (transaction) =>
            transaction.destination_bank_account_id === bankAccountId
    );

    const debitTransactions = bankingTransactions.filter(
        (transaction) =>
            transaction.source_bank_account_id === bankAccountId
    );

    const creditMovement = getTransactionTotal(
        creditTransactions
    );

    const debitMovement = getTransactionTotal(
        debitTransactions
    );

    return {
        income,
        expenses,
        creditMovement,
        debitMovement,
    };
}

function formatBankAccountCards(config, bankAccounts, transactions, bankingTransactions) {
    return bankAccounts.map((bankAccount) => {
        const financialData = getBankAccountFinancialData(
            bankAccount.id,
            transactions,
            bankingTransactions
        );

        return {
            id: bankAccount.id,
            bankAccount,
            title: bankAccount.account_label,
            editLabel: config.editLabel,

            fields: config.fields.map((field) => ({
                ...field,
                value: getBankAccountFieldValue(
                    field,
                    bankAccount,
                    financialData
                ),
            })),
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
        income: financialData.income,
        expenses: financialData.expenses,
        creditMovements: financialData.creditMovement,
        debitMovements: financialData.debitMovement,
    };

    const value = values[field.name];

    if (value === undefined) {
        return null;
    }

    return field.format === "currency"
        ? formatCurrency(value)
        : value;
}

export {
    getBankAccountFinancialData,
    formatBankAccountCards,
};