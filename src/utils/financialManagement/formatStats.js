import { formatCurrency } from "../format";

function formatResourceStats(stats, statsData, dates) {
    return stats.map((stat) => {
        const date = typeof dates === "object"
            ? dates[stat.name]
            : dates;

        return {
            ...stat,
            data: formatCurrency(statsData[stat.name] ?? 0),
            description: date
                ? `${stat.description} ${date}`
                : stat.description,
        };
    });
}

function formatExpensesStats(stats, statsData, date) {
    return stats.map((stat) => ({
        ...stat,
        data: formatCurrency(statsData[stat.name] ?? 0),
        description: `${stat.description} ${date}`,
    }));
}

function formatBankStats(stats, statsData, date) {
    return stats.map((stat) => ({
        ...stat,
        data: formatCurrency(statsData[stat.name] ?? 0),
        description: `${stat.description} ${date}`,
    }));
}

export {
    formatResourceStats,
    formatExpensesStats,
    formatBankStats,
};