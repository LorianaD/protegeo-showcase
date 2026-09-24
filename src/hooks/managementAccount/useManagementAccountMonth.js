import { useEffect, useState } from "react";
import { formatMonthLabel, getManagementAccountMonthOptions, getMonthlyTransactions, getMonthlyUpdateDate, getPreviousMonth, getTransactionTotal } from "@/utils";

function useManagementAccountMonth(managementAccount, page, transactions = [], previousManagementAccountTransactions = []) {
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

    const previousMonthIsBeforeCurrentAccount =
        previousMonth
        && managementAccount?.start_date
        && previousMonth < managementAccount.start_date.slice(0, 7);

    const previousMonthTransactions = isAnnualView
        ? []
        : getMonthlyTransactions(
            previousMonthIsBeforeCurrentAccount
                ? previousManagementAccountTransactions
                : transactions,
            previousMonth
        );

    const previousTransactions = isAnnualView 
        ? []
        : [
            ...previousManagementAccountTransactions,
            ...transactions.filter(
                (transaction) =>
                    transaction.operation_date?.slice(0, 7) < month
            ),
        ];

    const previousResources = getTransactionTotal(
        previousTransactions, 
        "resource"
    );

    const previousExpenses = getTransactionTotal(
        previousTransactions,
        "expense"
    );

    const previousBalance = previousResources - previousExpenses;

    // This is the single transaction list used by
    // category statistics and account tables.
    const displayedTransactions = isAnnualView
        ? transactions
        : monthTransactions;

    const monthUpdateDate = getMonthlyUpdateDate(
        displayedTransactions,
        month
    );

    const previousMonthUpdateDate = getMonthlyUpdateDate(
        previousMonthTransactions,
        previousMonth
    );

    const monthLabel = monthOptions.find(
        (monthOption) => monthOption.value === month
    )?.label ?? "";

    const previousMonthLabel = isAnnualView
        ? ""
        : formatMonthLabel(
            previousMonth,
            page.monthNav.months
        );

    return {
        month,
        monthLabel,
        previousMonthLabel,
        monthOptions,
        isAnnualView,
        displayedTransactions,
        monthTransactions,
        monthUpdateDate,
        previousMonthTransactions,
        previousMonthUpdateDate,
        previousResources,
        previousExpenses,
        previousBalance,
        handleMonthChange,
    };
}

export {
    useManagementAccountMonth,
};