import { BankAccountCard, DashboardSection, DashboardSectionHeader, StatsSection } from "@/components/ui";
import { formatBankAccountCards, formatFinancialStats, formatLongDate, getBankAccountsFinancialData } from "@/utils";
import { useOutletContext } from "react-router";

function BankAccountDashboardAccount() {
    const { 
        page,
        year,
        monthLabel,
        isAnnualView,

        displayedTransactions,
        displayedBankingTransactions,
        previousTransactions,
        previousBankingTransactions,

        managementAccount,
        dossierId,
        bankAccounts,
        openBankAccountModal,
        openBankingTransactionModal,
    } = useOutletContext();

    const section = page.bankAccounts;

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

    const startDate = managementAccount?.start_date;
    const endDate = managementAccount?.end_date;

    const formattedEndDate = formatLongDate(endDate);

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

    const mainStats = formatFinancialStats(
        section.mainStats,
        bankAccountsFinancialData,
        formattedEndDate
    );

    const bankAccountCards = formatBankAccountCards(
        bankAccounts,
        section.account,
        displayedTransactions,
        displayedBankingTransactions,
        startDate,
        endDate,
        previousTransactions,
        previousBankingTransactions,
        isAnnualView
    );

    function handleAddBankAccount() {
        openBankAccountModal(dossierId);
    }

    function handleEditBankAccount(bankAccount) {
        openBankAccountModal(dossierId, bankAccount);
    }

    function handleAddBankingTransaction() {
        openBankingTransactionModal({
            dossierId,
            bankAccounts,
        });
    }

    return (
        <DashboardSection>
            <DashboardSectionHeader
                title={section.header.title}
                descriptions={descriptions}
                variant="transaction"
                notice={section.header.notice}

                secondLabelBtn={section.header.addMovementLabel}
                secondVariantBtn={section.header.variantBtn}
                onClickSecondBtn={handleAddBankingTransaction}

                labelBtn={section.header.addLabel}
                variantBtn={section.header.variantBtn}
                onClickBtn={handleAddBankAccount}
            />

            <StatsSection
                stats={mainStats}
                className="account-stats account-stats--main account-stats--banks"
            />

            {bankAccountCards.map((card) => (
                <BankAccountCard
                    key={card.id}
                    card={card}
                    onEdit={handleEditBankAccount}
                />
            ))}

        </DashboardSection>
    )
}

export default BankAccountDashboardAccount;