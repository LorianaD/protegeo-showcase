import { DashboardSection } from "@/components/ui";

function AddProtectedPersonsDashboard({page, onAddDossier}) {
    const section = page.add;

    return (
        <DashboardSection
            title={section.title}
            addLabel={section.actionLabel.label}
            onAdd={onAddDossier}
        />
    )
}

export default AddProtectedPersonsDashboard;