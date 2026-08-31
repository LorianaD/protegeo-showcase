function getTransactionCategoryTotal(transactions, transactionType, categoryGroup) {
    return transactions
        .filter(
            (transaction) =>
                transaction.transaction_type === transactionType &&
                transaction.category_group === categoryGroup
        )
        .reduce(
            (total, transaction) => total + Number(transaction.amount),
            0
        );
}

function getTransactionTotal(transactions, transactionType) {
    return transactions
        .filter(
            (transaction) =>
                transaction.transaction_type === transactionType
        )
        .reduce(
            (total, transaction) =>
                total + Number(transaction.amount),
            0
        );
}

function getBankAccountTotal(bankAccounts) {
    return bankAccounts.reduce(
        (total, bankAccount) => total + Number(bankAccount.balance ?? 0),
        0
    );
}

export {
    getTransactionCategoryTotal,
    getTransactionTotal,
    getBankAccountTotal,
};