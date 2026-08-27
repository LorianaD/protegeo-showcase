import { useEffect, useState } from "react";
import { useManagementAccounts } from "@/hooks";

function useManagementAccountYear(dossierId) {
    const {managementAccounts, loading, error} = useManagementAccounts(dossierId);

    const [year, setYear] = useState("");

    const yearOptions = managementAccounts.map((managementAccount) => ({
        value: managementAccount.year,
        label: managementAccount.year,
    }));

    function handleYearChange(event) {
        setYear(event.target.value);
    }

    function getLatestYear() {
        if (managementAccounts.length === 0) {
            return "";
        }

        const years = managementAccounts.map(
            (managementAccount) => Number(managementAccount.year)
        );

        return String(Math.max(...years));
    }

    useEffect(() => {
        setYear("");
    }, [dossierId]);

    useEffect(() => {
        if (managementAccounts.length === 0 || year) {
            return;
        }

        setYear(getLatestYear());
    }, [managementAccounts, year]);

    const managementAccount = managementAccounts.find(
        (managementAccount) =>
            Number(managementAccount.year) === Number(year)
    );

    return {
        managementAccounts,
        managementAccount,
        managementAccountId: managementAccount?.id ?? null,
        year,
        yearOptions,
        handleYearChange,
        loading,
        error,
    };
}

export {
    useManagementAccountYear,
};