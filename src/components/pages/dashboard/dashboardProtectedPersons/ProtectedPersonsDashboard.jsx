import { DashboardSection, DashboardSectionLoading, DashboardTable } from "@/components/ui";
import { commonMessages, measureStatuses, messages } from "@/data";
import { useProtectedPersons } from "@/hooks";
import { getMeasureDeadline, getMeasureDeadlineLabel, getMeasureLabel, getMeasureStatus } from "@/utils";

function ProtectedPersonsDashboard({page, protectedPersons, loading, error}) {
    const section = page.protected;

    if (loading) {
        return (
            <DashboardSection>
                { messages.loading }
            </DashboardSection>
        )
    }

    const rows = protectedPersons.map((item) => {
        const status = getMeasureStatus(item.measure);

        return {
            id: item.dossier_id,
            fullname: `${item.protected_person.firstname} ${item.protected_person.lastname}`,
            measure: getMeasureLabel(item.measure),
            measure_tracking: getMeasureDeadlineLabel(item.measure),
            status: status.label,
            status_variant: status.variant,
        }
    })

    return (
        <DashboardSection variant="home">
            <DashboardTable
                columns={section.columns}
                emptyMessage={section.emptyMessage}
                rows={rows}
            />
        </DashboardSection>
    )
}

export default ProtectedPersonsDashboard;