import { DashboardSection, DashboardSectionLoading, DashboardTable } from "@/components/ui";
import { formatDate, getMeasureDeadline, getMeasureDeadlineLabel, getMeasureLabel, getMeasureStatus } from "@/utils";

function ProtectedPersonsDashboardHome({page, protectedPersons = [], loading, error, variant}) {
    const section = page.protected;

    if (loading) {
        return (
            <DashboardSectionLoading section={section} page={page}/>
        )
    }

    const sortedProtectedPersons = [...protectedPersons].sort(
        (firstPerson, secondPerson) => {
            const firstDate = new Date(firstPerson.opened_at);
            const secondDate = new Date(secondPerson.opened_at);

            return secondDate - firstDate;
        }
    );

    const latestProtectedPersons = sortedProtectedPersons.slice(0, 3);

    const rows = latestProtectedPersons.map((item) => {
        const status = getMeasureStatus(item.measure);

        return {
            id: item.dossier_id,
            fullname: `${item.protected_person.firstname} ${item.protected_person.lastname}`,
            measure: getMeasureLabel(item.measure),
            measure_tracking: getMeasureDeadlineLabel(item.measure),
            status: status.label,
            status_variant: status.variant,
        };
    });

    return (
        <DashboardSection title={section.header.title} variant={variant}>
            <DashboardTable
                columns={section.columns}
                emptyMessage={section.emptyMessage}
                rows={rows}
            />
        </DashboardSection>
    )
}

export default ProtectedPersonsDashboardHome;