import { managementAccountStatuses } from "@/data";

function formatManagementAccountStatus(status) {
    return managementAccountStatuses[status]?.label ?? status;
}

function getManagementAccountStatusVariant(status) {
    return managementAccountStatuses[status]?.variant ?? "default";
}

export {
    formatManagementAccountStatus,
    getManagementAccountStatusVariant,
};