import { StatsSection } from "@/components/ui";

function StatsDashboardFinancialManagement({page, statsData = {}}) {
    const stats = page.stats.map((stat) => {
        const value = statsData[stat.name] ?? 0;

        return {
            ...stat,
            data: stat.format === "currency" ? `${Number(value).toLocaleString("fr-FR")} €` : value,
        };
    });

    return (
        <StatsSection stats={stats} />
    )
}

export default StatsDashboardFinancialManagement;