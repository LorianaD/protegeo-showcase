import { formatLongDate } from "@/utils";

function ManagementAccountPeriod({section, managementAccount}) {
    const startDate = managementAccount?.start_date;
    const endDate = managementAccount?.end_date;

    let period = section.missing;

    if (startDate && endDate) {
        period = `du ${formatLongDate(startDate)} au ${formatLongDate(endDate)}`;
    }

    return (
        <p className="management-account-period">
            <strong>{section.label} :</strong> {period}
        </p>
    );
}

export default ManagementAccountPeriod;