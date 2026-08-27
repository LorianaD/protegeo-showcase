import { DashboardSection, InfoField } from "@/components/ui";
import { useOutletContext } from "react-router";
import { StatusSummaryDashboardAccount } from ".";
import { StatsSummaryDashboardAccount } from "..";

function SummaryDashboardAccount() {
    const { page, year, managementAccount, bankAccounts, transactions } = useOutletContext();

    const section = page.summaryAccount;

    return (
        <>
            <DashboardSection title={section.header.title} variant="account-summary">
                <StatsSummaryDashboardAccount
                    section={section}
                    statsData={{}}
                    date=""
                />
            </DashboardSection>

            <StatusSummaryDashboardAccount
                section={section}
                statusData={managementAccount}
            />

            <DashboardSection title={section.resourcesSection.title} variant="account-table">
                {/* Resource table */}
            </DashboardSection>

            <DashboardSection title={section.expensesSection.title} variant="account-table">
                {/* Expense table */}
            </DashboardSection>

            <DashboardSection title={section.bankAccountsSection.title} variant="account-table">
                {/* Bank accounts table */}
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