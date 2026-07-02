import { DashboardSection } from "@/components/ui";

function IdentifyDashboardUserProfile({ page }) {
    return (
        <DashboardSection
            title={ page.identify.header.title }
            actionLabel={ page.identify.header.btn_label }
        />
    )
}

export default IdentifyDashboardUserProfile;