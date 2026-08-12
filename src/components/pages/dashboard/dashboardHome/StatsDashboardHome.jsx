import { StatsSection } from "@/components/ui";
import { hasManagementAccountToSubmit, isMeasureUrgent } from "@/utils";

function StatsDashboardHome({page, protectedPersons = []}) {
    const statsData = {
        protectedPersons: protectedPersons.length,

        urgentDossiers: protectedPersons.filter((protectedPerson) => (
            isMeasureUrgent(protectedPerson.measure)
        )).length,

        managementAccounts: protectedPersons.filter((protectedPerson) => (
            hasManagementAccountToSubmit(protectedPerson.measure)
        )).length,
    };

    const stats = page.stats.map((stat) => ({
        ...stat,
        data: statsData[stat.name] ?? 0,
    }));

    return (
        <StatsSection stats={stats} />
    )
}

export default StatsDashboardHome;