import { BankAccountCard, DashboardSection, DashboardSectionHeader, StatsSection } from "@/components/ui";
import { formatBankAccountCards, formatFinancialStats, formatLongDate } from "@/utils";
import { useOutletContext } from "react-router";

function BankAccountDashboardAccount() {
    const { 
        page,
        year,
        monthLabel,
        isAnnualView,
        displayedTransactions,
        dossierId,
        bankAccounts,
        bankingTransactions,
        openBankAccountModal,
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

    const date = (year);

    const endDate = formatLongDate(date);

    const mainStats = formatFinancialStats(
        section.mainStats,
        displayedTransactions,
        endDate
    );

    const bankAccountCards = formatBankAccountCards(
        section.account,
        bankAccounts,
        displayedTransactions,
        bankingTransactions
    );

    function handleAddBankAccount() {
        openBankAccountModal(dossierId);
    }

    function handleEditBankAccount(bankAccount) {
        openBankAccountModal(dossierId, bankAccount);
    }

    return (
        <DashboardSection>
            <DashboardSectionHeader
                title={section.header.title}
                descriptions={descriptions}
                variant="transaction"
                notice={section.header.notice}
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