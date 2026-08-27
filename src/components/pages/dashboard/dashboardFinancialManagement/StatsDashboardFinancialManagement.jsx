import { StatsSection } from "@/components/ui";
import { formatCurrency } from "@/utils";

function StatsDashboardFinancialManagement({page, statsData = {}}) {
    const stats = page.stats.map((stat) => {
        const value = statsData[stat.name] ?? 0;

        return {
            ...stat,
            data: stat.format === "currency" ? formatCurrency(value) : value,
        };
    });

    return (
        <StatsSection stats={stats} />
    )
}

export default StatsDashboardFinancialManagement;