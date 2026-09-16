import { DashboardSection, DashboardSectionHeader, StatsSection } from "@/components/ui";
import { formatBankStats, formatLongDate } from "@/utils";
import { useOutletContext } from "react-router";

function BankAccountDashboardAccount() {
    const { page, transactions, year, month } = useOutletContext();

    const section = page.bankAccounts;

    const date = (year);

    const endDate = formatLongDate(date);

    const mainStats = formatBankStats(
        section.mainStats,
        transactions,
        endDate
    );

    return (
        <DashboardSection>
            <DashboardSectionHeader
                title={section.header.title}
                descriptions={section.header.description}
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