import DashboardSection from "./DashboardSection"

function DashboardSectionLoading({ section }) {
    return (
        <DashboardSection
            title={section.header.title}
            actionLabel={section.header.btn_label}
        >
            <p>{section.messages.loading}</p>
        </DashboardSection>        
    )
}

export default DashboardSectionLoading;