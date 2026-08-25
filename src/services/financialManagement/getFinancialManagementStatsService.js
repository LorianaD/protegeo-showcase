import {getDossierByReferenceService, getManagementAccountsService, getTransactionsService} from "@/services";

async function getFinancialManagementStatsService(reference, year) {
    const dossier = await getDossierByReferenceService(reference);

    const dossierId = dossier.id;

    const managementAccounts = await getManagementAccountsService(dossierId);

    const managementAccount = managementAccounts.find(
        (account) => Number(account.year) === Number(year)
    );

    if (!managementAccount) {
        return {
            annualResources: 0,
            annualExpenditure: 0,
            estimatedBalance: 0,
            missingDocuments: 0,
        };
    }

    const transactions = await getTransactionsService(
        dossierId,
        managementAccount.id
    );

    let annualResources = 0;
    let annualExpenditure = 0;

    transactions.forEach((transaction) => {
        const amount = Number(transaction.amount);

        if (transaction.transaction_type === "income") {
            annualResources += amount;
        }

        if (transaction.transaction_type === "expense") {
            annualExpenditure += amount;
        }
    });

    return {
        annualResources,
        annualExpenditure,
        estimatedBalance: annualResources - annualExpenditure,
        missingDocuments: 0,
    };
}

export {
    getFinancialManagementStatsService,
};