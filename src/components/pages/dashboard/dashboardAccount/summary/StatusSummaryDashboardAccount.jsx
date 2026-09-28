import { InfoCard } from "@/components/ui";
import { managementAccountStatuses } from "@/data";
import { formatDate, formatManagementAccountStatus } from "@/utils";

function StatusSummaryDashboardAccount({ section, statusData }) {
    const statusConfig = managementAccountStatuses[statusData?.status];

    const statusValues = {
        year: statusData?.year ?? "",
        status: formatManagementAccountStatus(statusData?.status),
        sentAt: statusData?.sent_at ? formatDate(statusData.sent_at) : null,
    };

    const statusVariants = {
        year: "year",
        status: statusConfig?.variant ?? "default",
        sentAt: statusData?.sent_at
            ? "success"
            : "warning",
    };

    return (
        <div className="account-summary-status">
            {section.status.map((item) => (
                <InfoCard
                    key={item.name}
                    title={item.title}
                    value={statusValues[item.name] ?? item.emptyValue}
                    variant={statusVariants[item.name]}
                />
            ))}
        </div>
    );
}

export default StatusSummaryDashboardAccount;