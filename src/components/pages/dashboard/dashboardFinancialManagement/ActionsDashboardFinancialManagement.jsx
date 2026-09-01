import { SectionActionContainer, SectionActionList, SectionDashboardActions, SectionDeadlineList } from "@/components/ui";

function ActionsDashboardFinancialManagement({page, protectedPersons = [], onAddDossier, onAction}) {
    const caseStatusSection = page.caseStatus;
    const actionsSection = page.quickActions;
    const alertsSection = page.alerts;

    return (
        <SectionDashboardActions>
            <SectionActionContainer title={caseStatusSection.title}>
                
            </SectionActionContainer>
            
            <SectionActionContainer title={actionsSection.title}>
                <SectionActionList
                    actions={actionsSection.items}
                    onAction={onAction}
                />
            </SectionActionContainer>

            <SectionActionContainer title={alertsSection.title}>

            </SectionActionContainer>
        </SectionDashboardActions>
    )
}

export default ActionsDashboardFinancialManagement;