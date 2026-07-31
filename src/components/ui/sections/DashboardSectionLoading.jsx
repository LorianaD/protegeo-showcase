import DashboardSection from "./DashboardSection"

function DashboardSectionLoading({ section, page }) {
    const loadingMessage = section?.messages?.loading ?? page?.messages?.loading ?? "Chargement...";

    return (
        <DashboardSection
            title={section.header.title}
            actionLabel={section.header.btn_label}
            addLabel={section.header.btn_label_add}
        >
            <p>{ loadingMessage }</p>
        </DashboardSection>        
    )
}

export default DashboardSectionLoading;