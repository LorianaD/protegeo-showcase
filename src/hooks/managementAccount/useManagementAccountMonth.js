import { useEffect, useState } from "react";
import { getManagementAccountMonthOptions, getMonthlyTransactions, getMonthlyUpdateDate, getPreviousMonth } from "@/utils";

function useManagementAccountMonth(managementAccount, page, transactions = []) {
    const [month, setMonth] = useState("");

    const monthOptions = getManagementAccountMonthOptions(
        managementAccount,
        page.monthNav.months
    );

    function handleMonthChange(event) {
        setMonth(event.target.value);
    }

    function getDefaultMonth() {
        if (!managementAccount) {
            return "";
        }

        const currentDate = new Date();

        const currentMonth = [
            currentDate.getFullYear(),
            String(currentDate.getMonth() + 1).padStart(2, "0"),
        ].join("-");

        const currentMonthExists = monthOptions.some(
            (monthOption) => monthOption.value === currentMonth
        );

        if (currentMonthExists) {
            return currentMonth;
        }

        return "annual";
    }

    useEffect(() => {
        setMonth(getDefaultMonth());
    }, [managementAccount?.id]);

    const isAnnualView = month === "annual";

    const previousMonth = isAnnualView
        ? ""
        : getPreviousMonth(month);

    const monthTransactions = isAnnualView
        ? []
        : getMonthlyTransactions(
            transactions,
            month
        );

    const previousMonthTransactions = isAnnualView
        ? []
        : getMonthlyTransactions(
            transactions,
            previousMonth
        );

    // This is the single transaction list used by
    // category statistics and account tables.
    const displayedTransactions = isAnnualView
        ? transactions
        : monthTransactions;

    const monthUpdateDate = getMonthlyUpdateDate(
        displayedTransactions,
        isAnnualView ? "" : month
    );

    const previousMonthUpdateDate = getMonthlyUpdateDate(
        previousMonthTransactions,
        previousMonth
    );

    const monthLabel = monthOptions.find(
        (monthOption) => monthOption.value === month
    )?.label ?? "";

    return {
        month,
        monthLabel,
        monthOptions,
        isAnnualView,
        displayedTransactions,
        monthTransactions,
        monthUpdateDate,
        previousMonthTransactions,
        previousMonthUpdateDate,
        handleMonthChange,
    };
}

export {
    useManagementAccountMonth,
};