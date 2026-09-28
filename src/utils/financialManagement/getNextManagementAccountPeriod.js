function getNextManagementAccountPeriod(managementAccounts) {
    if (managementAccounts.length === 0) {
        return null;
    }

    const latestManagementAccount = [...managementAccounts].sort(
        (firstAccount, secondAccount) =>
            new Date(secondAccount.end_date) - new Date(firstAccount.end_date)
    )[0];

    if (!latestManagementAccount.end_date) {
        return null;
    }

    const latestEndDate = new Date(
        `${latestManagementAccount.end_date}T00:00:00`
    );

    const nextStartDate = new Date(latestEndDate);
    nextStartDate.setDate(nextStartDate.getDate() + 1);

    const nextYear = nextStartDate.getFullYear();

    return {
        year: String(nextYear),
        start_date: formatDateForInput(nextStartDate),
        end_date: `${nextYear}-12-31`,
        note: "",
    };
}

function formatDateForInput(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

export {
    getNextManagementAccountPeriod,
};