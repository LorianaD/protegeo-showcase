import { SectionActionContainer, SectionActionList, SectionDashboardActions, SectionDeadlineList } from "@/components/ui";

function ActionsDashboardHome({page, protectedPersons = [], onAddDossier}) {
    const deadlineSection = page.deadline;
    const actionsSection = page.actions;

     const deadlines = [];

    protectedPersons.forEach((protectedPerson) => {
        const measure = protectedPerson.measure;

        const fullname = `${protectedPerson.protected_person.firstname} ${protectedPerson.protected_person.lastname}`;

        if (hasManagementAccountToSubmit(measure)) {
            deadlines.push({
                id: `management-account-${protectedPerson.dossier_id}`,
                label: "Compte de gestion annuel",
                fullname: fullname,
                status: "À préparer",
                variant: "warning",
            });
        }

        if (isMeasureUrgent(measure)) {
            deadlines.push({
                id: `measure-${protectedPerson.dossier_id}`,
                label: "Renouvellement de la mesure",
                fullname: fullname,
                status: "À prévoir",
                variant: "warning",
            });
        }
    });

    return (
        <SectionDashboardActions>
            <SectionActionContainer title={deadlineSection.title}>
                <SectionDeadlineList
                    deadlines={deadlines}
                    emptyMessage={deadlineSection.emptyMessage}
                />
            </SectionActionContainer>
            
            <SectionActionContainer title={actionsSection.title}>
                <SectionActionList
                    actions={actionsSection.items}
                />
            </SectionActionContainer>
        </SectionDashboardActions>
    )
}

export default ActionsDashboardHome;