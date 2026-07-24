import { StatsSection } from "@/components/ui";

function StatsDashboardHome({page}) {
    const section = page.stats;
    return (
        <StatsSection stats={section} />
    )
}

export default StatsDashboardHome;