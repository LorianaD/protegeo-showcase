import { useEffect, useState } from "react";
import { useManagementAccounts } from "@/hooks";
import { formatDate } from "@/utils";

function useManagementAccountYear(dossierId, refreshKey = 0) {
    const {
        managementAccounts,
        loading,
        error,
    } = useManagementAccounts(dossierId, refreshKey);

    const [selectedManagementAccountId, setSelectedManagementAccountId] =
        useState("");

    const yearOptions = managementAccounts.map((managementAccount) => {
        const hasPeriod =
            managementAccount.start_date
            && managementAccount.end_date;

        const periodLabel = hasPeriod
            ? `${formatDate(managementAccount.start_date)} au ${formatDate(managementAccount.end_date)}`
            : "Période non renseignée";

        return {
            value: String(managementAccount.id),
            label: `${managementAccount.year} — ${periodLabel}`,
        };
    });

    function handleYearChange(event) {
        setSelectedManagementAccountId(event.target.value);
    }

    useEffect(() => {
        setSelectedManagementAccountId("");
    }, [dossierId]);

    useEffect(() => {
        if (managementAccounts.length === 0) {
            setSelectedManagementAccountId("");
            return;
        }

        const selectedAccountExists = managementAccounts.some(
            (managementAccount) =>
                String(managementAccount.id)
                === selectedManagementAccountId
        );

        if (selectedAccountExists) {
            return;
        }

        const latestManagementAccount = [...managementAccounts].sort(
            (firstAccount, secondAccount) =>
                Number(secondAccount.year)
                - Number(firstAccount.year)
        )[0];

        setSelectedManagementAccountId(
            String(latestManagementAccount.id)
        );
    }, [managementAccounts, selectedManagementAccountId]);

    const managementAccount = managementAccounts.find(
        (managementAccount) =>
            String(managementAccount.id)
            === selectedManagementAccountId
    );

    return {
        managementAccounts,
        managementAccount,
        managementAccountId: managementAccount?.id ?? null,
        selectedManagementAccountId,
        year: managementAccount?.year ?? "",
        yearOptions,
        handleYearChange,
        loading,
        error,
    };
}

export {
    useManagementAccountYear,
};