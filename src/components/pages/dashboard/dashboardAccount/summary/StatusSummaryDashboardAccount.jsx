import { InfoCard } from "@/components/ui";
import { formatDate, formatManagementAccountStatus } from "@/utils";

function StatusSummaryDashboardAccount({ section, statusData }) {

    const statusValues = {
        year: statusData?.year ?? "",
        status: formatManagementAccountStatus(statusData?.status),
        sentAt: statusData?.sent_at ? formatDate(statusData.sent_at) : null,
    };

    return (
        <div className="account-summary-status">
            {section.status.map((item) => (
                <InfoCard
                    key={item.name}
                    title={item.title}
                    value={statusValues[item.name] ?? item.emptyValue}
                    variant={item.name}
                />
            ))}
        </div>
    );
}

export default StatusSummaryDashboardAccount;