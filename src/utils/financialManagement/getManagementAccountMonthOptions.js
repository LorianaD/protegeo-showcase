function createMonthDate(date) {
    const [year, month] = date
        .slice(0, 10)
        .split("-")
        .map(Number);

    return new Date(year, month - 1, 1);
}

function formatMonthValue(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");

    return `${year}-${month}`;
}

function getCalendarYearOptions(
    year,
    monthDefinitions
) {
    return monthDefinitions
        .filter((month) => month.value !== "annual")
        .map((month) => ({
            value: `${year}-${String(month.value).padStart(2, "0")}`,
            label: `${month.label} ${year}`,
        }));
}

function getManagementAccountMonthOptions(
    managementAccount,
    monthDefinitions
) {
    if (!managementAccount) {
        return [];
    }

    const year = new Date(managementAccount.year).getFullYear();

    const annualDefinition = monthDefinitions.find(
        (month) => month.value === "annual"
    );

    const annualOption = {
        value: "annual",
        label: `${annualDefinition.label} ${year}`,
    };

    const startDate = managementAccount.start_date;
    const endDate = managementAccount.end_date;

    // Legacy accounts without a recorded period keep a calendar-year filter.
    if (!startDate || !endDate) {
        return [
            annualOption,
            ...getCalendarYearOptions(year, monthDefinitions),
        ];
    }

    const startMonth = createMonthDate(startDate);
    const endMonth = createMonthDate(endDate);
    const monthOptions = [annualOption];

    const currentMonth = new Date(startMonth);

    while (currentMonth <= endMonth) {
        const monthNumber = currentMonth.getMonth() + 1;

        const monthDefinition = monthDefinitions.find(
            (month) => month.value === monthNumber
        );

        monthOptions.push({
            value: formatMonthValue(currentMonth),
            label: `${monthDefinition.label} ${currentMonth.getFullYear()}`,
        });

        currentMonth.setMonth(currentMonth.getMonth() + 1);
    }

    return monthOptions;
}

export {
    getManagementAccountMonthOptions,
};