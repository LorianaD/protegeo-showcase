import { formatCurrency } from "../format";

function formatFinancialStats(stats, statsData, dates) {
    return stats.map((stat) => {
        const date = typeof dates === "object"
            ? dates[stat.name]
            : dates;

        return {
            ...stat,

            data: formatCurrency(
                statsData[stat.name] ?? 0
            ),

            description: date
                ? `${stat.description} ${date}`
                : stat.description,
        };
    });
}

export {
    formatFinancialStats,
};