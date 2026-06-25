import { StatsSection } from "@/components/ui";
import { homeDashboard } from "@/data";

function StatsDashboardHome() {
    return (
        <StatsSection stats={homeDashboard.stats} />
    )
}

export default StatsDashboardHome;