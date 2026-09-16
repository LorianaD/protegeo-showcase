import { useEffect, useState } from "react";
import {
    getMonthlyTransactions,
    getMonthlyUpdateDate,
    getPreviousMonth,
} from "@/utils";

function useManagementAccountMonth(
    year,
    page,
    transactions = []
) {
    const months = page.monthNav.months;

    const [month, setMonth] = useState("");

    const monthOptions = year ? months.map((monthOption) => ({
            value: monthOption.value === "annual"
                ? "annual"
                : `${year}-${String(monthOption.value).padStart(2, "0")}`,

            label: `${monthOption.label} ${year}`,
        })) : [];

    function handleMonthChange(event) {
        setMonth(event.target.value);
    }

    function getDefaultMonth() {
        if (!year) {
            return "";
        }

        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();

        if (Number(year) !== currentYear) {
            return "annual";
        }

        const currentMonth = String(
            currentDate.getMonth() + 1
        ).padStart(2, "0");

        return `${year}-${currentMonth}`;
    }

    useEffect(() => {
        setMonth(getDefaultMonth());
    }, [year]);

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