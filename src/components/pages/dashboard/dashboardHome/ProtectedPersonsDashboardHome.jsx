import { DashboardSection, DashboardSectionLoading, DashboardTable } from "@/components/ui";
import { commonMessages, measureStatuses } from "@/data";
import { useProtectedPersons } from "@/hooks";

function ProtectedPersonsDashboardHome({page}) {
    const section = page.protected;

    const { protectedPersons, loading, error } = useProtectedPersons();

    function getMeasureLabel(measure) {
        if (!measure) {
            return commonMessages.noMeasure;
        }

        const measureType = measure.measure_type ?? commonMessages.notProvidedFeminine;

        return measureType;
    }

    function getMeasureDeadline(measure) {
        if (!measure?.end_date) {
            return commonMessages.notProvidedFeminine;
        }

        return measure.end_date;
    }
    
    function getMeasureStatus(measure) {
        if (!measure) {
            return commonMessages.noMeasure;
        }

        if (measure.end_date) {
            return measureStatuses.ended;
        }

        return measureStatuses.active;
    }

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
            deadline: getMeasureDeadline(item.measure),
            status: status.label,
            status_variant: status.variant,            
        }
    })

    return (
        <DashboardSection title={section.header.title}>
            <DashboardTable
                columns={section.columns}
                emptyMessage={section.emptyMessage}
                rows={rows}
            />
        </DashboardSection>
    )
}

export default ProtectedPersonsDashboardHome;