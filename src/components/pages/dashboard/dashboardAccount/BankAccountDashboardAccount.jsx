import { DashboardSection, DashboardSectionHeader, StatsSection } from "@/components/ui";
import { formatFinancialStats, formatLongDate } from "@/utils";
import { useOutletContext } from "react-router";

function BankAccountDashboardAccount() {
    const { 
        page,  
        year, 
        monthLabel,
        isAnnualView,
        displayedTransactions,
        monthUpdateDate,
        previousMonthUpdateDate,
        monthlyFinancialData,
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

    return (
        <DashboardSection>
            <DashboardSectionHeader
                title={section.header.title}
                descriptions={descriptions}
                variant="transaction"
                notice={section.header.notice}
            />

            <StatsSection
                stats={mainStats}
                className="account-stats account-stats--main account-stats--banks"
            />

        </DashboardSection>
    )
}

export default BankAccountDashboardAccount;